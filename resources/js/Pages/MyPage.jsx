import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react'
import { format, parseISO } from 'date-fns';
import { useForm } from '@inertiajs/react'
import { router } from '@inertiajs/react';
//import getVideoId from 'get-video-id';

export default function MyPage({ auth, myPosts }) {

    const { data, setData, reset, progress,  post} = useForm({
        video_url: ' ',
           
      })  
    
    
    function handleSubmit(e) {
        
        e.preventDefault()
         router.post('/videourl', data)
    } 

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create new post</h2>}
        >
            <Head title="Create new post" />
            
            <div className="py-12 bg-stone-400 ">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white md:w-[80%] min-h-[450px] mx-auto overflow-hidden shadow-sm sm:rounded-lg">
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
                                <p>No posts yet.</p>
                            )}

                        </div>

                        {
                            auth.user.name =="admin"? 
                            <div className='px-5 py-12'>
                                <h1> Hello Admin. You can add youtube link to the front page.</h1>
                                <form  onSubmit={handleSubmit}>
                                  
                                    <input className='w-[70%] mr-4' type="text"  value={data.video_url} onChange={e => setData('video_url', e.target.value)}  />
                                    <button type="submit" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Podcast</button>
                                </form>
                            </div>
                            : 
                            <div>
                                
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div>
            
                
            </div>

        </AuthenticatedLayout>
    );
}
