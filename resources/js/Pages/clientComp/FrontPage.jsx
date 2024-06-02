import NavFront from "./NavFront"
//import Slider from "./Slider"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BlogCard } from "./BlogCardComp"
import { Link } from "@inertiajs/react";
import Podcast from "./Podcast";
import Footer from "./Footer";

export default function FrontPage({posts, lastPodcast}){

    return(
        <div className="bg-slate-50">
                <NavFront></NavFront>
            <div className="max-w-[840px] px-4 md:px-0 mx-auto">
                
                <h1 className="text-4xl font-extrabold text-center my-8" > Our Blog </h1>

            <Carousel width="100%" md:width="82%" showThumbs={false} 
             infiniteLoop={true} 
             swipeable={true}
             stopOnHover={true} 
             autoFocus={true} autoPlay>

                {posts.slice(3, 6).map((post, index) => (
                <div>
                    <div key={index}>
                        {post.files && post.files.length > 0 && (
                            <div className="h-[450px]">
                                 <h1 className="absolute top-0 left-0  uppercase text-white text-5xl w-full h-full flex items-center justify-center z-10">
                                 <Link className=' '  href={`/laypout/${post.id}`}>{post.title}</Link> 
                                    
                                </h1>
                                <div className="w-[100%] h-[100%] bg-black opacity-60 fixed">
                                </div>
                                <img src={post.files[0].img_url} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />

                            </div>
                        )}
                        
                    </div>       

                </div>
                
                ))}
                            
               
            </Carousel>



            </div>
            <div className="bg-stone-200 w-[100%] pb-14 pt-8 mt-12">
           
            <h2 className="text-4xl font-extrabold text-center my-8">New</h2>

            <div className="flex justify-center flex-wrap gap-8 max-w-[1140px] mx-auto">
            {posts.slice(0, 3).map((post, index) => (
                    <div key={index}>

                          <BlogCard title={post.title}
                                    content={post.content}
                                    created_at ={post.created_at_diff}
                                    files={post.files}
                                    id={post.id}
                            ></BlogCard> 
                          
                        
                                              
                    </div>
                ))}
            
            </div>    
            </div>

            <div className="max-w-[840px] mx-auto py-18 px-6">
            <Podcast lastPodcast={lastPodcast}></Podcast>
            </div>

            <Footer></Footer>
        </div>
    )
}