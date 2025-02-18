import { useState, useEffect } from 'react'
import axios from 'axios'
import LovePokemon from './components/LovePokemon'
import SavedPokemonList from './components/SavedPokemonList'
import Heart from './components/Heart'


function App() {
  // states
  const starterPokemon = { // player starts with one pokemon!
    id: 25,
    name: 'Pikachu',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif',
    height: '4',
    hearts: [1, 1, 1, 1, 1]
  }
  const randomIndex = Math.floor(Math.random() * 150) // randomly generates a pokemon
  const [count, setCount] = useState(0)
  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(randomIndex)
  const [shownPokemon, setShownPokemon] = useState(null)
  const [savedPokemonList, setSavedPokemonList] = useState([starterPokemon])
  const [hearts, setHearts] = useState([0,0,0,0,0])

  // POKEAPI
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      // .then(res => console.log(res.data))
      .then(res => setPokemonList(res.data.results))
      .catch(err => console.log('Error found in file: ' + err))
      console.log('POKEMON LIST POPULATED')
      
  }, [])

  // Fetches selectedPokemon from POKEAPI
  useEffect(() => {
    if (pokemonList.length > 0 && selectedPokemon !== undefined){
      axios.get(pokemonList[selectedPokemon].url)
        .then(res => setShownPokemon(res.data))
        .catch(err => console.log('Error found in file: ' + err))
        console.log('SHOWNPOKEMON FETCHED AND SPRITE DATA MOUNTED')
    }
    
  }, [pokemonList, selectedPokemon])  

  console.log(shownPokemon)
  console.log(savedPokemonList)

  
  // allows pokemonList to get fetched
  if(pokemonList.length === 0){
    return ''
  }

  return (
    <div className='app'>
      <LovePokemon shownPokemon={shownPokemon} setSavedPokemonList={setSavedPokemonList} hearts={hearts} setHearts={setHearts} />
      <SavedPokemonList setSelectedPokemon={setSelectedPokemon} savedPokemonList={savedPokemonList} setHearts={setHearts} />
    </div>
  )
}

export default App


//initialize new local repo
//add remote repo on github via cli; gh repo create <repository-name> --public --source=. --remote=origin
//stage files; add, commit
//push to github; git push -u origin master