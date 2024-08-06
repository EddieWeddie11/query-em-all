import { PokemonGeneration } from '../../models/pokemon.ts'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonGeneration } from '../apis/pokemon.ts'
import { Link } from 'react-router-dom'

// function GetPokemonName() {
// const { data: pokemonNames, error, isLoading } = useQuery({ queryKey: ['pokemonNames'], queryFn: fetchPokemonGeneration})
// }

const generationNum = 1 //this is so different generations will be saved on client side without require refetch

export default function PokemonList() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ['pokemonGeneration', generationNum],
    queryFn: () => fetchPokemonGeneration(generationNum),
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    console.log(error.message)
    return <p>Error</p>
  }

  const generation = data as PokemonGeneration
  return (
    <>
      <h2>Pokémon in {generation.main_region.name}:</h2>
      <ul>
        {generation.pokemon_species.map((p) => (
          <li key={p.url}>
            <Link to={'/pokemon/' + p.name}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

// const generation = {
//   id: 1,
//   main_region: { name: 'Kanto', url: 'https://pokeapi.co/api/v2/region/1/' },
//   name: 'generation-i',
//   pokemon_species: [
//     { url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur', name: 'Bulbasaur' },
//   ],
// } as PokemonGeneration
