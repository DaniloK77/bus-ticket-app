# Bus Ticket App

Web application for searching and booking bus tickets.

## Project structure

- `bus-ticket-app/frontend` — Next.js (React, TypeScript, Tailwind CSS)
- `bus-ticket-app/backend/bus_ticket` — Elixir / Phoenix API

## Running locally

Frontend:

```bash
cd bus-ticket-app/frontend
npm install
npm run dev
```

Backend:

```bash
cd bus-ticket-app/backend/bus_ticket
mix setup
mix phx.server
```
