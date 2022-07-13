// import React from 'react';
// import { useForm } from 'react-hook-form';

// const AddProduct = () => {
//     const { register, formState: { errors }, handleSubmit,reset } = useForm();

//     const onSubmit = async data => {
//         console.log(data)
//         fetch('http://localhost:5000/addProduct', {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 reset()

//             })
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="form-control w-full max-w-xs">
//                     <small>Image</small>
//                     <input
//                         type="text"
//                         placeholder="Image Url"
//                         className="input input-bordered w-full max-w-xs"
//                         {...register("img", {

//                             required: {
//                                 value: true,
//                                 message: "Img is Required"
//                             },
//                         })}
//                     />
//                     <label className="label">
//                         {errors.img?.type === 'required' && <span className="label-text text-red-500">{errors.img.message}</span>}
//                     </label>
//                 </div>
//                 <div className="form-control w-full max-w-xs">
//                     <small>Product Name</small>
//                     <input
//                         type="text"
//                         placeholder="name"
//                         className="input input-bordered w-full max-w-xs"
//                         {...register("name", {

//                             required: {
//                                 value: true,
//                                 message: "Name is Required"
//                             },
//                         })}
//                     />
//                     <label className="label">
//                         {errors.name?.type === 'required' && <span className="label-text text-red-500">{errors.name.message}</span>}
//                     </label>
//                 </div>
//                 <div className="form-control w-full max-w-xs">
//                     <small>Price</small>
//                     <input
//                         type="number"
//                         placeholder="Price"
//                         className="input input-bordered w-full max-w-xs"
//                         {...register("price", {

//                             required: {
//                                 value: true,
//                                 message: "Product price is Required"
//                             }
//                         })}
//                     />
//                     <label className="label">
//                         {errors.price?.type === 'required' && <span className="label-text text-red-500">{errors.price.message}</span>}

//                     </label>
//                 </div>
//                 <div className="form-control w-full max-w-xs">
//                     <small>Description</small>
//                     <textarea
//                         type="text"
//                         placeholder="Description"
//                         className="input input-bordered w-full max-w-xs"
//                         {...register("description", {

//                             required: {
//                                 value: true,
//                                 message: "Description is Required"
//                             },
//                         })}
//                     />
//                     <label className="label">
//                         {errors.description?.type === 'required' && <span className="label-text text-red-500">{errors.description.message}</span>}
//                     </label>
//                 </div>
//                 <input type="submit" value='Add Product' className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold w-full max-w-xs" />
//             </form>
//         </div>
//     );
// };

// export default AddProduct;



import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        fetch("http://localhost:5000/addProduct", {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            reset()
        })
    };
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

export default AddProduct;