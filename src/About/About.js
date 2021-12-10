import {Link} from 'react-router-dom';

import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <p>This app was created by Jon Hay in December 2021 and allows users to vote on their favorite movie flops.</p>
            <Link to="/" className="home-link">Go Home</Link>
        </div>
    )
}

export default About
