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
        let validIndex = savedPokemon.id - 1 // convert ID to index
        

        // ensure that validIndex is within the bounds of the pokemonList
        if(validIndex >= 0 && validIndex < pokemonList.length){
            // set hearts to savedPokemon.hearts
            setHearts(savedPokemon.hearts)
            // set shownpokemon's index
            setSelectedPokemon(validIndex)
            console.log('validIndex: ', validIndex)
        } else {
            console.error('Invalid Pokemon index: ', validIndex)
            return // exit if ID is invalid
        }
    }

    function handleLetGo(){
        onLetGo(savedPokemon.id)
    }
    
// -------- DEBUGGING ----------
    console.log('savedPokemon.id: ', savedPokemon.id)
    

    return(
        <>
            <div className='col-left'>
                <img 
                    src={savedPokemon.sprite}
                    alt={savedPokemon.name} 
                />
                <p>{savedPokemon.name}</p>
            </div>
            <div className='col-right'>
                <div>
                    {heartElements}
                </div>
                <div>
                    <button className='bg-grn' onClick={handleSelect} title='Select this pokemon'>Select</button>
                    <button className='bg-red' onClick={handleLetGo} title='Let go this pokemon'>Let Go</button>
                </div>
            </div>
            {/* used for when pikachu is the default starter pokemon
                {savedPokemon.name === 'Pikachu'
                ? ''
                : <button onClick={handleLetGo} title='Let go this pokemon'>Let Go</button>
            } */}
            
        </>
    )
}