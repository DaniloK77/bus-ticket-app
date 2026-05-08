defmodule BusTicket.Repo.Migrations.CreateCities do
  use Ecto.Migration

  def change do

    create table(:cities) do 
      add :name, :string, null: false
      add :adress, :string, null: false
      add :postal_code, :string, null: false
      add :phone, :string, null: false
      add :image, :string, null: false
      add :latitude, :float, null: false
      add :longitude, :float, null: false
      
      add :country_id, references(:countries, on_delete: delete_all), null: false
      
      
      
      
      
      
      timestamps();
      
    end
    end
  end

