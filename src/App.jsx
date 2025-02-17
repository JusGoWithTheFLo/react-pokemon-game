import { useState, useEffect } from 'react'
import axios from 'axios'
import LovePokemon from './components/LovePokemon'


function App() {
  const [count, setCount] = useState(0)
  const [pokemonList, setPokemonList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState([24])
  const [myPokemon, setMyPokemon] = useState(null)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      // .then(res => console.log(res.data))
      .then(res => setPokemonList(res.data.results))
      .catch(err => console.log('Error found in file: ' + err))
      console.log('POKEMON API MOUNTED')
      
  }, [])
  
  useEffect(() => {
    if (pokemonList.length > 0 && selectedPokemon[0] !== undefined){
      axios.get(pokemonList[selectedPokemon[0]].url)
        .then(res => setMyPokemon(res.data))
        .catch(err => console.log('Error found in file: ' + err))
        console.log('MYPOKEMON FETCHED AND API MOUNTED')
    }
    
  }, [pokemonList, selectedPokemon])  

  console.log(myPokemon)
  
  
  // allows pokemonList to get fetched
  if(pokemonList.length === 0){
    return ''
  }



  

  return (
    <div className='app'>
      <LovePokemon pokemonList={pokemonList} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
    </div>
  )
}

export default App


//initialize new local repo
//add remote repo on github via cli; gh repo create <repository-name> --public --source=. --remote=origin
//stage files; add, commit
//push to github; git push -u origin master