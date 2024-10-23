import { BsSearch } from "react-icons/bs";

const Search = () => {
    return (
        <>
            <div className="flex w-96 ">
                <input type="text" className="w-96 pt-3 pb-3 pl-3 border-3 border-r-0 p-1.5 h-fit rounded-l-lg focus:outline-none text-gray-500 border" placeholder="Search for events ..." />
                <div className="flex justify-items-center items-center bg-blue800 w-fit h-fit pr-4 pl-4 pt-4 pb-4 rounded-r-lg hover:bg-blue900 hover:text-white cursor-pointer border border-black">
                    <BsSearch />
                </div>
            </div>
        </>
    )
}

export default Search;   