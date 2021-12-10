import {Link} from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Link to="/about" className="about-link">About</Link>
            <p>&copy;2021 FavFlop Inc.</p>
        </footer>
    )
}

export default Footer
