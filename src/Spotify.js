import React, { useState } from 'react' ;



let randomnatureplaylist = ['https://open.spotify.com/embed/playlist/0tbp3CFAbFcTCkKhVgumyp?utm_source=generator',
'https://open.spotify.com/embed/playlist/2sWwKJKAznIkvjoFRJ3ag3?utm_source=generator',
'https://open.spotify.com/embed/playlist/48sGg4EhRHdrPdurnSoUBH?utm_source=generator',
"https://open.spotify.com/embed/playlist/1HOSnYU1RgBLgJcI9V7HuS?utm_source=generator",
"https://open.spotify.com/embed/playlist/50NNV8ej5Eaceh71ClPf1d?utm_source=generator",
"https://open.spotify.com/embed/playlist/7sybIjMPeB8qexXrbx9jlq?utm_source=generator",
"https://open.spotify.com/embed/playlist/0J2SPaEcX3Wy7cewQhsrh6?utm_source=generator",
"https://open.spotify.com/embed/playlist/5wFUeCtzxTxMEWjzAFuTME?utm_source=generator"
]

let randomnum = function(){
    return randomnatureplaylist[Math.floor(Math.random() * randomnatureplaylist.length)]
} ;


export default function Spotify(){

    const [state, setState] = useState('https://open.spotify.com/embed/playlist/0tbp3CFAbFcTCkKhVgumyp?utm_source=generator');

    const generateRandom = () => {
        return Math.floor(Math.random() * randomnatureplaylist.length);
      }; 
// generates a random number from the array

    const randomClick = () => {
        setState(randomnatureplaylist[generateRandom()]);
      };
    //   this is the onClick function that triggers the generateRandom function and sets the new state

    return (
<div className="inspocontent" >
<button className="quotebutton filmbut spotifybut" onClick={randomClick} id="cuppa">
            Get Music!
            </button>
        <iframe className="spotifyplayer" src={state}  width="350" height="450"
        frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> 
</div>
    )
}