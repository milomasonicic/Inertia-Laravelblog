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
            <input id='inpt' className='w-[200px]' type="text" value={title} onChange={handleTitleChange}></input>
               
                <button 
                type='submit'
                className='text-blue-700'
                 > Update</button>                        

            </form>
            <form action="" onSubmit={submit} >
                        <input type="hidden" value={file.id} onChange={e => setData('id', e.target.value)} />
                        <button 
                         type="submit"
                        className='text-red-700'
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

