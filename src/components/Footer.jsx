import { Link } from 'react-router-dom';
import { BalloonHeartFill, Facebook, TwitterX, Instagram, Whatsapp } from 'react-bootstrap-icons';
import './Footer.css';

function Footer() {

    const pencipta = "https://www.facebook.com/faiz.mickala666";
    const lib = "https://react.dev";

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Tentang Kami</h3>
                    <p>Kami adalah komunitas yang berdedikasi untuk mendukung dan menginspirasi mahasiswa Universitas Darma Persada. Bersama-sama, kita merayakan prestasi akademik dan kegiatan kampus, serta menyediakan platform untuk berinteraksi dan berbagi pengalaman.</p>
                </div>
                <div className="footer-section">
                    <h3>Tautan Cepat</h3>
                    <ul>
                        <li><Link to="/">Beranda</Link></li>
                        <li><Link to="/about">Tentang</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/contact">Kontak</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Kontak</h3>
                    <p>Email: info@unsada.ac.id</p>
                    <p>Telp: (021) 1234-5678</p>
                    <p>Jl. Taman Malaka Selatan No.8, RT.8/RW.6, Pd. Klp., Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13450</p>
                </div>
                <div className="footer-section">
                    <h3>Ikuti Kami</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/faiz.mickala666" className="social-icon" target='_blank'>< Facebook /></a>
                        <a href="#" className="social-icon">< TwitterX /></a>
                        <a href="#" className="social-icon">< Instagram /></a>
                        <a href="#" className="social-icon">< Whatsapp /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Mahasiswa Universitas Darma Persada. <br /> Dibuat dengan <a href={lib} target='_blank'>ReactJS < BalloonHeartFill /></a> Oleh <a href={pencipta} target='_blank'>
                    fey-dev
                </a></p>
            </div>
        </footer>
    );
}

export default Footer;