import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import PokemonList from './components/PokemonList.tsx'
import PokemonDetail from './components/PokemonDetail.tsx'
import PokemonSpecies from './components/PokemonSpecies.tsx'

export const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route index element={<PokemonList />} />
    <Route path="/" element={<PokemonSpecies />} />
    <Route path="pokemon/:name" element={<PokemonDetail />} />
  </Route>,
)
