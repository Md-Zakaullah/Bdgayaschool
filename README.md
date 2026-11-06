# School + Hostel ERP

A modular, bilingual (Hindi/English) school and hostel management system for a single school (under 500 students).

## Stack
- Next.js 15, React 19, TypeScript
- Tailwind CSS
- PostgreSQL + Prisma
- Role-based access (to be implemented in the next phase)

## Setup
1. Install Node.js 20 or later.
2. Clone this repository.
3. Run `npm install`.
4. Copy `.env.example` to `.env` and set `DATABASE_URL`.
5. Run `npx prisma generate`.
6. Run `npm run dev` and open http://localhost:3000.

## Important
This is the initial UI and architecture foundation. Authentication, authorization, database-backed workflows, and production security must be completed before real student data is entered. Never commit secrets or student records.

## Planned modules
Dashboard, Admissions, Students, Attendance, Fees, Exams & Results, Teachers & Staff, Hostel, Parent Portal, Reports, Settings.
