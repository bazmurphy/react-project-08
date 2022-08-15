import React from 'react';

export default function Meme03() {
    
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "",
        }
    )

    const [allMemes, setAllMemes] = React.useState([])

    
    // TRYING TO MAKE THE CALLBACK FUNCTION INSIDE USEFFECT AN ASYNC/AWAIT FUNCTION

    // React.useEffect(async () => {
    //     const res = await fetch("https://api.imgflip.com/get_memes")
    //     const data = await res.json()
    //     setAllMemes(data.data.memes)
    // }, [])


    // useEffect takes a function as its parameter. 
    // If that function returns something, it needs to be a cleanup function. 
    // Otherwise, it should return nothing. 
    // If we make it an async function, it automatically returns a promise instead of a function or nothing.
    // Therefore, if you want to use async operations inside of useEffect,
    // you need to define the function separately inside of the callback function, as seen below:

    React.useEffect( () => {

        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.memes)
        }

        getMemes()
    
        return () => {
        // cleanup code here
        }

    }, [])

    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;

        setMeme(function(prevMeme) {
            return {
                ...prevMeme,
                randomImage: url,
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(function(prevMeme) {
            return {
                ...prevMeme,
                [name] : value,
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

