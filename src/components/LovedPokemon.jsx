import {useState} from 'react'


export default function LovedPokemon(props){
    // props
    const {myPokemon, showSparkle} = props
    
    

    // pokemon heights
    const small = '100px'
    const normal = '125px'
    const big = '150px'
    const veryBig = '175px'


    // allows myPokemon to get fetched
    if(myPokemon === null){
        return ''
    }
    // pokemon sprite
    const pokemonSprite = myPokemon.sprites.versions['generation-v']['black-white'].animated.front_default
    const pokemonName = myPokemon.name
    const pokemonNameCapitalized = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
    const pokemonHeight = myPokemon.height

    function handleSpriteSize(){
        if(pokemonHeight <= 5){
            return small
        }
        if(5 < pokemonHeight && pokemonHeight < 10){
            return normal
        }
        if(10 <= pokemonHeight && pokemonHeight <= 16){
            return big
        }
        if(pokemonHeight > 16){
            return veryBig
        }
    }

    return(
        <div className='loved-pokemon'>
            <div className='image'>
                <img 
                    className='pokemon' 
                    src={pokemonSprite}
                    alt={pokemonName}
                    style={{height: handleSpriteSize()}} />
                {!showSparkle ? '' : 
                    <img
                    className='sparkle' 
                    src={showSparkle}
                    style={{height: handleSpriteSize()}} />
                }
                
            </div>
            <h3>{pokemonNameCapitalized}</h3>
        </div>
    )
}