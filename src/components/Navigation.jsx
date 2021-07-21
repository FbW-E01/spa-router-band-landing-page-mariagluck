import { NavLink } from 'react-router-dom';
import  './Navigation.css';

export default function Navigation() {
   
    return <ul className="navigation">
        <li><NavLink exact to="/">HOME</NavLink></li>
        <li><NavLink to="/vocals">VOCALS</NavLink></li>
        <li><NavLink to="/guitar">GUITAR</NavLink></li>
        <li><NavLink to="/drums">DRUMS</NavLink></li>
        <li><NavLink to="/bass">BASS</NavLink></li>
        <li><NavLink to="/keyboard">KEYBOARD</NavLink></li>
    </ul>;
}


