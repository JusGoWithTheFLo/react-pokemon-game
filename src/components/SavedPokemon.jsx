import Heart from './Heart'


export default function SavedPokemon(props){
    //props
    const {savedPokemon, setShownPokemon} = props

    // renders hearts
    const heartElements = savedPokemon.hearts.map((heart, index) => (
        <Heart key={index} isFilled={(heart === 1)} /> // passes boolean to Heart component
    ))

    // handles select Pokemon
    function handleSelect(){
        // set hearts to savedPokemon.hearts
        // set shownpokemon
    }

    return(
        <>
            <img 
            src={savedPokemon.sprite}
            alt={savedPokemon.name} />
            <p>{savedPokemon.name}</p>
            {heartElements}
            <button>Select</button>
            <button>Let Go</button>
        </>
    )
}