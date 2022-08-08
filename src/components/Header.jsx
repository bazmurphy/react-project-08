import React from 'react';

export default function Header() {
    return (
        <header>
            <section className="header-left">
                <img className="header-left-img" src="./troll-face.png" alt="" />
                <h1 className="header-left-h1">Meme Generator</h1>
            </section>
            <section className="header-right">
                <h2 className="header-right-h2">React Course - Project 3</h2>
            </section>
        </header>
    );
}