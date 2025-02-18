import {useState} from 'react'
import Heart from './Heart'
import LovedPokemon from './LovedPokemon'


export default function LovePokemon(props){
    // props
    const {shownPokemon, setSavedPokemonList, hearts, setHearts} = props

    // states
    const [showSparkle, setShowSparkle] = useState(false)

    // allows shownPokemon to get fetched
    if(shownPokemon === null){
        return ''
    }
    
    // lighting effects
    const sparkleURL = 'https://img1.picmix.com/output/stamp/normal/9/6/4/7/1557469_1a708.gif'
    const hurtURL = 'https://img.itch.zone/aW1nLzk3OTkzMDYuZ2lm/original/p78Kg1.gif'

    // button images
    const petURL = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/395b5aad-f7f3-453f-9b0d-a969946ff5bd/dcbvpsh-231c0d55-2703-4078-af72-a0a16cf84b41.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5NWI1YWFkLWY3ZjMtNDUzZi05YjBkLWE5Njk5NDZmZjViZFwvZGNidnBzaC0yMzFjMGQ1NS0yNzAzLTQwNzgtYWY3Mi1hMGExNmNmODRiNDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cqDw5woCJcHRywsumMXFj0A5y0U9I9wWpIbsgV06IGI'
    const feedURL = 'https://tiermaker.com/images/media/hero_images/2024/918079/pokemon-go-berries-918079/9180791706026432.webp'
    const hugURL = 'https://pbs.twimg.com/media/DxmZAzZWwAA7QXH.png'
    const battleURL ='https://www.s24sammy.com/uploads/1/2/0/4/120476725/go-battle-girl-gold-medal_orig.png'

    // pokemon sprite
    const pokemonSprite = shownPokemon.sprites.versions['generation-v']['black-white'].animated.front_default
    const pokemonName = handleNames()
    const pokemonHeight = shownPokemon.height

    console.log(pokemonSprite)

    // capitalizes first letter in names
    function handleNames(){
        const pokemonName = shownPokemon.name
        const pokemonNameCapitalized = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
        return pokemonNameCapitalized
    }

    // renders hearts
      const heartElements = hearts.map((heart, index) => (
          <Heart key={index} isFilled={(heart === 1)} /> // passes boolean to Heart component
      ))

    // handles changes to the hearts when user clicks on pet, feed, hug, or battle buttons
    function handleHeartChange(num) {
        setHearts(prev => {
            const updatedHearts = [...prev];
            let changed = false; // ensures only one change is made per button click
            
            if (num > 0 && prev.includes(0) === true) {
                // find the first empty heart (0) and fill it (1)
                for (let i = 0; i < updatedHearts.length; i++) {
                    if (updatedHearts[i] === 0 && !changed) {
                        updatedHearts[i] = 1; // sets this heart as 'filled'
                        changed = true; // preents further changes on the same click
                        break; // exit the loop after making the change
                    }
                }

                setShowSparkle(sparkleURL)
                setTimeout(() => {
                    setShowSparkle(false)
                }, 800)

            } else if (num < 0 && prev.includes(1) === true) {
                // find the first filled heart (1) and empty it (0)
                for (let i = updatedHearts.length - 1; i >= 0; i--) {
                    if (updatedHearts[i] === 1 && !changed) {
                        updatedHearts[i] = 0; // sets this heart as 'empty'
                        changed = true; // prevents further chanegs on the same click
                        break; // exit the loop after making the change
                    }
                }

                setShowSparkle(hurtURL)
                setTimeout(() => {
                    setShowSparkle(false)
                }, 800)
            }
    
            return updatedHearts;
        });
    }

    // adds pokemon to savedPokemonList if it doesnt already exist in savedPokemonList
    // if pokemon does exist, then update hearts
    function handleSavePokemon(){
        setSavedPokemonList(prev => {
            // check if pokemon exists in savedPokemonList
            const existingPokemonIndex = prev.findIndex(pokemon => pokemon.id === shownPokemon.id)
            
            // data for new pokemon
            const addPokemon = {
                id: shownPokemon.id,
                name: pokemonName,
                sprite: pokemonSprite,
                height: pokemonHeight,
                hearts: hearts
            }

            if(existingPokemonIndex !== -1){
                // if the pokemon exists, update the hearts value
                const updatedList = [...prev]
                updatedList[existingPokemonIndex] = {
                    ...updatedList[existingPokemonIndex],
                    hearts: hearts
                }
                return updatedList
            }
            // if the pokemon doesn't exist, add the new pokemon to the list
            return [...prev, addPokemon]
        })
    }

    
    return(
        <div className='love-pokemon section'>
            <h1>Love Pokemon</h1>
            <div className='hearts-row'>
                {heartElements}
            </div>
            <div>
                <LovedPokemon shownPokemon={shownPokemon} showSparkle={showSparkle} pokemonSprite={pokemonSprite} pokemonName={pokemonName} pokemonHeight={pokemonHeight} />
            </div>
            <div className='love-buttons'>
                <button onClick={() => handleHeartChange(1)}>
                    <img src={petURL} />
                    <p>Pet</p>
                </button>
                <button onClick={() => handleHeartChange(1)}>
                    <img src={feedURL} />
                    <p>Feed</p>
                </button>
                <button onClick={() => handleHeartChange(1)}>
                    <img src={hugURL} />
                    <p>Hug</p>
                </button>
                <button onClick={() => handleHeartChange(-1)}>
                    <img src={battleURL} />
                    <p>Battle</p>
                </button>
            </div>
            <button onClick={handleSavePokemon}>Save Pokemon</button>
        </div>
    )
}