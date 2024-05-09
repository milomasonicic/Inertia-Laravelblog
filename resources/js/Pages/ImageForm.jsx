import { useForm, usePage } from "@inertiajs/react"
import { router } from "@inertiajs/react"
import { useEffect, useState, useRef } from "react"


export default function ImageForm({postId}) {

    //see the image
  const [selectedFile, setSelectedFile] = useState(null);
  

  const renderPhotos = (source) => {
    
      return <img src={source} alt="" style={{width: "20%", height: "180px"}} />
  
}
    
    const { data, formData,  setData, put, reset,  progress } = useForm({
        postId: " ",
        name: " ",
        file: null,
      })
   
      const { errors } = usePage().props
      useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            postId: postId
        }));
    }, [postId]);
    function submit(e) {
      e.preventDefault()
      router.post("/file-upload",  data)
      setData("file", null)
      setData("null", " ")
  }

      //for sending
      const handleImageChange = (e) => {
        setData("file", e.target.files[0])

        if(e.target.files) {
          const file = e.target.files[0]
          const fileUrl = URL.createObjectURL(file)
          setSelectedFile(fileUrl)
          
          if(selectedFile) {
            URL.revokeObjectURL(selectedFile)
          }
        }
      }

    

   
      return (
        <div>
        <form onSubmit={submit} className='w-[90%] mx-auto'>
        <div className="mb-4">
          <label htmlFor="name">Name of The File: </label>
          <input className='w-[100%]' type="text" name="name" value={data.name} onChange={e => setData('name', e.target.value)} />
          {errors.name && <div id='danger'>{errors.name}</div>}
        </div>
        <div className="mb-4">
        </div>
        <input hidden type="number" value={data.postId} onChange={e => setData('postId', e.target.value)} />
       
        <div className="mb-4">
          <input type="file"
            className="w-full px-4 py-2"
            name="file"
            onChange={handleImageChange}
            
            />
          {errors.file && <div id='danger'>{errors.file}</div> || <div id='danger'>{errors.mimes}</div>}
        </div>
        <div className="result flex"> {renderPhotos(selectedFile)} </div>

        <div>
          <button type="submit" 
        
          class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
         
          
          
        
        </div>
        
         <div>
        </div>
      </form>

        

          <div>
         
          </div>
        </div>
      )
    }

    /*
      onChange={handleImageChange}
            onChange={(e) =>
                setData("file", e.target.files[0])
            }


            ako budem htio da pravim arej...
              setData("file", e.target.files[0])

        if(e.target.files) {
          const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
          setSelectedFiles((prevImages) => prevImages.concat(filesArray))
          Array.from(e.target.files).map(
            (file)=> URL.revokeObjectURL(file)
          )
        }

          const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img key={photo} src={source} alt="" style={{width: "20%", height: "180px"}} />
    })
    */