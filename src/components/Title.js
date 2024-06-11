import '../App.css';
import image from '../assets/images/Henry_1.png';
import github from '../assets/images/mark-github-24.svg';
import linkedin from '../assets/images/linkedin.svg';
import instagram from '../assets/images/instagram.svg';
import email from '../assets/images/telegram.svg';

export default function Title(){
    return(
        <div className="Title">
            <img src={image} alt="Profile Picture" className="profile-img" />
            <h1>HENRY <span>CHEN</span></h1>
            <div className="subTitle">
                <h2>&lt;Developer /&gt;</h2>
                <a href="https://github.com/Henry-chenn"><img src={github} alt="github" className="contacts" /></a>
                <a href="https://www.linkedin.com/in/henry-yh-chen/"><img src={linkedin} alt="linkedin" className="contacts"/></a>
                <a href="https://www.instagram.com/henry.chenn/"><img src={instagram} alt="instagram" className="contacts"/></a>
                <a href="mailto: hen.chenbt@gmail.com"><img src={email} alt="email" className="contacts"/></a>
            </div>
        </div>
    );
}