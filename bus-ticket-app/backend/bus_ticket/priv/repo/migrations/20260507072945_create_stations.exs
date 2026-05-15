defmodule BusTicket.Repo.Migrations.CreateStations do
  use Ecto.Migration

  def change do
    create table(:stations) do
      add :name, :string, null: false
      add :location, :string, null: false
      add :code, :string, null: false
      add :description, :text, null: false
      add :is_active, :boolean, default: true, null: false

      add :city_id, references(:cities, on_delete: :delete_all), null: false

      timestamps()
    end

    create unique_index(:stations, [:code])

    create unique_index(:stations, [:name, :city_id])
    create index(:stations, [:city_id])


  end
end
