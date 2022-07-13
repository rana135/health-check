import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import './ManageProducts.css'


const ManageProducts = () => {
    const [products, setProduct] = useProducts()
    const navigate = useNavigate()

    const handleDelete = (id)=>{
        const proceed = window.confirm("Are You Sure?")
        if(proceed){
            fetch(`http://localhost:5000/productDelete/${id}`,{
                method:"DELETE"
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(p => p._id !== id)
                setProduct(remaining)
            })
        }
    }
    
    const handleEdit = (id)=>{
        navigate(`/editProducts/${id}`)
    }

    return (
        <div>
            <h1 style={{ marginTop: "6.5rem" }} className='text-center'>Fitness Store</h1>
            <div className='container products'>
                {
                    products.map(p => <div className='services-container' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className='services shadow-lg'>
                            <img src={p.img} alt="" />
                            <h3>{p.name}</h3>
                            <h5>Price:-$ {p.price}</h5>
                            <p>{p.description}</p>
                            <button type="button" onClick={()=> handleEdit(p._id)} style={{ borderRadius: "50px" }} className="btn btn-primary btn-lg d-block mx-auto mb-2">Edit {p.name}</button>

                            <button type="button" onClick={()=>handleDelete(p._id)} style={{ borderRadius: "50px" }} className="btn btn-primary btn-lg d-block mx-auto">Delete {p.name}</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;