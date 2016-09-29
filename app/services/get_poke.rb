class GetPoke
  attr_reader :resp, :pokes

  def initialize(resp)
    @resp = resp
    set_pokes
  end

  def set_pokes
    @pokes = resp.response[:GET_INVENTORY][:inventory_delta][:inventory_items].map do |poke|
      if poke[:inventory_item_data][:pokemon_data]
        new_poke = poke[:inventory_item_data][:pokemon_data]
        new_poke[:iv] = (((new_poke[:individual_attack] + new_poke[:individual_defense] + new_poke[:individual_stamina]) / 45.0) * 100).round(2)
        new_poke[:pid] = KeyValues::PokeInfo.find_by(code: new_poke[:pokemon_id]).id
        new_poke
      end
    end.compact
  end
end
