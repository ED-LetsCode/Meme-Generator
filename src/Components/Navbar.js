import navbarLogo from '../Images/img1.png'
export default function Navbar(){
    return(
        <header>
            <nav className="navbar">
                <img id="navbar-logo" src={navbarLogo}/>
                <h1>Meme Generator</h1>
            </nav>
        </header>
    )
}