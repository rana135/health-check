import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return [products, setProduct]
};

export default useProducts;


