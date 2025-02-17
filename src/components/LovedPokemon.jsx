import {useState} from 'react'


export default function LovedPokemon(props){
    // props
    const {shownPokemon, showSparkle, pokemonSprite, pokemonName, pokemonHeight} = props
    
    

    // pokemon heights
    const small = '100px'
    const normal = '125px'
    const big = '150px'
    const veryBig = '175px'


    // allows shownPokemon to get fetched
    if(shownPokemon === null){
        return ''
    }

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
            <h3>{pokemonName}</h3>
        </div>
    )
}