import React from 'react'

const SellingProductsData = ({imgURL, productName, price, pieces, stockStatus}) => {
    return (
        <tr>
            <td className="py-3 flex items-center gap-5"><div className="w-14 h-full"><img src={imgURL} alt={productName} /></div>{productName}</td>
            <td className="py-3 ">{price}</td>
            <td className="py-3 ">{pieces} pcs</td>
            <td className="py-3 ">{stockStatus ? "In Stock" : "Out of Stock"}</td>
        </tr>
    )
}

export default SellingProductsData