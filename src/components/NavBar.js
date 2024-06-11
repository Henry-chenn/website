import '../App.css';

export default function NavBar(){
    return(
        <nav className="navbar">
            <ul>
                <li><a href="/">For Fun</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#About">About</a></li>
            </ul>
        </nav>
    );
}
