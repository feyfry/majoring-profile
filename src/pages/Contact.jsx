import  { useState } from 'react';
import './Contact.css';

function Contact() {
    const [status, setStatus] = useState("");

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    return (
        <div className="contact">
            <h2>Hubungi Kami</h2>
            <form
                onSubmit={submitForm}
                action="https://formspree.io/f/mkgwgpkd"
                method="POST"
            >
                <input type="text" name="nama" placeholder="Nama" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="pesan" placeholder="Pesan" required></textarea>
                {status === "SUCCESS" ? <p>Terima kasih! Pesan Anda telah terkirim.</p> :
                    <button type="submit">Kirim</button>}
                {status === "ERROR" && <p>Oops! Ada masalah dalam pengiriman.</p>}
            </form>
        </div>
    );
}

export default Contact;