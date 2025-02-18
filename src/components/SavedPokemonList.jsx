import SavedPokemon from "./SavedPokemon";



export default function SavedPokemonList(props){
    // props
    const {setSelectedPokemon, savedPokemonList, setHearts} = props

    // displays list of saved pokemon
    const savedPokemonElements = savedPokemonList.map((savedPokemon, i) => {
        return(
            <div key={i} className='card'>
                <SavedPokemon setSelectedPokemon={setSelectedPokemon} savedPokemon={savedPokemon} setHearts={setHearts}/>
            </div>
        )
    })

    

    return(
        <div className="saved-pokemon section">
            <h1>Saved Pokemon</h1>
            {savedPokemonList.length === 0 ? '(Tap on "Save Pokemon" to add it to the list)' : savedPokemonElements
            }  
        </div>
    )
}