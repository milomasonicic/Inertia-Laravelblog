import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {useRef} from 'react'

export default function YourPost({auth, post}) {

    return (
        <div>
            <AuthenticatedLayout
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Images and Videos to your Post</h2>}        
                    >
                <div className='py-12 bg-stone-400'>
                    <div className='mx-auto sm:px-6 lg:px-8'>
                        <div className="bg-white overflow-hidden h-[850px] md:w-[80%] mx-auto shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                

                                <form action="" className='w-[90%] mx-auto'>
                                    <h1 className='mb-4 mt-4 text-bold font-semibold'>Check your post before publishing it</h1>
                                    <input hidden type="number" value={post.id} />

                                     <div>
                                        <label htmlFor="">Title</label>
                                        <input className='w-[100%]' type="text" value={post.title}></input>
                                    
                                    </div> 

                                    <div>
                                        <label htmlFor="">Content</label>
                                        <textarea cols="30" rows="10" className='w-[100%]' name="" id="" value={post.content}></textarea>

                                    </div>              


                                    <label htmlFor="Tag">Tag: {post.tag}  </label>
                                    <div>
                                    <select name="tag" id="">
                                        <option value=" "> </option>
                                        <option value="sport">Sport</option>
                                        <option value="kultura">Kultura</option>
                                        <option value="politika">Politika</option>
                                        <option value="ekonomija">Ekonomija</option>
                                    </select>
                                    </div>

                                    <button type='submit'> Update </button>
                                 

                                </form>
                                
                            </div>

                            <div className=' px-4 w-[90%] mx-auto'>
                            <h2>Files:</h2>
                                <ul className='flex gap-4'>
                                    {post.files.map(file => (
                                    <li key={file.id}>{file.name}
                                    <img src={file.img_url} style={{width: "200px", height: "180px"}} alt="" />
                                    
                                    </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                            <button type='submit'> Delete </button>
                            <button type='submit'> Publish </button>
                            </div>

                        </div>

                    </div>

                </div>

            </AuthenticatedLayout>
        </div>
    )
}

/*

                </AuthenticatedLayout>*/