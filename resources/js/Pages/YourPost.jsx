import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useEffect } from 'react'
import { useForm } from '@inertiajs/react'
import { router } from "@inertiajs/react"
import { useState } from 'react';
import Image from './Image';
import { Link } from '@inertiajs/react'

export default function YourPost({auth, post}) {


    //update post intereactions
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [tag, setTag] = useState(post.tag);



    const { data, setData, put, processing, errors } = useForm({
        postId: post.id,
        content: '', 
        tag: '',
        title:''
      })

      function submit(e) {
        e.preventDefault()
        router.put("/updatePost", data)
    }

    //delete post

    function submit4(e) {
        e.preventDefault()
        router.post("/deletepost", data)
    }

    //publish post
    function submit5(e){
        e.preventDefault()
        router.put('/publishedupdate', data)
    }
    
    //update funkcije
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setData('title', e.target.value)
      };

      const handleContentChange = (e) => {
        setContent(e.target.value);
        setData('content', e.target.value)
      };  

      const handleTagChange = (e) => {
        setTag(e.target.value);
        setData('tag', e.target.value)
      }; 
 
        /*useEffect(() => {    
            setData('postId', post.id);
        }, [data]);*/

    return (
        <div>
            <AuthenticatedLayout
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Images and Videos to your Post</h2>}        
                    >
                <div className='py-12 bg-stone-400'>
                    <div className='mx-auto sm:px-6 lg:px-8'>
                        <div className="bg-white overflow-hidden h-[1250px] md:w-[80%] mx-auto shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                

                                <form onSubmit={submit} className='w-[90%] mx-auto'>
       
                                    <h1 className='mb-4 mt-4 text-bold font-semibold'>Check your post before publishing it</h1>
                                    
                                     <div>
                                        <label htmlFor="">Title</label>
                                        <input className='w-[100%]' type="text" value={title} onChange={handleTitleChange}></input>
                                    
                                    </div> 

                                    <div>
                                        <label htmlFor="">Content</label>
                                        <textarea cols="30" rows="10" onChange={handleContentChange} className='w-[100%]' name="" id="" value={content}></textarea>

                                    </div>              


                                    <label htmlFor="Tag">Tag: {tag}  </label>
                                    <div>
                                    <select name="tag" id="" onChange={handleTagChange}>
                                        <option value="sport">Sport</option>
                                        <option value="kultura">Kultura</option>
                                        <option value="politika">Politika</option>
                                        <option value="ekonomija">Ekonomija</option>
                                    </select>
                                    </div>

                                    <button type='submit'
                                    class=" mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    > Update </button>
                                 

                                </form>
                                
                            </div>

                            <div className=' px-4 w-[90%] mx-auto'>

                                <ul className='md:flex gap-4'>
                                {post.files.map(file => (
                                    <li key={file.id}>
                                            <Image file={file}></Image>
                                        </li>
                                    ))}
                                </ul>
                                
                                
                                <Link className='text-slate-600 hover:text-slate-800'  href={`/newPost/${post.id}`}>Upload Images Again</Link>
                          
                            </div>
                            

                            <div className='mt-40 px-4 w-[90%] mx-auto flex'>

                            <form action="" onSubmit={submit4}>
                                <button type='submit'
                                 class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    
                                > Destroy post </button>
                            </form>

                            
                                <form action="" onSubmit={submit5}>
                                    <button type='submit'
                                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    > Publish </button>
                                </form>
                            
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