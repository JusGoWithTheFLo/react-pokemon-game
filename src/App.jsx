import { useState, useEffect } from 'react'
import axios from 'axios'
import LovePokemon from './components/LovePokemon'
import SavedPokemonList from './components/SavedPokemonList'
import Heart from './components/Heart'
import Battle from './components/Battle'


function App() {
  // states
  const starterPokemon = { // player starts with one pokemon!
    id: 25,
    name: 'Pikachu',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif',
    height: '4',
    hearts: [1, 1, 1, 1, 1]
  }
  const randomIndex151 = Math.floor(Math.random() * 150) // randomly generates a pokemon from the original 151
  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(starterPokemon.id - 1) // randomIndex151 for random; starterPokemon.id for starter
  const [shownPokemon, setShownPokemon] = useState(null)
  const [savedPokemonList, setSavedPokemonList] = useState([starterPokemon])
  const [hearts, setHearts] = useState(selectedPokemon === starterPokemon.id - 1 ? starterPokemon.hearts : [0,0,0,0,0]) // if starting game with starter pokemon, show starter pokemon hearts, else 0 hearts
  const [inBattle, setInBattle] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isPokemonSaved, setIsPokemonSaved] = useState(false)
  const [gameError, setGameError] = useState(null)
  const [randomIndexAll, setRandomIndexAll] = useState(null)
  
  // POKEAPI
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      // .then(res => console.log(res.data))
      .then(res => {
        setPokemonList(res.data.results)
        setLoading(false) // sets loading to false when data is fetched
      })
      .catch(err => {
        setError('Failed to load Pokemon data. Please try again later.')
        setLoading(false)
        console.log('Error found in file: ' + err)})
        console.log('POKEMON LIST POPULATED')
      
  }, [])

  // Fetches selectedPokemon from POKEAPI
  useEffect(() => {
    if (pokemonList.length > 0 && selectedPokemon !== undefined){
      setLoading(true) // set loading to true while fetching
      axios.get(pokemonList[selectedPokemon].url)
        .then(res => {
          setShownPokemon(res.data)
          setLoading(false) // set loading to false after fetching
        })
        .catch(err => {
          setError('Failed to fetch Pokemon details. Please try again later.')
          setLoading(false) // set loading to false if error occurs
          console.log('Error found in file: ' + err)
        })
        console.log('SHOWNPOKEMON FETCHED AND SPRITE DATA MOUNTED')
    }
    
  }, [pokemonList, selectedPokemon])  

  // random index from all Pokemon - only after pokemonList is populated
  useEffect(() => {
    if(pokemonList.length > 0){
      const randomIndex = Math.floor(Math.random() * pokemonList.length)
      setRandomIndexAll(randomIndex) // randomly generates a pokemon from ALL pokemon
      console.log("generated random index: ", randomIndex)
    }
  }, [pokemonList, shownPokemon])

  // checks if shownPokemon exists in savedPokemonList
  useEffect(() => {
      setIsPokemonSaved(() => {
      if (!shownPokemon) return false // if shownPokemon is not set yet, return false
       return savedPokemonList.some(pokemon => pokemon.id === shownPokemon.id) // returns true/false instead of index
      })
  }, [shownPokemon, hearts, savedPokemonList])
  
  // show a loading message while fetching
  if(loading){
    return (
    <div className='loading-screen'>
      <div className='spinner'></div>
      <h2>Loading Pokemon data...</h2> 
    </div>
    )
  }
  // show error message in red if there's an error
  if(error){
    return <div style={{color: 'red'}}>{error}</div> 
  }

  console.log('selected Pokemon: ', selectedPokemon)
  console.log('pokemonList length: ', pokemonList.length)

  return (
    <div className='app'>
      <LovePokemon 
        randomIndex151={randomIndex151} 
        pokemonList={pokemonList}
        randomIndexAll={randomIndexAll} 
        setSelectedPokemon={setSelectedPokemon} 
        shownPokemon={shownPokemon} 
        savedPokemonList={savedPokemonList}
        setSavedPokemonList={setSavedPokemonList} 
        hearts={hearts} 
        setHearts={setHearts}
        isPokemonSaved={isPokemonSaved}
        gameError={gameError}
        setGameError={setGameError} />
      {/* <Battle /> */}
      <SavedPokemonList 
        pokemonList={pokemonList}
        setSelectedPokemon={setSelectedPokemon} 
        setSavedPokemonList={setSavedPokemonList}
        savedPokemonList={savedPokemonList} 
        setHearts={setHearts} />
    </div>
  )
}

export default App


//initialize new local repo
//add remote repo on github via cli; gh repo create <repository-name> --public --source=. --remote=origin
//stage files; add, commit
//push to github; git push -u origin master