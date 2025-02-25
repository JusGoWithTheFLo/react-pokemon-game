import Heart from './Heart'


export default function SavedPokemon(props){
    //props
    const {pokemonList, setSelectedPokemon, savedPokemon, setHearts, onLetGo} = props

    // renders hearts
    const heartElements = savedPokemon.hearts.map((heart, index) => (
        <Heart key={index} isFilled={Boolean(heart)} /> // passes boolean to Heart component
    ))

    // handles select Pokemon
    function handleSelect(){
        let validIndex = savedPokemon.id - 1
        while(validIndex < 0 || validIndex > pokemonList.length){
            validIndex = savedPokemon.id - 1
        }
        if(validIndex >= 0 && validIndex < pokemonList.length){
            // set hearts to savedPokemon.hearts
            setHearts(savedPokemon.hearts)
            // set shownpokemon
            setSelectedPokemon(validIndex)
        }
    }

    function handleLetGo(){
        onLetGo(savedPokemon.id)
    }
    

    return(
        <>
            <img 
            src={savedPokemon.sprite}
            alt={savedPokemon.name} />
            <p>{savedPokemon.name}</p>
            {heartElements}
            <button onClick={handleSelect} title='Select this pokemon'>Select</button>
            <button onClick={handleLetGo} title='Let go this pokemon'>Let Go</button>
            {/* used for when pikachu is the default starter pokemon
                {savedPokemon.name === 'Pikachu'
                ? ''
                : <button onClick={handleLetGo} title='Let go this pokemon'>Let Go</button>
            } */}
            
        </>
    )
}