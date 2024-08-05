import { PokemonGeneration } from '../../models/pokemon.ts'

export default function PokemonList() {
  return (
    <>
      <h2>Pokémon in {generation.main_region.name}:</h2>
      <ul>
        {generation.pokemon_species.map((p) => (
          <li key={p.url}>{p.name}</li>
        ))}
      </ul>
    </>
  )
}

const generation = {
  id: 1,
  main_region: { name: 'Kanto', url: 'https://pokeapi.co/api/v2/region/1/' },
  name: 'generation-i',
  pokemon_species: [
    { url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur', name: 'Bulbasaur' },
  ],
} as PokemonGeneration
