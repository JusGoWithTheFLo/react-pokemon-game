



// export default function Heart({isFilled}){
//     // paths to svg element
//     const filledHeartPath = "m480-121-41-37q-105.77-97.12-174.88-167.56Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.15 60.5-150.58Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.42Q880-733.15 880-643q0 46-16.5 91T806-451.5Q765-396 695.88-325.56 626.77-255.12 521-158l-41 37Zm0-79q101.24-93 166.62-159.5Q712-426 750.5-476t54-89.14q15.5-39.13 15.5-77.72 0-66.14-42-108.64T670.22-794q-51.52 0-95.37 31.5T504-674h-49q-26-56-69.85-88-43.85-32-95.37-32Q224-794 182-751.5t-42 108.82q0 38.68 15.5 78.18 15.5 39.5 54 90T314-358q66 66 166 158Zm0-297Z"
//     const emptyHeartPath = "M481-84Q346-220 266.5-303t-121-137.5Q104-495 92-533.82q-12-38.82-12-86.6Q80-712 144-776q64-64 156-64 45 0 87 16.5t75 47.5l-62 216h121l-46 383 127-423H480l71-212q25-14 52.5-21t56.5-7q92 0 156 64t64 156q0 46.12-11.5 84.56Q857-497 816-442T696-304q-79 83-215 220Zm-60-144 32-272H320l73-254q-22-11-45-18.5t-48-7.5q-66.29 0-113.14 46.86Q140-686.29 140-620q0 32.67 12.5 65.33Q165-522 196.5-478t86 103.5Q337-315 421-228Zm136-18q140-136 201.5-223.5T820-620.37Q820-686 773.14-733 726.29-780 660-780q-15.33 0-30.67 3-15.33 3-29.33 8l-36 109h117L557-246Zm124-414ZM320-500Z"

//     return(
//         <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#f01212">
//             <path d={isFilled ? filledHeartPath : emptyHeartPath}/>
//         </svg>
//     )
// }


export default function Heart({isFilled}){
    // paths to svg element
    const filledHeart = "https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_960_720.png"
    const emptyHeart = "https://img.freepik.com/premium-vector/empty-pixelated-heart-icon-emptiness-void-absence-love-loneliness-longing-vacant-emotions-digital-symbol-pixel-art-retro-nostalgia-vector-line-icon-business-advertising_855332-1963.jpg"

    return(
        <img 
            className="heart"
            src={isFilled ? filledHeart : emptyHeart} 
            alt={isFilled ? 'filled heart representing affection' : 'empty heart representing no affection'} 
            />
    )
}