import NavFront from "./NavFront"
import TagHead from "./TagHead"
import { BlogCard } from "./BlogCardComp"
import { Pagination } from "flowbite-react"
import { PaginationButton } from "flowbite-react"

export default function TagPage({cat, title}){

    return(
        <div className="bg-slate-50">
            <NavFront></NavFront>
            <div className="max-w-[1140px] mx-auto ">
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
                                    
                            ></BlogCard>
                            <PaginationButton></PaginationButton>
                        </div>
                    
                    ))
                ): (
                    <p>
                        'No av'
                    </p>
                )}
                </div> 
                 
            </div>
           

        </div>
    )
}