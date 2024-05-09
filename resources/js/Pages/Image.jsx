import { useForm, usePage } from '@inertiajs/react'
import { router } from "@inertiajs/react"
import { useState } from 'react'


export default function Image({file}) {

    const [title, setTitle] = useState(file.name);


    const { data, formData,  setData, post, put,  progress } = useForm({
        fileId: file.id,
        title:''
       
      })

    function submit(e) {
        e.preventDefault()
        router.post("/deletefile", data)
        /*
        e.preventDefault();
        deleteFile(`/deletefile/103`, { method: 'delete' }); // Slanje DELETE zahteva koristeći deleteFile metodu i prosleđivanje podataka
        */
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setData('title', e.target.value)
      };

    function submitname(e){
        e.preventDefault()
        router.put("/updatefilename", data)
    }


  

    return (
        <div>
            <img src={file.img_url} style={{width: "200px", height: "180px"}} alt="" /> 
            <form action="" onSubmit={submitname}>
            <div>
                <label htmlFor="">Title oh the image</label>
            </div>   
            <input className='w-[200px]' type="text" value={title} onChange={handleTitleChange}></input>
                <button 
                type='submit'
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                > Update</button>                        

            </form>

            <form action="" onSubmit={submit} >
                        <input type="hidden" value={file.id} onChange={e => setData('id', e.target.value)} />
                        <button 
                         type="submit"
                         class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        
                        >Delete
                        </button>  
            </form>            
        </div>
    )
}

/*
<img src={file.img_url} style={{width: "200px", height: "180px"}} alt="" /> 
                   

<form action="" onSubmit={submit} >
                        <input type="hidden" value={file.id} onChange={e => setData('id', e.target.value)} />
                        <button 
                         type="submit"
                        >Delete
                        </button>   



                        <ul className='flex gap-4'>
               {post.files.map(file => (
                    <li key={file.id}>{file.name}
                        <img src={file.img_url} style={{width: "200px", height: "180px"}} alt="" /> 
                    <form action="" onSubmit={submit} >
                        <input type="hidden" value={file.id} onChange={e => setData('id', e.target.value)} />
                        <button 
                         type="submit"
                        >Delete
                        </button>                                 
                    </form>
                     </li>
                ))}



*/

