import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import editProduct from '../images/edit.webp'
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import auth from '../Firebase.init';



const EditProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { id } = useParams()
    const Navigate = useNavigate();


    const onSubmit = async data => {
        fetch(`https://health-check-backend.vercel.app/editProduct/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                    Navigate("/")
                }
                return res.json();
            })
            .then(result => {
                console.log(result);
                if (result.modifiedCount) {
                    toast.success('Product Edit Successfully');
                    reset();
                }
                else {
                    toast.error('Failed to Edit product');
                }
            })
    };
    return (
        <div>
            <div className='add-product-container d-flex col-lg-12 col-md-12 col-12 col-sm-12 mx-auto' style={{ marginTop: "50px" }}>
                <div className='text-center col-lg-8'>
                    <img className='w-75 h-100 rounded-3' src={editProduct} alt="" />
                </div>
                <div className='text-center add-product'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                type="text"
                                placeholder="name"
                                className='mb-2 w-full'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        maxLength: 20,
                                        message: "name is required"
                                    }
                                })
                                } />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text text-danger">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="Price"
                                className='mb-2 w-full'
                                {...register("price",
                                    {
                                        required: {
                                            value: true,
                                            maxLength: 20,
                                            message: "price is required"
                                        }
                                    })
                                } />
                            <label className='label'>
                                {errors.price?.type === 'required' && <span className="label-text text-danger">{errors.price?.message}</span>}
                            </label>
                        </div>
                        <div>
                            <textarea
                                type="text"
                                placeholder="description"
                                className='mb-2 w-100'
                                {...register("description",
                                    {
                                        required: {
                                            value: true,
                                            maxLength: 200,
                                            message: "description is required"
                                        }
                                    })
                                } />
                            <label className='label'>
                                {errors.description?.type === 'required' && <span className="label-text text-danger">{errors.description?.message}</span>}
                            </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Image URL"
                                className='mb-2 w-full'
                                {...register("img",
                                    {
                                        required: {
                                            value: true,
                                            message: "img is required"
                                        }
                                    })
                                } />
                            <label className='label'>
                                {errors.img?.type === 'required' && <span className="label-text text-danger">{errors.img?.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-outline-primary w-100 fw-bolder' type="submit" value='Edit Product' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;