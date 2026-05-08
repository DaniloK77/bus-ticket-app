defmodule BusTicket.Repo.Migrations.CreateCountries do
  use Ecto.Migration

  def change do
    
    create table(:countries) do 
      add :name, :string, null: false
      add :code, :string, null: false
      
      
      create
      
      timestamps();
      
      
    end

  end
end
