defmodule BusTicket.Repo.Migrations.CreateStations do
  use Ecto.Migration

  def change do
    create table(:stations) do
      add :name, :string, null: false
      add :location, :string, null: false
      add :code, :string, null: false
      add :city, :string, null: false
      add :country, :string, null: false
      add :description, :string, null: false
      

      add :city_id, references(:cities, on_delete: :delete_all), null: false

      timestamps()
    end

    create unique_index(:stations, [:code])

    create index(:stations, [:city_id])
    create index(:stations, [:city])
    create index(:stations, [:country])
    create index(:stations, [:name])
  end
end