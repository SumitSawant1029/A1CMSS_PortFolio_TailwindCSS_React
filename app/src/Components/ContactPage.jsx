import './ContactPage.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function ContactPage() {
    const lat = 19.139126;
    const lng = 72.851981;

    return (
        <>
            <div className='border'>

                <div className="whole">

                    <div className="header">
                        <h1 style={{ fontFamily: " 'BoardMarker', sans-serif" }}>Contact</h1>
                    </div>

                    <div className="divided">
                        <div className="details">
                            <h1>Reach Out Today</h1>

                            <p>
                                At A1 CMSS, we specialize in delivering top-quality spare parts and advanced cleaning machines for industrial needs. Our services go beyond sales — we provide expert maintenance and servicing for machines you purchase, ensuring long-lasting performance. Need flexibility? We also offer machine rentals to keep your operations running smoothly without heavy upfront costs. Contact us today to find the perfect solution for your business.
                            </p>

                            <a>+91 8108576XXX</a><br/>
                            <a>sales@a1cmss.com</a>
                        </div>

                        <div className="map">
                            <MapContainer center={[lat, lng]} zoom={15} style={{ height: '100%', width: '100%' }}>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={[lat, lng]} />
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
