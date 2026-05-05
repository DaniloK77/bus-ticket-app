defmodule BusTicket.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      BusTicketWeb.Telemetry,
      BusTicket.Repo,
      {DNSCluster, query: Application.get_env(:bus_ticket, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: BusTicket.PubSub},
      # Start a worker by calling: BusTicket.Worker.start_link(arg)
      # {BusTicket.Worker, arg},
      # Start to serve requests, typically the last entry
      BusTicketWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: BusTicket.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    BusTicketWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
