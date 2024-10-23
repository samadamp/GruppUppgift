
import NavBAr from "../Components/NavBar";
import Footer from "../Components/Footer";


export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-t from-from to-to">
            <NavBAr />
            <main className="flex-grow flex flex-col justify-center items-center">
                <div className="flex gap-5 mt-4">
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                </div>
                <div className="flex gap-5 mt-4">
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                </div>
                <div className="flex gap-5 mt-4">
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                    <img src="/lol.png" alt="Lol Image" className="w-80" />
                </div>
                {/* <h1>Home Page</h1> */}
                <Footer />
            </main>
        </div>
    );
}