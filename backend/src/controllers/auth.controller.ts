import prisma from "../config/prisma";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken";
import type {
  NextFunction,
  Request,
  Response
} from "express";

// Ensures that only safe fields are sent back to the client.
function serializeUser(user: {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
}) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
}

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, role } = req.body;

    // Prevents multiple accounts from using the same email address.
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered",
      });
    }

    // Stores a hashed password instead of a raw password for security.
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    const token = generateToken({
      userId: user.id,
      role: user.role,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: serializeUser(user),
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });


    // Using the same error message for both cases increases security by not letting the user
    // know if a specific email exists in the system.
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = generateToken({
      userId: user.id,
      role: user.role,
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        user: serializeUser(user),
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};