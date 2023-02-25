import Navbar from "./Navbar";
import Meme from "./Meme";
import '../style.css'

export default function App(){
    return (
        <div className="container">
            <Navbar/>
            <Meme/>
        </div>
    )
}