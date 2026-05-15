defmodule BusTicket.Repo.Migrations.CreateCountries do
  use Ecto.Migration

  def change do
    create table(:countries) do
      add :name, :string, null: false
      add :code, :string, null: false

      timestamps()
    end

    create unique_index(:countries, [:code])
    create unique_index(:countries, [:name])
  end
end
