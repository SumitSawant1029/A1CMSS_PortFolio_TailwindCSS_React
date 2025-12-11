import banner from '../assets/banner.png';
import './Home.css';
function Home(){
    return(
        <>  
            <div class="wrapper">
                <img src={banner} alt=""/>
            <div class="full-overlay">
                <h1>INDUSTRAIL</h1>
                <h1>CLEAN SOLUTIONS</h1>
               
                <ul style={{fontSize:"1.5vw",listStyle:"none"}}>
                    <li>Industrial Vaccum Cleaner Sales & Servicing</li>
                    <li>Experienced Machine Operators</li>
                    <li>Best Quality Spare Parts</li>
                </ul>
                <h3 style={{fontSize:"1.5vw"}}>Your Partner For Spotless Future</h3><br/>
                <button style={{fontSize:"1.5vw", width:"10vw",height:"7vh",borderRadius:"5px"}}>
                    Learn More
                </button>
            </div>
            </div>


        </>
    );
}

export default Home;