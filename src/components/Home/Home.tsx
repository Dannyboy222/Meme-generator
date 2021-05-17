import { stringify } from 'querystring'
import React, { useEffect, useState } from 'react'

const Home = () => {

    interface Props {
        name:string,
        id: number,
        postLink: string,
        title: string,
        url: string
    }

    const [meme, setMeme] = useState<Props>()
    useEffect(() => {
        fetch('https://meme-api.herokuapp.com/gimme').then(res => res.json()).then(result => setMeme(result))

    },[])

    console.log(meme)
    return (
        <div>
            <h1>Meme Generator</h1>
    {meme && (
            <>
            <p>{meme.name}</p>
            <img src={meme.url} alt="memeImage"/>
            <a href={meme.postLink}></a>
            </>
            )}
        </div>
    )
}

export default Home