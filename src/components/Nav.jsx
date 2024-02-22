import './styles/Nav.css';
import logo from '../assets/logo.png';
import cartIcon from '../assets/cartIcon.svg';

const Nav = () => {
  return (
    <>
    <nav className="navEcoPop">
        <div className="logoNav">
            <img src={logo} alt="logo" />
        </div>
        <div className="botonesNav">
            <a href=""><button>Home</button></a>
            <a href=""><button>Galeria</button></a>
            <a href=""><button>Contacto</button></a>
            <a href=""><button>Sign Up</button></a>
            <ul className='nav-cart'>
              <li>
                <img src={cartIcon} className='cart-img'/><span className='cart-count'>0</span>
              </li>
            </ul>
            {/* <a href=""><button>+ Subir Producto</button></a> */}
        </div>
    </nav>
    </>
  )
}

export default Nav;