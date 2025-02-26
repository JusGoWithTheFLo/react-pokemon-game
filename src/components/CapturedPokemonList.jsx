import CapturedPokemon from "./CapturedPokemon";



export default function CapturedPokemonList(props){
    // props
    const {pokemonList, setSelectedPokemon, setCapturedPokemonList, capturedPokemonList, setHearts} = props

    // displays list of captured pokemon
    const capturedPokemonElements = capturedPokemonList.map((capturedPokemon) => {
        return(
            <div key={capturedPokemon.id} className='captured-pokemon'>
                <CapturedPokemon 
                    pokemonList={pokemonList}
                    setSelectedPokemon={setSelectedPokemon} 
                    capturedPokemon={capturedPokemon} 
                    setHearts={setHearts}
                    onLetGo={handleLetGo}
                />
            </div>
        )
    })

    // handles let go of pokemon
    function handleLetGo(pokemonId) {
        setCapturedPokemonList(prev => prev.filter((pokemon) => (pokemon.id !== pokemonId))
        )
    }

    

    return(
        <div className="section">
            <div className='section-container captured-pokemon-list'>
                <h1>Captured Pokemon</h1>
                {capturedPokemonList.length === 0 
                ? <p>(Tap on "Capture Pokemon" to add it to the list)</p>
                : capturedPokemonElements
                }  
            </div>
        </div>
    )
}