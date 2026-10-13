defmodule BusTicket.City do


  use Ecto.Schema
  import Ecto.Changeset


  schema "cities" do


    field :name, :string

    field :postal_code, :string

    field :image, :string



    has_many :stations, BusTicket.Station
    belongs_to :country, BusTicket.Country


    timestamps()
  end



  def changeset(city, attrs) do
    city
    |> cast(attrs, [:name, :postal_code,  :image, :country_id])
    |> validate_required([:name, :postal_code, :country_id])
    |> unique_constraint(:name, :country_id)
    |> validate_length(:name, min: 3, max: 50)
    |> validate_length(:postal_code, min: 4, max: 10)


  end


end
