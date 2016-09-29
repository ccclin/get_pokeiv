object false
node :pokes do
  @pokes.map do |poke|
    next if poke['pokemon_id'].to_sym == KeyValues::PokeInfo.find_by(code: :MISSINGNO).code
    {
      name: KeyValues::PokeInfo.find_by(code: poke['pokemon_id'].to_sym).tw_name,
      cp: poke['cp'],
      iv: poke['iv'],
      individual_attack: poke['individual_attack'],
      individual_defense: poke['individual_defense'],
      individual_stamina: poke['individual_stamina'],
      move_1: poke['move_1'],
      move_2: poke['move_2']
    }
  end.compact
end
