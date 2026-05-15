defmodule BusTicket.Station do


  use Ecto.Schema
  import Ecto.Changeset

  schema "stations" do

    field :name, :string
    field :location, :string
     field :code, :string
    field :description, :string
    field :is_active, :boolean, default: true



    belongs_to :city, BusTicket.City
    timestamps()

  end


  def changeset(station, attrs) do
    station
    |>cast(attrs, [:name, :location, :code,:description, :city_id, :is_active])
    |>validate_required([:name, :location, :code, :city_id, :description ])
    |> unique_constraint(:code)
    |>validate_length(:code, min: 3, max: 10)
    |>validate_length(:name, min: 3, max: 50)
    |>validate_length(:location, min: 5, max: 50)





  end

end
