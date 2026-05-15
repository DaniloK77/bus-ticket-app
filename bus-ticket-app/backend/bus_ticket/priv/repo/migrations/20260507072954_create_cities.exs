defmodule BusTicket.Repo.Migrations.CreateCities do
  use Ecto.Migration

  def change do
    create table(:cities) do
      add :name, :string, null: false
      add :postal_code, :string, null: false
      add :image, :string



      add :country_id,
          references(:countries, on_delete: :delete_all),
          null: false

      timestamps()
    end

    create unique_index(:cities, [:name, :country_id])

    create index(:cities, [:country_id])
    create index(:cities, [:postal_code])
  end
end
