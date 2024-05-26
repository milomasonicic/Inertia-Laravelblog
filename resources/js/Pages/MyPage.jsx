import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react'
import { format, parseISO } from 'date-fns';
export default function MyPage({ auth, myPosts }) {

    const dates = [];

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
                               
                            {myPosts && myPosts.length > 0 ? (
                                myPosts.map((post) => (
                                    <div key={post.id} className="mb-4">
                                        <h2 className="text-xl font-bold">{post.title}</h2>
                                        <span>
                                            Created: {format(parseISO(post.created_at), 'MMMM dd, yyyy')}  
                                        
                                        </span>

                                       <span className='ml-2'>
                                        
                                            Updated: {format(parseISO(post.updated_at), 'MMMM dd, yyyy')}  
                                       </span>
                                     
                                       <div>
                                         
                                         <Link className='text-slate-600 hover:text-slate-800 '  href={`/yourPost/${post.id}`}>See the post</Link>
                                       
                                       </div>
                                    </div>

                               
                                ))
                            ) : (
                                <p>No posts available.</p>
                            )}

                        </div>
                    </div>
                </div>
            </div>

            <div>
            
                
            </div>

        </AuthenticatedLayout>
    );
}
