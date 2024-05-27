import NavFront from "./NavFront"
import TagHead from "./TagHead"
import { BlogCard } from "./BlogCardComp"

export default function TagPage({cat, title}){

    return(
        <div>
            <NavFront></NavFront>
            <TagHead title={title}></TagHead>
           

            {cat && cat.length > 0 ?(
                cat.map((post) => (
                    <div key={post.id}>
                        <h1>{post.id}</h1>
                        
                        <div>
                            <h2>Fajl</h2>
                            
                        </div>
                        <BlogCard title={post.title}
                                  content={post.content}
                                  created_at ={post.created_at}
                                  files={post.files}
                                  
                        ></BlogCard>
                        
                    </div>

                ))
            ): (
                <p>
                    'No av'
                </p>
            )}
        </div>
    )
}