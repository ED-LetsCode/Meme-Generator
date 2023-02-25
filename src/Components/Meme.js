import {useState, useEffect} from "react";

export default function Meme(){
    const[allMemes, setAllMemes] = useState([])

    // Only fetch data from api once
    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data =>  setAllMemes(data.data.memes)
            )
    }, [])

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: '',
    });
    const getRandomMeme = () => {
        let randomNmbr = Math.floor(Math.random() * allMemes.length);
        let imgUrl = allMemes[randomNmbr].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: imgUrl
        }));
    }
    const handleChange = (event) => {
        setMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <section>
            <div className="meme-container">
                <input
                    className="textfield "
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    className="textfield"
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button
                    className="btn"
                    onClick={getRandomMeme}
                >Get a new meme image</button>
            </div>
            <div className="img-container">
                <img src={meme.randomImg} alt="" id="meme-image"/>
                <h1 className="memeText top" >{meme.topText}</h1>
                <h1 className="memeText bottom" >{meme.bottomText}</h1>
            </div>
        </section>
    )
}