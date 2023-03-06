import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import './ManageProducts.css'
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import auth from '../Firebase.init';


const ManageProducts = () => {
    // const [products, setProduct] = useProducts()
    const navigate = useNavigate()

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch("https://health-check-backend.vercel.app/product", {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem("accessToken")
                    navigate('/')
                }
                return res.json()
            })
            .then(data => setProduct(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure?")
        if (proceed) {
            fetch(`https://health-check-backend.vercel.app/productDelete/${id}`, {
                method: "DELETE",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                }
            })
                .then(res => {
                    console.log(res, "res");
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem("accessToken")
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        const remaining = products.filter(p => p._id !== id)
                        setProduct(remaining)
                        toast.success("Product Delete Successfully")
                    }
                    else {
                        toast.error("Product Delete Failed")
                    }
                })
        }
    }

    const handleEdit = (id) => {
        navigate(`/editProducts/${id}`)
    }

    return (
        <div className='container services service-container mt-5'>
            {
                products.map(p => <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className='shadow-lg service'>
                        <img src={p.img} alt="" />
                        <h3 className='ms-50' style={{ color: "#003f91" }}>{p.name}</h3>
                        <h5>Price:-$ {p.price}</h5>
                        <p>{p.description}</p>
                        <div className='d-flex justify-content-between'>
                            <button type="button" onClick={() => handleEdit(p._id)} style={{ borderRadius: "50px", background: "#0353a4" }} className="btn me-1 btn-md d-block mx-auto mb-2 text-white">Edit</button>
                            <button type="button" onClick={() => handleDelete(p._id)} style={{ borderRadius: "50px", background: "#0353a4" }} className="btn ms-1 btn-md d-block mx-auto mb-2 text-white">Delete</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;