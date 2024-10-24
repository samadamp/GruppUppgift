import { eventCard } from "../lib/types";
import { Link } from "react-router-dom";

const Card = ({ id, title, desc, img }: eventCard) => {

    return (
        <>
            <Link to={`/${id}`}>
                <div key={id} className="flex flex-col justify-center items-center animate-card-animation">
                    {img == null ? <div className="bg-[#807d7d] rounded-[15px] w-[200px] h-[300px] flex justify-center items-center"><img src="/image.png" alt="none" /></div> : <img className="w-[200px] h-[300px] rounded-[15px] float-left object-cover" src={img} alt={title} />}
                    <span className="flex flex-col gap-2 absolute w-[200px] h-[300px] text-center justify-center items-center rounded-[15px] p-4 duration-500 opacity-0  hover:backdrop-blur-[15px] hover:opacity-100 cursor-pointer">
                        <h2 className="text-3xl font-semibold leading-snug text-gray-700">{title}</h2>
                        <div className="text-white"></div>
                        <h4 className="text-xl font-medium leading-relaxed text-gray-600">{desc}</h4>
                        <div className="text-white"></div>
                    </span>
                </div>
            </Link>
        </>
    )
}

export default Card;