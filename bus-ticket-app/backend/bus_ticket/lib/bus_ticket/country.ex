defmodule BusTicket.Country do 
  
  
  use Ecto.Schema
  import Ecto.Changeset
  
  schema "countries" do 
    
    field :name, :string 
    field :code, :string
    
    has_many :cities, BusTicket.City
     
    timestamps();
    
  end
  
  
  
  defchangeset(country, attrs) do 
    country
    |> cast(attrs, [:name, :code])
    |> validate_required([:name, :code])
    |> unique_constraint(:code)
    |> validate_length(:code, min: 2, max: 5)
    |> validate_length(:name, min: 3, max: 50)
  end
  
end
