import {useState} from 'react'
import Heart from './Heart'
import LovedPokemon from './LovedPokemon'


export default function LovePokemon(props){
    // props
    const {pokemonList, selectedPokemon, setSelectedPokemon, myPokemon, setMyPokemon, setSavedPokemonList} = props

    // states
    const [hearts, setHearts] = useState([0,0,0,0,0])
    const [showSparkle, setShowSparkle] = useState(false)
    

    // lighting effects
    const sparkleURL = 'https://img1.picmix.com/output/stamp/normal/9/6/4/7/1557469_1a708.gif'
    const hurtURL = 'https://img.itch.zone/aW1nLzk3OTkzMDYuZ2lm/original/p78Kg1.gif'

    // button images
    const petURL = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/395b5aad-f7f3-453f-9b0d-a969946ff5bd/dcbvpsh-231c0d55-2703-4078-af72-a0a16cf84b41.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5NWI1YWFkLWY3ZjMtNDUzZi05YjBkLWE5Njk5NDZmZjViZFwvZGNidnBzaC0yMzFjMGQ1NS0yNzAzLTQwNzgtYWY3Mi1hMGExNmNmODRiNDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cqDw5woCJcHRywsumMXFj0A5y0U9I9wWpIbsgV06IGI'
    const feedURL = 'https://tiermaker.com/images/media/hero_images/2024/918079/pokemon-go-berries-918079/9180791706026432.webp'
    const hugURL = 'https://pbs.twimg.com/media/DxmZAzZWwAA7QXH.png'
    const battleURL ='https://www.s24sammy.com/uploads/1/2/0/4/120476725/go-battle-girl-gold-medal_orig.png'

    // renders hearts
    const heartElements = hearts.map((heart, index) => (
        <Heart key={index} isFilled={(heart === 1)} /> // passes boolean to Heart component
    ))

    // handles changes to the hearts
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

    function handleSavePokemon(){
        console.log(hearts)
        // hearts
        //
    }

    return(
        <div className='love-pokemon section'>
            <h1>Love Pokemon</h1>
            <div>
                {heartElements}
            </div>
            <div>
                <LovedPokemon myPokemon={myPokemon} showSparkle={showSparkle} />
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
            {/* <button onClick={handleSavePokemon}>Save Pokemon</button> */}
        </div>
    )
}