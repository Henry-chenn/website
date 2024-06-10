import './App.css';
import image from './assets/images/Henry_1.png';

export default function Title(){
    return(
        <div className="Title">
            <img src={image} alt="Profile Picture" className="profile-img" />
            <h1>HENRY <span>CHEN</span></h1>
            <h2>&lt;Student /&gt;</h2>
        </div>
    );
}