import NavFront from "./NavFront"
import { format, parseISO } from 'date-fns';
import { SocialIcon } from 'react-social-icons'
import Footer from "./Footer";


export default function ViewPost({post, author, files}){

      
    
    return(
        <div className="bg-slate-50">
            <NavFront></NavFront>

            <div className="max-w-[800px] mx-auto">
                <div className="px-12">
                 <h1 className="mt-36 mb-4 text-4xl font-extrabold uppercase">{post.title}</h1> 
               
                {author.name != undefined ? 
                    <p className="text-slate-600 italic">
                      Author not in database      
                    </p>
                    
                   :
                    <p className="text-slate-600 italic">
                        Author: {author.name}
                    </p>   
                }

                <p className="text-slate-600 italic mt-2"> 
                    {format(parseISO(post.created_at), 'MMMM dd, yyyy')}  
                </p>
                </div>

                
                <div>
                { files.length > 0 ? (
                 <img src={files[0].img_url} alt="" style={{ margin:'auto', width: '90%', height: '370px', objectFit: 'cover' }} />
                ) : (
                    <img src="/uploads/sJPG.jpg" alt=""  style={{ margin:'auto', width: '90%', height: '370px', objectFit: 'cover' }} />
                     
                )}

               

                </div>

                <div className="my-16 px-12">
                    {post.content}
                </div>
                
                
                <div className="flex justify-center  mx-auto">
                <SocialIcon style={{ margin: '6px' }}  bgColor="black" fgColor="white" url="https://twitter.com" />
                <SocialIcon style={{ margin: '6px' }} bgColor="black" fgColor="white" url="https://www.instagram.com" />
                <SocialIcon style={{ margin: '6px' }} bgColor="black" fgColor="white" url="https://www.facebook.com/" />

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}



/*
 { files.length > 0 ? 
                " "
                 :
                 <img src={files[0].img_url} alt=""  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                     
                }*/