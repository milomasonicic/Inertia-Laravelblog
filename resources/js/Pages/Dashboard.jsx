import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { usePage} from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
import ImageForm from './ImageForm';

export default function Dashboard({ auth }) {

    const { data, setData, reset, progress,  post} = useForm({
        user_id: auth.user.id,
        content: " ",
        title:" ",
        tag: " ",    
      })  
    
     
    const { errors } = usePage().props   

    function handleSubmit(e) {
        e.preventDefault()
       router.post('/pstore',  data)}
    


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create new post</h2>}
        >
            <Head title="Create new post" />
            
            <div className="py-12 bg-stone-400 ">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white md:w-[80%] mx-auto overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                       
                             <form action="" onSubmit={handleSubmit} className='w-[90%] mx-auto'>
                             
                                <div>
                                    <label htmlFor="title">Title: </label>
                                    <input className='w-[100%]' type="text" id="title"  value={data.title} onChange={e => setData('title', e.target.value)}  />
                                    {errors.title && <div id='danger'>{errors.title}</div>}

                                </div>

                                <div>
                                    <label htmlFor="content">Content: </label>
                                    <textarea className='w-[100%]' name="content" id="name" value={data.content} cols="30" rows="10" onChange={e => setData('content', e.target.value)} >
                                    {errors.content && <div id='danger'>{errors.content}</div>}
                                    </textarea>
                                </div>

                                <div>
                                <label htmlFor="Tag">Tag: </label>
                                    <select name="tag" id="" value={data.tag} onChange={e => setData('tag', e.target.value)}>
                                        <option value=" "> </option>
                                        <option value="sport">Sport</option>
                                        <option value="kultura">Kultura</option>
                                        <option value="politika">Politika</option>
                                        <option value="ekonomija">Ekonomija</option>
                                    </select>
                                    {errors.tag && <div id='danger'>{errors.tag}</div>}
                                   
                                </div>

                                <button type='submit'  class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Create post</button>
                                {progress && (
                                    <progress value={progress.percentage} max="100">
                                     {progress.percentage}%
                                     </progress>
                                )}
                            </form>   


                        </div>
                    </div>
                </div>
            </div>

            <div>
            
                
            </div>

        </AuthenticatedLayout>
    );
}
