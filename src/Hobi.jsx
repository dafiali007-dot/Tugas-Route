import hobi from './assets/WhatsApp Image 2026-09-08 at 07.54.40.jpeg';
import gambar from './assets/WhatsApp Image 2026-09-08 at 07.54.40 (1).jpeg';

function Hobi() {
    return (
        <section>
            <h1>Hobi</h1>
            <div className="hobi-container">
                <div className="hobi-card">
                    <h2>🎮 Bermain Game</h2>
                    <img
                        src={gambar}
                        alt="Bermain Game"
                        className="Hobi"
                    />
                    <p>
                        Salah satu kegiatan yang sering saya lakukan
                        di waktu luang.
                    </p>
                </div>
                <div className="hobi-card">
                    <h2>🎨 Menggambar</h2>
                    <img
                        src={hobi}
                        alt="Menggambar"
                        className="Hobi"
                    />
                    <p>
                        Saya suka menggambar ketika sedang ingin
                        mengisi waktu luang.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Hobi;