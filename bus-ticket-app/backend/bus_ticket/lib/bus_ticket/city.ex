defmodule BusTicket.City do


  use Ecto.Schema
  import Ecto.Changeset


  schema "cities" do


    field :name, :string
    field :adress, :string
    field :postal_code, :string
    field :phone, :string
    field :image, :string



    has_many :stations, BusTicket.Station
    belongs_to :country, BustTicket.Country


    timestamps();
  end



  defchangeset(city, attrs) do
    city
    |> cast(attrs, [:name, :adress, :postal_code, :phone, :image])
    |> validate_required([:name, :adress, :postal_code, :phone, :image])
    |> unique_constraint(:name)
    |> validate_length(:name, min: 3, max: 50)
    |> validate_length(:adress, min: 5, max: 100)
    |> validate_length(:postal_code, min: 4, max: 10)
    |> validate_length(:phone, min: 7, max: 15)

  end


end
