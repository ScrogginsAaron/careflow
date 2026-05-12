\# CareFlow



CareFlow is a healthcare workflow management application designed to help care teams track patient-related tasks, shift handoffs, priorities, and follow-up items.



The project is being built as a full-stack software engineering portfolio project focused on healthcare workflows, data integrity, backend architecture, and practical operational software design.



\---



\# Project Goal



The goal of CareFlow is to improve organization and communication between healthcare staff by providing a centralized system for managing tasks, priorities, and shift handoffs.



This project focuses on workflow management rather than electronic medical records. The intent is to model realistic operational problems found in healthcare environments such as:



\- missed follow-up tasks

\- unclear shift communication

\- task accountability

\- priority management

\- workflow organization



\---



\# Why This Project



Healthcare environments rely heavily on accurate communication and task tracking.



CareFlow is inspired by real workflow challenges in clinical settings and is intended to demonstrate:



\- full-stack application development

\- REST API architecture

\- relational database design

\- authentication and authorization

\- audit logging

\- state management

\- healthcare-oriented workflow logic



\---



\# Planned Features



\## Core Features



\- User authentication

\- Role-based permissions

\- Patient task management

\- Task assignment

\- Priority levels

\- Status tracking

\- Shift handoff notes

\- Search and filtering

\- Audit logging



\## Stretch Features



\- Overdue task alerts

\- Escalation rules

\- Dashboard analytics

\- Reporting

\- Notifications

\- Unit testing

\- Deployment



\---



\# Tech Stack



\## Frontend



\- React

\- TypeScript

\- Vite

\- React Router

\- Axios



\## Backend



\- Node.js

\- Express

\- TypeScript

\- Prisma ORM

\- PostgreSQL

\- Zod validation

\- JWT authentication



\## Development Tools



\- Docker

\- Git/GitHub

\- Postman



\---



\# Planned Architecture



```txt

frontend/

backend/

docs/

screenshots/



\---



\# Planned Database Models



* User
* Patient
* CareTask
* Shift
* HandoffNote
* AuditLog



\---



\# Example Workflow



1. Staff member logs in
2. User views assigned patients
3. User updates or creates care tasks
4. Task changes are recorded in audit logs
5. Outstanding tasks are included in shift handoff summaries
6. Incoming staff review unresolved items



\---



\#Local Development



\##Prerequisites

* Node.js
* npm
* Docker Desktop
* Git



\##Planned Setup

Clone the repository:



</> Bash



git clone https://github.com/ScrogginsAaron/careflow

cd careflow



Start PostgreSQL:



</> Bash



docker compose up -d



Backend setup:



</> Bash



cd backend

npm install



Frontend setup:



</> Bash



cd frontend

npm install



\---



\#Project Status 



CareFlow is currently in early development.



Current focus:



* repository setup
* database architecture
* backend foundation
* authentication system



\---



\#Notes

This application uses fictional data only.

No real patient information should ever be stored in this application. 

