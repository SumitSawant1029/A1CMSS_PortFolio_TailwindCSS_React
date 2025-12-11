import './Block.css';
import image1 from '../assets/machines/machinedisplay1.jpg';
import image2 from '../assets/machines/machinedisplay2.jpg';
import image3 from '../assets/machines/machinedisplay3.png'

function Block() {
    const data = [
            { imgurl: image1, description: "Robust industrial vacuum cleaner engineered to handle dust, debris, and heavy-duty cleaning tasks with ease." }, 
            { imgurl: image2, description: "Efficient single-disk scrubbing machine designed for deep cleaning and polishing of hard floors. Ideal for commercial and industrial use.”" },
            { imgurl: image1, description: "Robust industrial vacuum cleaner engineered to handle dust, debris, and heavy-duty cleaning tasks with ease." }, 
            { imgurl: image2, description: "Efficient single-disk scrubbing machine designed for deep cleaning and polishing of hard floors. Ideal for commercial and industrial use.”" },  
            { imgurl: image3, description: "Heavy-duty ride-on floor cleaning machine built for large spaces. Powerful performance for warehouses, malls, and factories." }
        ];

    return(
        <>
            <div className="features">

            {data.map((a,index)=>(
                
                <div id={index} className='cards'>
                    <img src={a.imgurl} alt='Helloo' style={{width:"100%"}}></img>
                    <p>{a.description}</p>
                </div>
                
            ))}
            </div>
                    
        </>

    );
}

export default Block;