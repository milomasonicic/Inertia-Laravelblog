import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { usePage} from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
import ImageForm from './ImageForm';

export default function MyPage({ auth }) {

  

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
                            <h1 className='text-red-400'>My Page!</h1>

                        </div>
                    </div>
                </div>
            </div>

            <div>
            
                
            </div>

        </AuthenticatedLayout>
    );
}
