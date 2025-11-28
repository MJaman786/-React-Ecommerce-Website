import { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { userContext } from "../context/ApiData";
import StaticLoading from "./StaticLoading";
import ProductNotFound from "./PoductNotFound";


const ProductCardWrapper = () => {
    const { data, filter, userSearch, userFilterProductList } = useContext(userContext);

    const filterData = filter === 'all' ? data : data.filter((value) => value.category === filter)

    return (
        <>
            {
                (userSearch === "") ?
                    (
                        (data.length > 0 && data) ? (
                            <div className="p-4 sm:p-8">
                                <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
                                    Featured Products
                                </h2>
                                {/* Responsive Grid Layout */}
                                <div className="
                                    grid 
                                    gap-8 
                                    sm:grid-cols-2 
                                    lg:grid-cols-3 
                                    xl:grid-cols-3
                                ">
                                    {/* Import and render the ProductCard component */}
                                    {
                                        filterData.map((data, index) => {
                                            return (
                                                <ProductCard key={index} data={data} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) : <StaticLoading />
                    ) :
                    // 
                    (
                        (userFilterProductList.length > 0 && data) ? (
                            <div className="p-4 sm:p-8">
                                <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
                                    Featured Products
                                </h2>
                                {/* Responsive Grid Layout */}
                                <div className="
                                    grid 
                                    gap-8 
                                    sm:grid-cols-2 
                                    lg:grid-cols-3 
                                    xl:grid-cols-3
                                ">
                                    {/* Import and render the ProductCard component */}
                                    {
                                        userFilterProductList.map((userFilterProductList, index) => {
                                            return (
                                                <ProductCard key={index} data={userFilterProductList} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) : <ProductNotFound />
                    )


            }

        </>
    );
};

export default ProductCardWrapper;