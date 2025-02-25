import SavedPokemon from "./SavedPokemon";



export default function SavedPokemonList(props){
    // props
    const {pokemonList, setSelectedPokemon, setSavedPokemonList, savedPokemonList, setHearts} = props

    // displays list of saved pokemon
    const savedPokemonElements = savedPokemonList.map((savedPokemon) => {
        return(
            <div key={savedPokemon.id} className='card'>
                <SavedPokemon 
                    pokemonList={pokemonList}
                    setSelectedPokemon={setSelectedPokemon} 
                    savedPokemon={savedPokemon} 
                    setHearts={setHearts}
                    onLetGo={handleLetGo}
                />
            </div>
        )
    })

    // handles let go of pokemon
    function handleLetGo(pokemonId) {
        setSavedPokemonList(prev => prev.filter((pokemon) => (pokemon.id !== pokemonId))
        )
    }

    

    return(
        <div className="saved-pokemon section">
            <h1>Saved Pokemon</h1>
            {savedPokemonList.length === 0 
            ? <p>(Tap on "Save Pokemon" to add it to the list)</p>
            : savedPokemonElements
            }  
        </div>
    )
}