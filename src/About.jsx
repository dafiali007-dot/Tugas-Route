import profileImg from './assets/WhatsApp Image 2026-08-11 at 11.51.27.jpeg';

function About() {
    return (
        <section id="about" className="about-section">

            <h1>About Me</h1>

            <img
                src={profileImg}
                alt="Foto Profil"
                className="Logo"
            />

            <h2>Fath Ad Dafi Ali Al Iskandar</h2>

            <p className="about-intro">
                Halo! Saya adalah mahasiswa yang sedang belajar
                dan mengembangkan kemampuan di bidang teknologi.
                Sekarang saya berkuliah di Universitas Pendidikan Indonesia
            </p>

            <div className="about-info">

                <div className="info-item">
                    <div>
                        <strong>NIM</strong>
                        <p>2503618</p>
                    </div>
                </div>

                <div className="info-item">
                    <div>
                        <strong>Tempat, Tanggal Lahir</strong>
                        <p>Majalengka, 11 Mei 2007</p>
                    </div>
                </div>

                <div className="info-item">
                    <div>
                        <strong>Asal Sekolah</strong>
                        <p>SMA Negeri 2 Majalengka</p>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default About;