import image from './assets/WhatsApp Image 2026-09-29 at 09.42.18.jpeg';

function Home() {
    return (
        <section id="Home" className="home-section">
            <div className="home-content">
                <div className="home-text">
                    <p className="home-greeting">
                        Halo, saya 👋
                    </p>
                    <h1>
                        Fath Ad Dafi Ali Al Iskandar
                    </h1>
                    <h2>
                        Mahasiswa Pendidikan Ilmu Komputer
                    </h2>
                    <p className="home-description">
                        Selamat datang di website perkenalan saya.
                        Di sini kamu bisa mengenal saya lebih jauh,
                        mulai dari informasi diri, hobi, hingga kontak
                        dan media sosial saya.
                    </p>
                </div>
                <div className="home-image">
                    <img
                        src={image}
                        alt="Foto Saya"
                        className="HomeImage"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;