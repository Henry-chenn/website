import './App.css';
import image from './assets/images/Henry_1.png';

export default function About(){
    return(
        <div className="About">
            <img src={image} alt="Profile Picture" className="about-img" />
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu tortor commodo, eleifend risus ut, gravida odio. Donec orci libero, maximus nec porta sit amet, interdum </p>
        </div>
    );
}