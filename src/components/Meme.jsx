import React from 'react';
import memesData from "../data/memesData.js"

export default function Meme() {
    
    // set the first State
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "",
        }
    )

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value,
            }
        })
    }

    // set the second State
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {
        
        // console.log('clicked')
        const memesArray = allMemeImages.data.memes;
        // console.log(memesArray)
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        // console.log(randomNumber)
        const url = memesArray[randomNumber].url;
        // console.log(url);

        setMeme(function(prevMeme) {
            return {
                ...prevMeme,
                // unpack the prevMeme object here
                randomImage: url
                // update the randomImage property
            }
        })
    }
 
    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form-top-text" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.toptext}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="form-bottom-text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img className="meme-image" src={meme.randomImage} />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}


// Event Listener Recap:

// JS way :
// document.querySelector('button').addEventListener("click", function() {})

// HTML way:
// <button onclick="myFunction()">Click me</button>

// REACT way:
// <button onClick={function() {}}>Click me</button>

// GOTCHA :
// DO NOT PUT handleClick() with Parentheses... because it will run as soon as JSX loads that line of code.. <button....>
// We are passing the function as a VALUE so React will use that function when a click happens

// REACT Documentation on Mouse Events :
// https://reactjs.org/docs/events.html#mouse-events

// onClick={}

// onMouseOver={}

// function handleClick() {
//     console.log("I was clicked!")
// }

// function handleMouseOver() {
//     console.log("I was hovered over")
// }

// const getRandomObjectFromData = (dataObject) => {
//     const totalDataEntries = dataObject.length;
//     const randomIndex = Math.floor(Math.random() * totalDataEntries);
//     return dataObject[randomIndex];
// }

// const getPropertyFromRandomObject = (dataObject, property) => {
//     return getRandomObjectFromData(dataObject)[property]
// }

// const getRandomMeme = () => {
//     setMemeImage(getRandomMeme());
// }

// console.log(getRandomMeme());