import './Navbar.css';
import logo from '../assets/logo-removebg.png';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div>
                    <img src={logo} style={{ width: "5vw" }} />
                </div>
                <div className='social'>
                    <button type="button" class="btn btn-outline-primary">Home</button>
                    <button type="button" class="btn btn-outline-primary">Contact</button>
                    <button type="button" class="btn btn-outline-primary">About Us</button>
                </div>
                <div className='social'>
                    <a class="fa-brands fa-facebook"  style={{color:"white",textDecoration:"none"}}></a>
                    <a class="fa-brands fa-instagram" style={{color:"white" ,textDecoration:"none"}}></a> 
                    <a class="fa-brands fa-linkedin" style={{color:"white" ,textDecoration:"none"}}></a>
                </div>

            </nav>
        </>
    )
}

export default Navbar;