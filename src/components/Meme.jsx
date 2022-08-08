import React from 'react';

export default function Meme() {
    return (
        <main>
            <form>
                <input type="text" className="form-top-text" placeholder="Top text"/>
                <input type="text" className="form-bottom-text" placeholder="Bottom text"/>
                <button className="form-button">Get a new meme image 🖼️</button>
            </form>
        </main>
    );
}