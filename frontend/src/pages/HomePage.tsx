
import NavBAr from "../Components/NavBar";
import Footer from "../Components/Footer";
import Card from "../Components/Cards";
import { dummyDataEventCard } from "../lib/dummyData";


export default function HomePage() {
    return (
        <>
            <NavBAr />
            <main className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4 pt-10 pb-10 min-h-screen bg-gradient-to-t from-from to-to">
                {
                    dummyDataEventCard.map((event) =>
                        (<><Card id={event.id} title={event.title} desc={event.desc} img={event.img} /></>)
                    )
                }

            </main>
            <Footer /></>

    );
}