import {Link} from 'react-router-dom';
import logo from '../assets/logo-tacolar1.jpeg';


function Header() {
    return(
        <header>
            <div className="header-container">
                <img
                    src={logo}
                    alt="Locadora Tacolar - Aluguel de Mesas de Sinuca"
                    className='logo'
                />
                <nav>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/about">Quem Somos</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;