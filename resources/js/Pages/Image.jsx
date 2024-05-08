import { useForm, usePage } from '@inertiajs/react'
import { router } from "@inertiajs/react"
import { useEffect } from 'react'


export default function Image({file}) {


    const { data, formData,  setData, put,  progress } = useForm({
        fileId: file.id,
       
      })

    function submit(e) {
        e.preventDefault()
        router.post("/deletefile", data)
        /*
        e.preventDefault();
        deleteFile(`/deletefile/103`, { method: 'delete' }); // Slanje DELETE zahteva koristeći deleteFile metodu i prosleđivanje podataka
        */
    }


  

    return (
        <div>
            <h1>Files</h1>
            <img src={file.img_url} style={{width: "200px", height: "180px"}} alt="" /> 

            <form action="" onSubmit={submit} >
                        <input type="hidden" value={file.id} onChange={e => setData('id', e.target.value)} />
                        <button 
                         type="submit"
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

