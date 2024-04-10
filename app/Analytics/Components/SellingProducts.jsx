import React from 'react'
import SellingProductsData from './SellingProductsData'

const SellingProducts = () => {
    return (
        <table className="table-auto w-full mt-7">
            <thead className="text-sm">
                <tr className="text-gray-400 border-b-2 text-sm font-semibold font-[300]">
                    <th className="py-3 text-start ">Product Name</th>
                    <th className="py-3 text-start ">Price</th>
                    <th className="py-3 text-start ">Sold</th>
                    <th className="py-3 text-start ">Status</th>
                </tr>
            </thead>
            <tbody>
                <SellingProductsData imgURL={"/image1.png"} productName="Marvel Thor Movie Print Marble T..." price="$23" pieces="53" stockStatus={true} />
                <SellingProductsData imgURL={"/image2.png"} productName="Aero Shorts Pants Multipacks S..." price="$23" pieces="53" stockStatus={true} />
                <SellingProductsData imgURL={"/image3.png"} productName="Erigo T-Shirts Green" price="$23" pieces="53" stockStatus={true} />
            </tbody>
        </table>
    )
}

export default SellingProducts