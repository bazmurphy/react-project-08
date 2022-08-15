import React from 'react';

export default function Meme02() {
    
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "",
        }
    )

    const [allMemes, setAllMemes] = React.useState([])

    /**
    * Challenge: 
    * As soon as the Meme component loads the first time,
    * make an API call to "https://api.imgflip.com/get_memes".
    * 
    * When the data comes in, save just the memes array part
    * of that data to the `allMemes` state
    * 
    * Think about if there are any dependencies that, if they
    * changed, you'd want to cause to re-run this function.
    * 
    * Hint: for now, don't try to use an async/await function.
    * Instead, use `.then()` blocks to resolve the promises
    * from using `fetch`. We'll learn why after this challenge.
    */

    React.useEffect(function() {
        // console.log("useEffect ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
        }, [])
        
    // console.log("Component rendered")

    function getMemeImage() {

        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        // console.log(allMemes);
        // console.log(randomNumber)
        // console.log(allMemes[randomNumber])
        // console.log(allMemes[randomNumber].url)

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