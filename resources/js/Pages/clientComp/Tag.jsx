import NavFront from "./NavFront"
import TagHead from "./TagHead"
import { BlogCard } from "./BlogCardComp"
import Footer from "./Footer";
//add more
import { useState } from "react";
import { router } from '@inertiajs/react'


export default function TagPage({cat, title, pagination}){

    const [posts, setPosts] = useState(cat);
    //pagination
    const [page, setPage] = useState(pagination.current_page);

    const loadMore = () => {
        router.visit(`/tag/${title}?page=${page + 1}`, {
            method: 'get',
            only: ['cat', 'pagination'],
            //preserveScroll: true,
            onSuccess: ({ props }) => {
              
                setPosts(prevPosts => [...prevPosts, ...props.cat]);
                setPage(props.pagination.current_page);
            },
        });
    };


    return(
        <div className="bg-slate-50">
            <NavFront></NavFront>
            <div className="max-w-[1140px] mx-auto">
                <div className="mx-auto my-24">
                    <TagHead title={title}></TagHead>
                </div>

                <div className="flex justify-center flex-wrap gap-8 max-w-[1140px] mx-auto">
                {cat && cat.length > 0 ?(
                    
                    cat.map((post) => (
                        <div key={post.id} className="flex">
            
                            <BlogCard title={post.title}
                                    content={post.content}
                                    created_at ={post.created_at}
                                    files={post.files}
                                    id={post.id}
                            ></BlogCard>
                           
                        </div>
                    
                    ))
                ): (
                    <p>
                        'No av'
                    </p>
                )}


                  
                </div> 
                
                <div className="my-20 w-[100%] flex justify-content">
                    {pagination.current_page < pagination.last_page && (
                    <button onClick={loadMore} className="mx-auto px-4 py-2 bg-blue-500 text-white rounded">
                        View More
                    </button>
                    )}   

                </div>
                 
            </div>
           
            <Footer></Footer>
        </div>
    )
}