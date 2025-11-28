import { useContext } from "react";
import { userContext } from "../context/ApiData";
import SearchBar from "./SearchBar";

export default function Navbar() {

    const categories = [
        { label: "all", value: "all" },
        { label: "electronics", value: "electronics" },
        { label: "jewelery", value: "jewelery" },
        { label: "men's clothing", value: "men's clothing" },
        { label: "women's clothing", value: "women's clothing" },
    ];
    const {filter, handelFilter, userSearch, filterProductFunction} = useContext(userContext)
    return (
        <nav className="w-full bg-[#0f172a] border-b border-white/10 py-5 shadow-xl">
            <SearchBar userSearch={userSearch} filterProductFunction={filterProductFunction}/>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4 flex-wrap">

                {categories.map((cat, index) => (
                    <button
                        onClick={() => handelFilter(cat.value)}
                        key={index}
                        className={`
                            px-5 py-2 rounded-lg 
                            text-sm font-semibold
                            text-white 
                            bg-white/10 
                            backdrop-blur-md 
                            border border-white/10
                            shadow-md
                            hover:bg-white/20 
                            hover:border-white/20 
                            hover:shadow-lg 
                            transition-all duration-300
                            ${filter === cat.value ?
                                `bg-white/20 border-white/20` :
                                `text-white bg-white/10`}
                        `}
                    >
                        {cat.label}
                    </button>
                ))}

            </div>
        </nav>
    );
}
