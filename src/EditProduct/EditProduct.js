import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';


const EditProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { id } = useParams()

    const onSubmit = async data => {
        fetch(`http://localhost:5000/editProduct/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            reset()
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        placeholder="name"
                        className='mb-2'
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
                        className='mb-2'
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
                        className='mb-2'
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
                        className='mb-2'
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

                <input type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default EditProduct;