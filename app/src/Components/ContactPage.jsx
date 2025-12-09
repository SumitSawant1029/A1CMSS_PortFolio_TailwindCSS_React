import './ContactPage.css';
import 'leaflet/dist/leaflet.css'; 
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function ContactPage() {
  const lat = 19.139126; 
  const lng = 72.851981;

  return (
    <>
      <div className="header">
        <h1>Contact</h1>
      </div>

      <div className="divided">
        <div className="details">
          <h1>Reach Out Today</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi, eaque maiores,
            quia doloremque culpa dolore aut obcaecati debitis nesciunt voluptate optio harum
            at rerum nisi amet soluta! Ducimus, dolore?
          </p>
          <a>999999999999</a>
          <a>sumitsawant1029@gmail.com</a>
        </div>

        <div className="map" style={{ height: '400px', width: '100%' }}>
          <MapContainer center={[lat, lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[lat, lng]} />
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
