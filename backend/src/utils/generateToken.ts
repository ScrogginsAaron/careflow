import jwt from "jsonwebtoken";

interface TokenPayload {
  userId: string;
  role: string;
}

export const generateToken = ({
  userId, 
  role,
}: TokenPayload) => {
  return jwt.sign(
    { userId, role },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  );
};