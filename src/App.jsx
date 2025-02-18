import { useState, useEffect } from 'react'
import axios from 'axios'
import LovePokemon from './components/LovePokemon'
import SavedPokemonList from './components/SavedPokemonList'
import Heart from './components/Heart'


function App() {
  // states
  const [count, setCount] = useState(0)
  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState([24])
  const [shownPokemon, setShownPokemon] = useState(null)
  const [savedPokemonList, setSavedPokemonList] = useState([])
  const [hearts, setHearts] = useState([0,0,0,0,0])

  

  // POKEAPI
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      // .then(res => console.log(res.data))
      .then(res => setPokemonList(res.data.results))
      .catch(err => console.log('Error found in file: ' + err))
      console.log('POKEMON API MOUNTED')
      
  }, [])
  
  // Fetches selectedPokemon from POKEAPI
  useEffect(() => {
    if (pokemonList.length > 0 && selectedPokemon[0] !== undefined){
      axios.get(pokemonList[selectedPokemon[0]].url)
        .then(res => setShownPokemon(res.data))
        .catch(err => console.log('Error found in file: ' + err))
        console.log('MYPOKEMON FETCHED AND API MOUNTED')
    }
    
  }, [pokemonList, selectedPokemon])  

  console.log(shownPokemon)

  
  console.log(pokemonList)
  
  // allows pokemonList to get fetched
  if(pokemonList.length === 0){
    return ''
  }

  // finds index of pokemon based on name
  // const index = pokemonList.findIndex(pokemon => pokemon.name === shownPokemon.name)
  // console.log(index)

  return (
    <div className='app'>
      <LovePokemon pokemonList={pokemonList} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} shownPokemon={shownPokemon} setShownPokemon={setShownPokemon} setSavedPokemonList={setSavedPokemonList} hearts={hearts} setHearts={setHearts} />
      <SavedPokemonList savedPokemonList={savedPokemonList} setShownPokemon={setShownPokemon} />
    </div>
  )
}

export default App


//initialize new local repo
//add remote repo on github via cli; gh repo create <repository-name> --public --source=. --remote=origin
//stage files; add, commit
//push to github; git push -u origin master