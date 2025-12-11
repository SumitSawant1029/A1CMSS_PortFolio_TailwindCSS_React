import './About.css';
import AboutImg from '../assets/machines/machine1.png';

function About(){
    return(
        <>
            <div className='about'>
                <div className='leftabout'>
                    <img src={AboutImg} alt="Industrial Cleaning Machine"></img>
                </div>
                <div className='rightabout'>
                    <h1>About Us</h1>
                    <p>
                        At <strong>A1CMSS</strong>, we deliver industrial cleaning solutions built for performance and reliability.
                         Our range includes vacuum cleaners, single-disk scrubbers, and ride-on floor cleaning machines
                         , designed to handle demanding environments across factories, warehouses, malls, and commercial 
                         spaces.

                    </p>
                    <p>
                        
                        Beyond sales, we provide flexible rentals, expert servicing, and genuine spare parts
                         to keep your operations running smoothly. With a focus on quality, efficiency, and 
                         customer satisfaction, we aim to be your trusted partner in maintaining spotless, 
                         safe, and productive spaces.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;
