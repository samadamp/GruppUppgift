import { Link } from "react-router-dom";
import Search from "./Search";
import CreateEvent from "./CreateEvent";


const NavBAr = () => {

    return (
        <>
            <div className="flex items-center justify-around flex-wrap w-full border-2 bg-Primary p-4">
                <div><Link to="/"><img src="/logo.png" alt="logo" /></Link></div>
                <Search />
                <CreateEvent />
            </div>
        </>
    )
}

export default NavBAr;
