# UCD-PCL

UCD-PCL is a static web prototype for **Precision Cognition Labs**. It presents a clinician-facing workflow for monitoring Seattle-Groningen Memory Assessment (SGMA) memory check-ins, patient trends, appointments, reminders, and consultation context.

## Live Website

Access the website here:

[https://niclas-j-m.github.io/UCD-PCL](https://niclas-j-m.github.io/UCD-PCL)

The site opens on the clinician dashboard and can be used directly in the browser.

## What the Project Does

The prototype supports a general practitioner or clinician reviewing remote memory-monitoring data. It includes:

- A dashboard with active patients, completed sessions, patients flagged for review, upcoming schedule items, and reminders.
- A patient directory with search and filtering for monitoring status, review needs, and new sessions.
- Patient profile pages with SGMA trends, recent sessions, consultation notes, patient questions, and scheduling actions.
- Session detail pages for reviewing individual check-ins, including quality indicators and SGMA interpretation context.
- A patient-facing results view that presents memory trend information in a simpler format.
- A schedule/calendar view for at-home SGMA deadlines, clinic appointments, and personal clinic blocks.

## How to Use the Website

1. Open the live website: [https://niclas-j-m.github.io/UCD-PCL](https://niclas-j-m.github.io/UCD-PCL)
2. Use the top navigation to move between **Dashboard**, **Patients**, and **Schedule**.
3. On the dashboard, review summary counts, patients needing attention, upcoming events, and reminders.
4. Open **Patients** to search or filter the patient list.
5. Select a patient to view their clinical profile, SGMA trend, recent sessions, notes, and submitted questions.
6. Use **Show to patient** from a patient profile to open the simplified patient-facing view.
7. Use **Schedule** or the scheduling buttons to create or review at-home sessions, appointments, and clinic blocks.

## Running Locally

This project is a static HTML, CSS, and JavaScript site. It does not require npm, a backend server, or a database.

To run it locally:

1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. If needed, open `dashboard.html` directly. `index.html` redirects to the dashboard.

If your browser blocks local files, serve the folder with any simple static server and then open the local URL. For example:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Project Structure

- `index.html` redirects to the main dashboard.
- `dashboard.html` contains the main clinician dashboard.
- `patients.html` contains the patient directory.
- `patient_profile.html` contains the clinician-facing patient profile.
- `patient_session.html` contains details for an individual SGMA session.
- `patients_view.html` contains the simplified patient-facing results view.
- `schedule.html` contains the calendar and scheduling workflow.
- `data/` contains static demo patients, sessions, events, notes, and shared data helpers.
- `ui/` contains shared UI helpers, SGMA norm calculations, and scheduling modal logic.
- `image/` contains logo and visual assets.
- `SGMA_Norm_Calculation_Reference.md` documents the SGMA norm calculation model used by the prototype.

## Data and Model Notes

The application uses static demo data stored in JavaScript files under `data/`. Changes made in the browser are for prototype interaction only and are not persisted to a backend database.

SGMA score transformation and norm comparison logic are implemented in the frontend and documented in `SGMA_Norm_Calculation_Reference.md`.

This project is a prototype and should not be treated as a production medical system.

## Technologies

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages for hosting

