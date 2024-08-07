export interface PokemonGeneration {
  id: number
  main_region: ApiLink
  moves?: ApiLink[]
  name: string
  names?: Name[]
  pokemon_species: ApiLink[]
  types?: ApiLink[]
  version_groups?: ApiLink[]
}

export interface Name {
  language: ApiLink
  name: string
}

export interface ApiLink {
  name: string
  url: string
}

export interface Pokemon {
  name: string
  id: number
  sprites: {
    front_default: string
    back_default: string
    front_shiny: string
    back_shiny: string
    other: Other
  }

  abilities: Array<Ability>
  moves: Array<Move>
  types: Array<TypeInfo>
}

export interface Other {
  showdown: Sprites
}

export interface Sprites {
  back_default: string
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
  other?: Other
  animated?: Sprites
}

interface Ability {
  ability: { name: string; url: string }
  is_hidden: boolean
  slot: number
}

interface Move {
  move: { name: string; url: string }
}

interface TypeInfo {
  slot: number
  type: { name: string; url: string }
}

export interface SearchResults {
  results: Result[]
}

export interface Result {
  name: string
  url: string
}
export interface Species {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface Result {
  name: string
  url: string
}
