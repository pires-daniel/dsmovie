import {ReactComponent as Githubicon} from 'assets/img/github.svg';
import './styles.css';

function Navbar(){
    return (
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSMovie</h1>
          <a className='dsmovie-contact-link' href="https://github.com/pires-daniel">
          <div className='dsmovie-contact-container'>
            <Githubicon/>
            <p className='dsmovie-contact-link'>/pires-daniel</p>
          </div>
          </a>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;