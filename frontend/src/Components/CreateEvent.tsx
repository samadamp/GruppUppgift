import { IoMdCreate } from "react-icons/io";

const CreateEvent = () => {
    return (
        <>
            <div className="flex justify-items-center items-center bg-blue800 w-fit h-fit pr-3 pl-3 pt-2 pb-2 transition duration-300 ease-in-out rounded-lg font-bold hover:bg-blue900 cursor-pointer text-xl hover:text-white border border-black">
                <span>Create event&nbsp;</span><IoMdCreate />
            </div>
        </>
    )
}

export default CreateEvent;   