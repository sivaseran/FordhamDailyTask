# Fordham Daily Task — V1.0

Live operations and daily-task app for Fordham Service Station. Go-live: 7 November 2026.

## Apps

| App | URL | Installed name |
|---|---|---|
| General View (shared tablet) | https://sivaseran.github.io/FordhamDailyTask/ | Fordham General View (FD General) |
| Staff Tasks (staff phones) | https://sivaseran.github.io/FordhamDailyTask/staff-app/ | Fordham Staff Tasks (FD Staff) |

Manager login is on the General View login page (PIN 1510). Staff log in with their 4-digit PIN.

## Backend

Firebase project `fordham-daily-task`, Firestore only (no Authentication, no Storage, no Analytics).
Security rules are in `firestore.rules`: paste them into Firebase console → Firestore Database → Rules → Publish.

## First run

The first login on the empty database creates, once:
- Staff and PINs: Alex 1111, Regi 2222, Jude 3333, Seran 4444, Kumar 5555, Rishi 6666, Sundhar 7777; Manager 1510
- Weekly shift pattern (Manager → Staff Availability)
- Hot food switched on: initial cooking 06:00 — Alex Mon/Tue/Thu/Fri, Regi Wed; weekends manual start
- 29 weekly tasks, cleaning rotation, compliance checks (Manager → Schedule Editor / Cleaning Rotation / Compliance Checks)

Later Manager edits are never overwritten by this setup. Nothing is generated before 7 November 2026.

## Station rules

- Open 05:30–22:00 every day. No Sunday evening rotation.
- Deliveries: Seran Monday, Jude Thursday, 4 hours, time varies with the delivery (notes only, not scheduled).
- Cleaning: one weekly slot per person, next zone in their list each time, wrapping round. Seran: rotation Tuesday, Milk Shelf every Thursday 09:00.
- Weekly Safety Check: Sunday 12:01, Alex. Temperature equipment can be added, renamed or removed in Manager → Compliance Checks.
- Photo tasks show a "Send photo to WhatsApp group" reminder; the app does not upload photos.
