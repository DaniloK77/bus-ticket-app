defmodule BusTicket.Repo do
  use Ecto.Repo,
    otp_app: :bus_ticket,
    adapter: Ecto.Adapters.Postgres
end
