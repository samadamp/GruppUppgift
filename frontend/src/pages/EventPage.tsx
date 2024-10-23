import Footer from "../Components/Footer";
import NavBAr from "../Components/NavBar";


export default function EventPage() {
    return (
        <div className="flex flex-col min-h-screen  bg-Background">
            <NavBAr />
        <main className="flex-grow flex flex-col justify-center items-center  bg-Background">
            
    
            <h1>Event Page</h1>
            <Footer />
            </main>
        </div>
    );
}