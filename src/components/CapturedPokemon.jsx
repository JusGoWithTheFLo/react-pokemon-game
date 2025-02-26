import Heart from './Heart'


export default function CapturedPokemon(props){
    //props
    const {pokemonList, setSelectedPokemon, capturedPokemon, setHearts, onLetGo} = props

    // renders hearts
    const heartElements = capturedPokemon.hearts.map((heart, index) => (
        <Heart key={index} isFilled={Boolean(heart)} /> // passes boolean to Heart component
    ))

    // handles select Pokemon
    function handleSelect(){
        let validIndex = capturedPokemon.id - 1 // convert ID to index
        

        // ensure that validIndex is within the bounds of the pokemonList
        if(validIndex >= 0 && validIndex < pokemonList.length){
            // set hearts to capturedPokemon.hearts
            setHearts(capturedPokemon.hearts)
            // set shownpokemon's index
            setSelectedPokemon(validIndex)
            console.log('Selected Pokemon index: ', validIndex)
            // scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            console.error('Invalid Pokemon index: ', validIndex)
            return // exit if ID is invalid
        }
    }

    function handleLetGo(){
        onLetGo(capturedPokemon.id)
    }
    
// -------- DEBUGGING ----------
    // console.log('Captured Pokemon ID: ', capturedPokemon.id)
    

    return(
        <>
            <div className='col-left'>
                <img 
                    src={capturedPokemon.sprite}
                    alt={capturedPokemon.name} 
                />
                <p>{capturedPokemon.name}</p>
                <p>No.{capturedPokemon.id}</p>
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
        </>
    )
}