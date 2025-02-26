import {useState} from 'react'
import Heart from './Heart'
import LovedPokemon from './LovedPokemon'


export default function LovePokemon(props){
    // props
    const {randomIndex151, pokemonList, randomIndexAll, setSelectedPokemon, shownPokemon, capturedPokemonList, setCapturedPokemonList, hearts, setHearts, isPokemonCaptured, gameError, setGameError} = props

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
    const pokeballURL = 'https://www.serebii.net/itemdex/sprites/sv/pokeball.png'
    const petURL = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/395b5aad-f7f3-453f-9b0d-a969946ff5bd/dcbvpsh-231c0d55-2703-4078-af72-a0a16cf84b41.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5NWI1YWFkLWY3ZjMtNDUzZi05YjBkLWE5Njk5NDZmZjViZFwvZGNidnBzaC0yMzFjMGQ1NS0yNzAzLTQwNzgtYWY3Mi1hMGExNmNmODRiNDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cqDw5woCJcHRywsumMXFj0A5y0U9I9wWpIbsgV06IGI'
    const feedURL = 'https://tiermaker.com/images/media/hero_images/2024/918079/pokemon-go-berries-918079/9180791706026432.webp'
    const hugURL = 'https://pbs.twimg.com/media/DxmZAzZWwAA7QXH.png'
    const battleURL ='https://www.s24sammy.com/uploads/1/2/0/4/120476725/go-battle-girl-gold-medal_orig.png'
    const adventureURL ='https://icons.iconarchive.com/icons/everaldo/kids-icons/128/start-here-icon.png'
    const rescueURL ='https://icons.iconarchive.com/icons/google/noto-emoji-people-clothing-objects/72/12206-rescue-workers-helmet-icon.png'

    // pokemon sprite
    const pokemonSprite = shownPokemon.sprites.versions['generation-v']['black-white'].animated.front_default ? shownPokemon.sprites.versions['generation-v']['black-white'].animated.front_default : shownPokemon.sprites.front_default
    const pokemonName = handleNames()
    const pokemonHeight = shownPokemon.height
    // console.log(pokemonSprite)

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

    // checks hearts; reusable function to display error message if no hearts are left
    function checkHearts(num){
        // if there are no hearts left, display error message and exit early
        if(hearts.every(heart => heart === 0) && num < 0){
            if(!gameError) { // only set error if there isn't already an error
                setGameError('Pokemon has no hearts!')
                setTimeout(() => setGameError(null), 1200) // clear error after timeout
            }
            return true; // return true to indicate early exit
        }

        if(hearts.every(heart => heart === 1) && num > 0){
            if(!gameError){
                setGameError('Pokemon is filled with love!')
                setTimeout(() => setGameError(null), 1200)
            }
            return true;
        }
        return false; // return false if no issues
    }

    // handles changes to the hearts when user clicks on pet, feed, hug, or battle buttons
    function handleHeartChange(num) {
        // use checkHearts function to handle early exit
        if(checkHearts(num)){
            return // exit early if no hearts left
        }

        setHearts(prev => {
            const updatedHearts = [...prev];
            let changed = false; // ensures only one change is made per button click
            
            if (num > 0 && prev.includes(0) === true) {
                // add heart
                addHeart(updatedHearts, changed)

            } else if (num < 0 && prev.includes(1) === true) {
                // remove heart
                removeHeart(updatedHearts, changed)
            }

            // update both the hearts of the shownPokemon and capturedPokemonList
            if(isPokemonCaptured) updateCapturedPokemonList(updatedHearts)
    
            return updatedHearts;
        });
    }

    // update the capturedPokemonList with the updated hearts
    function updateCapturedPokemonList(updatedHearts){
        setCapturedPokemonList(prev => {
            // check if pokemon exists in capturedPokemonList
            const existingPokemonIndex = prev.findIndex(pokemon => pokemon.id === shownPokemon.id)
            
            if(existingPokemonIndex !== -1){
                // if the pokemon exists, update the hearts value
                const updatedList = [...prev]
                updatedList[existingPokemonIndex] = {
                    ...updatedList[existingPokemonIndex],
                    hearts: updatedHearts
                }
                return updatedList
            }
            // if the pokemon doesn't exist, add the new pokemon to the list
            return prev
        })
    }

    // add a heart
    function addHeart(updatedHearts, changed){
        // find the first empty heart (0) and fill it (1)
        for (let i = 0; i < updatedHearts.length; i++) {
            if (updatedHearts[i] === 0 && !changed) {
                updatedHearts[i] = 1; // sets this heart as 'filled'
                changed = true; // prevents further changes on the same click
                break; // exit the loop after making the change
            }
        }
        setShowSparkle(sparkleURL)
        setTimeout(() => {
            setShowSparkle(false)
        }, 800)
    }

    // removes a heart
    function removeHeart(updatedHearts, changed){
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

    // adds pokemon to capturedPokemonList if it doesnt already exist in capturedPokemonList
    // if pokemon does exist, then update hearts
    function handleCapturePokemon(){
        setCapturedPokemonList(prev => {
            // check if pokemon exists in capturedPokemonList
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

    // handle adventure
    function handleAdventure(){
        // if an error message is already shown, exit early
        if(gameError) return;

        // use checkHearts function to handle early exit
        if(checkHearts(-1)){
            return // exit early if no hearts left
        }
        
        // random chance for a new pokemon encounter
        const encounterChance = Math.random();

        // new pokemon encounter
        if(encounterChance < 0.5){ // % of encountering a new pokemon
            // ensure that the new selected Pokemon is not already captured
            let newSelectedPokemon = randomIndexAll
            while(capturedPokemonList.some(pokemon => pokemon.id === pokemonList[newSelectedPokemon].id)){
                // if the new Pokemon is in the captured list, select another one
                newSelectedPokemon = Math.floor(Math.random() * pokemonList.length)
            }

            
            // ensure that setSelectedPokemon is only called once
            if(!gameError){ // prevent it from running if gameError is already set
                setSelectedPokemon(newSelectedPokemon)
                setHearts([1, 0, 0, 0, 0])
                console.log('displaying new pokemon')
            }
        } else {
            // decrease one heart
            console.log('decreasing heart count')
            handleHeartChange(-1)
        }
        
    }
    console.log('hearts: ' + hearts)
    

    
    return(
        <div className='section'>
            <div className='love-pokemon section-container'>
                <h1>Love Pokemon</h1>
                {/* Hearts */}
                {!isPokemonCaptured
                ? ''
                :   <div className='hearts-row'>
                        {heartElements}
                    </div>
                }
                {/* Shown Pokemon */}
                <div style={{position: 'relative'}}>
                    <LovedPokemon shownPokemon={shownPokemon} showSparkle={showSparkle} pokemonSprite={pokemonSprite} pokemonName={pokemonName} pokemonHeight={pokemonHeight} />
                    {/* Error Message */}
                    {!gameError
                    ? ''
                    :   <p className='game-error-message'>
                            {gameError}
                        </p>}
                </div>
                {/* Buttons */}
                {!isPokemonCaptured
                ?   <div className='love-buttons capture-button'>
                        <button onClick={handleCapturePokemon}  title='Capture this pokemon'>
                            <img src={pokeballURL} />
                            <p>Capture Pokemon</p>
                        </button>
                    </div>
                :   <>
                        <div className='love-buttons'>
                            <button onClick={() => handleHeartChange(1)} title='Pet this pokemon'>
                                <img src={petURL} />
                                <p>Pet</p>
                            </button>
                            <button onClick={() => handleHeartChange(1)} title='Feed this pokemon'>
                                <img src={feedURL} />
                                <p>Feed</p>
                            </button>
                            <button onClick={() => handleHeartChange(1)} title='Hug this pokemon'>
                                <img src={hugURL} />
                                <p>Hug</p>
                            </button>
                        </div>
                        <div className='love-buttons battle-buttons'>
                            <button onClick={() => handleHeartChange(-1)} title='Battle with this pokemon'>
                                <img src={battleURL} />
                                <p>Battle</p>
                            </button>
                            <button onClick={() => handleAdventure()} title='Adventure with this pokemon'>
                                <img src={adventureURL} />
                                <p>Adventure</p>
                            </button>
                            <button onClick={() => handleHeartChange(-1)} title='Rescue with this pokemon'>
                                <img src={rescueURL} />
                                <p>Rescue</p>
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}