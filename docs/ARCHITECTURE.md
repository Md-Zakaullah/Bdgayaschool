# Architecture notes

## Product scope
Single-school deployment, fewer than 500 students, web-only, Hindi + English, premium and simple UI.

## Architecture
Start as a modular monolith: one Next.js application with clear feature boundaries and one PostgreSQL database. Keep module navigation and feature registration centralized so modules can be enabled, disabled, or replaced without rewriting unrelated features.

## Roles (planned)
- Super Admin: full configuration and user management
- Principal: approvals, oversight and reports
- Admission Operator: enquiries and admission applications
- Accountant: fee plans, collections, dues and receipts
- Teacher: assigned classes, attendance, homework and marks
- Warden: hostel residents, rooms and bed allocation
- Parent / Student: limited read-only or permitted portal access

## Security requirements before production
Use secure password hashing, server-side session validation, role + permission checks on every protected server action/API, audit logs for sensitive changes, rate limiting, backups, and least-privilege access. Never rely on hiding UI controls as authorization.

## Data protection
Do not use real student information in development or screenshots. Store secrets only in environment variables. Define retention, consent, and backup policies before launch.
