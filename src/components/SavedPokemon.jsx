import Heart from './Heart'


export default function SavedPokemon(props){
    //props
    const {setSelectedPokemon, savedPokemon, setHearts} = props

    // renders hearts
    const heartElements = savedPokemon.hearts.map((heart, index) => (
        <Heart key={index} isFilled={(heart === 1)} /> // passes boolean to Heart component
    ))

    // handles select Pokemon
    function handleSelect(){
        // set hearts to savedPokemon.hearts
        setHearts(savedPokemon.hearts)
        // set shownpokemon
        setSelectedPokemon(savedPokemon.id - 1)
    }

    // handle let go pokemon
    function handleLetGo(){
        
    }

    

    return(
        <>
            <img 
            src={savedPokemon.sprite}
            alt={savedPokemon.name} />
            <p>{savedPokemon.name}</p>
            {heartElements}
            <button onClick={handleSelect}>Select</button>
            <button>Let Go</button>
        </>
    )
}