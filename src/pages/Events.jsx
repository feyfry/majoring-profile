import { useState } from 'react';
import { Calendar2Event, People, MusicNote, Camera } from 'react-bootstrap-icons';
import './Events.css';

function Events() {
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        { icon: <Calendar2Event />, title: "Fan Meeting", date: "20 Agustus 2024", description: "Bertemu langsung dengan idola Anda!" },
        { icon: <People />, title: "Gathering Tahunan", date: "15 September 2024", description: "Kumpul bersama seluruh anggota fanbase." },
        { icon: <MusicNote />, title: "Konser Online", date: "5 Oktober 2024", description: "Saksikan penampilan eksklusif secara virtual." },
        { icon: <Camera />, title: "Lomba Fotografi", date: "1 November 2024", description: "Tunjukkan bakat fotografimu dengan tema Unsada." },
    ];

    const openModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="events">
            <h1>Upcoming Events</h1>
            <div className="events-grid">
                {events.map((event, index) => (
                    <div key={index} className="event-card">
                        <div className="event-icon">{event.icon}</div>
                        <h2>{event.title}</h2>
                        <p className="event-date">{event.date}</p>
                        <p>{event.description}</p>
                        <button className="event-button" onClick={() => openModal(event)}>Daftar Sekarang</button>
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedEvent.title}</h2>
                        <p>Form Sedang Dibuat, Harap Menunggu Sampai Semuanya Selesai</p>
                        <button onClick={closeModal}>Tutup</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Events;