import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ImageForm from './ImageForm';
import { useForm, usePage } from "@inertiajs/react"
import { router } from "@inertiajs/react"
import { Link } from '@inertiajs/react'

export default function NewPost({auth, postId}) {



 

    return (
        <div>
            <AuthenticatedLayout
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Images Post</h2>}        
            >
                <div className='py-12 bg-stone-400'>
                    <div className='mx-auto sm:px-6 lg:px-8'>
                        <div className="bg-white overflow-hidden h-[550px] md:w-[80%] mx-auto shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                
                                <ImageForm postId={postId}></ImageForm> 

                                <Link className='text-slate-600 hover:text-slate-800 px-14 '  href={`/yourPost/${postId}`}>Next</Link>
                                
                            </div>

                        </div>

                    </div>

                </div>
            </AuthenticatedLayout>
        </div>
    )
}
//tema za sjutra
//https://tutorial101.blogspot.com/2022/08/react-js-and-laravel-9-restful-api-file.html#google_vignette