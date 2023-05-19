import { Link } from 'react-router-dom';
import '../index.css'
function NavbarContentPages() {
    return (
        <nav>
            <ul>
                <li>Mining Rockets - Rockets Section</li>

                <li><Link to="/">Back To Main Page</Link> </li>
            </ul>
        </nav>
    );
}

export {
    NavbarContentPages
};
