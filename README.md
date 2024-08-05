# Query 'Em All

Practice writing queries with React Query and displaying loading states, error states, and data. We will be using the [Pokémon API](https://pokeapi.co).

## Setup

### 0. Cloning and installation

- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

  ```sh
  cd query-em-all
  npm i
  npm run dev
  ```

  </details>

### 1. Looking around

`client/apis/pokemon.ts` is written for you! Take a look at it and then try it out in Thunder Client (a VS Code extension for testing APIs) to see what it returns. The types are also written for you in `models/pokemon.ts`, they only contain the fields we are interested in.

`<AppLayout>` is rendering two client-side routes, `/` and `/pokemon/:name`:

- `/` renders `<PokemonList>`, a list of hardcoded Pokémon
- `/pokemon/:name` renders `<PokemonDetail>`, a single Pokémon (with lots more information), also hardcoded

Visit [localhost:5173/](http://localhost:5173/) and [localhost:5173/pokemon/bulbasaur](http://localhost:5173/pokemon/bulbasaur), Bulbasaur is currently our only resident Pokémon. We will be replacing the hardcoded data with data from the API.

### 2. Setting up React Query

- [ ] Install React Query and React Query Devtools

```sh
npm i -D @tanstack/react-query @tanstack/react-query-devtools
```

- [ ] In `client/index.tsx` import `{ QueryClient, QueryClientProvider }` from `@tanstack/react-query`

- [ ] In `client/index.tsx` import `{ ReactQueryDevtools }` from `@tanstack/react-query-devtools`

- [ ] Create a new `QueryClient` instance and wrap the `<RouterProvider />` component in a `<QueryClientProvider>` component, passing the `QueryClient` instance as a prop

- [ ] Within the `QueryClient` instance, add in the `<ReactQueryDevtools />` component.

  <details style="padding-left: 2em">
    <summary>Tip</summary>

  ```tsx
  // creating a new QueryClient instance
  const queryClient = new QueryClient()

  // ...

  root.render(
    // wrapping the app in a QueryClientProvider
    // and passing the QueryClient instance as a prop
    // Adding ReactQueryDevtools
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
  ```

  </details>

---

## Challenges

### 1. Fetching a list of Pokémon from the API

- [ ] As a user, I want to see a list of the first generation of Pokémon so that I can see what Pokémon there are

  - In `<PokemonList>` use `useQuery` and `fetchPokemonGeneration` to render a list of Pokémon (just the names)
    <details style="padding-left: 2em">
      <summary>More about fetching Pokémon</summary>
      
      - `fetchPokemonGeneration` takes a `generation` parameter, which is a number between 1 and 9, in this case, we want to fetch the first generation of Pokémon, so we can pass `1`
      - Check out `interface PokemonGeneration` in `models/pokemon.ts`
      - `useQuery` takes a key (a string) and a function that returns a promise (`fetchPokemonGeneration`, in this case) and returns an object with a `data` property, which will eventually contain data returned by the promise

    Read more about [keys](https://tanstack.com/query/latest/docs/react/guides/query-keys) and [queries](https://tanstack.com/query/latest/docs/react/guides/queries) in the [React Query docs](https://tanstack.com/query/latest/docs/react).
    </details>

### 2. Adding a loading state

- [ ] As a user, I want to see a loading state while the list of Pokémon is being fetched so that I know something is happening
<details style="padding-left: 2em">
  <summary>More about loading states</summary>
  
  - `useQuery` returns an `isPending` property that you can use to determine when to render a loading state
  - You can use the `<LoadingSpinner>` component to render a special pokéball loading spinner
</details>

### 3. Adding an error state

- [ ] As a user, if something goes wrong while fetching the list of Pokémon, I want to see an error state so that I know something went wrong
  <details style="padding-left: 2em">
    <summary>More about error states</summary>

  - `useQuery` returns an `isError` (true or false), and `error` properties that you can use to render an error state

  </details>

### 4. Fetching a single Pokémon

- [ ] As a user, when I click on a Pokémon in the list, I want to see more information about that Pokémon so that I can learn more about it

  - In `<PokemonList>`, add a `<Link>` to each Pokémon that links to `/pokemon/:name`, where `:name` is the name of the Pokémon, note: the URL should be the lowercase name of the Pokémon (e.g. `/pokemon/bulbasaur`)
  - In `<PokemonDetail>`, use `useQuery` and `fetchPokemonByName` to render the Pokémon's name, image, and types
  <details style="padding-left: 2em">
    <summary>More about Pokémon details</summary>
    
    Have a look in `models/pokemon.ts` at the `Pokemon` type to see what properties are available to you.
  </details>

  - In `<PokemonDetail>`, add loading and error states

### 5. Adding more data to `<PokemonDetail>`

- [ ] As a user, I want to see more information about the Pokémon so that I can learn more about it
  - In `<PokemonDetail>`, use `console.log` to see what the _actual_ API is returning
  - Choose some fields and add them to the `Pokemon` type in `models/pokemon.ts`
  - In `<PokemonDetail>`, render those new fields in some way of your choosing

---

## Stretch

<details>
  <summary>More about stretch challenges</summary>

- [ ] As a user, on the homepage (`/`) I want to see a list of all the generations, so that I can click on one, go to `/generations/:generationId` and see the list of Pokémon for that generation

- [ ] As a user, I want to see a search bar at the top of the page, so that I can search for a Pokémon by name, when I hit enter, I want to be taken to `/search?name=pokemonName`, which should display a filtered list of Pokémon

</details>

## Submitting this Challenge for Marking

This challenge can be used for the following trello assessment(s):

- **WD02: Build a Javascript application that consumes a restful JSON API**

---

[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=query-em-all)
