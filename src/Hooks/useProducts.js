import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';

const useProducts = () => {
    const [products, setProduct] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://health-check-backend.vercel.app/product", {
            method: "GET",
            // headers: {
            //     "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            // }
        })
            .then(res => res.json())
            // .then(res => {

            //     if (res.status === 401 || res.status === 403) {
            //         signOut(auth)
            //         localStorage.removeItem("accessToken")
            //         navigate('/')
            //     }
            //     return res.json()
            // })
            .then(data => setProduct(data))
    }, [])
    return [products, setProduct]
};

export default useProducts;


