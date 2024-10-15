import { Facebook, TwitterX, Instagram, Whatsapp } from 'react-bootstrap-icons';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <h1>Selamat Datang di Unsada Fanbase!</h1>
                <p>Bergabunglah dengan komunitas kami dan temukan potensi Anda bersama kami. Temukan berita terbaru, acara, dan banyak lagi!</p>
                <div className="social-icons-home">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/faiz.mickala666" className="social-icon-home" target='_blank'>< Facebook /></a>
                        </li>
                        <li>
                            <a href="#" className="social-icon-home">< TwitterX /></a>
                        </li>
                        <li>
                            <a href="#" className="social-icon-home">< Instagram /></a>
                        </li>
                        <li>
                            <a href="#" className="social-icon-home">< Whatsapp /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;