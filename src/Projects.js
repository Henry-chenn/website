import './App.css';
import ProjectOne from './assets/images/Pipstop.png';
import ProjectTwo from './assets/images/Sustainabot.png';
import ProjectThree from './assets/images/CSJargon.png';


export default function Projects(){
    return (
        <div className='multiColorBackground'>
            <div className='Projects'>
                <div className='Project'> 
                    <a href="https://devpost.com/software/pipstop"><img src={ProjectOne} alt="Pipstop" className='Project-Pic'/></a>
                    <h1>PipStop</h1>
                </div>
                <div className='Project'>
                    <a href="https://devpost.com/software/sustainabot"><img src={ProjectTwo} alt="SustainaBot" className='Project-Pic'/></a>
                    <h1>SustainaBot</h1>
                </div>
                <div className='Project'>
                    <a><img src={ProjectThree} alt="CSJargon" className='Project-Pic'/></a>
                    <h1>CSJargon</h1>
                </div>
            </div>
        </div>
    );
}