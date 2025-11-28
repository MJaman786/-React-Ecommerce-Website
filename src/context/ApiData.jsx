import { createContext, useEffect, useState } from "react";

// context created
export const userContext = createContext();

// provider function
export default function UserProvider({ children }) {

    // state for storing the api data in array-boject
    const [data, setData] = useState([]);

    // for filter state management
    const [filter, setFilter] = useState('all');
    const handelFilter = (newFilter) => {
        setFilter(newFilter);
    }

    // async function for api response handeling
    const url = 'https://fakestoreapi.com/products'
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const apiData = await response.json();
            setData(apiData);
            console.log(apiData);
            console.log(`Api data fetch successfull`);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect hook for api calling
    useEffect(() => {
        fetchData();
    }, []);


    // user searching code ...
    const [userSearch, setSearch] = useState(""); // state for searchbar input 
    const [userFilterProductList, setFilterProductList] = useState([]); // state for filtering array 

    const filterProductFunction = (userSearch) => {
        setSearch(userSearch);

        const filterArray = data.filter((data) => {
            return data.title.toLowerCase().includes(userSearch.toLowerCase());
        })
        setFilterProductList(filterArray);
    }

    return (
        <userContext.Provider value={{ data, filter, handelFilter, userSearch, userFilterProductList, filterProductFunction }}>
            {children}
        </userContext.Provider>
    )
}