"use client";

import { Card } from "flowbite-react";
//import Image from "next/image";


//hm


export function BlogCard({title, files,  created_at}) {
    
    
    const limitedContent = title.split(' ').slice(0, 6).join(' ');
  

  

  return (
    <Card
      className="w-[280px] h-[320px]"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      //renderImage={() => <Image width={500} height={500} src="/images/blog/image-1.jpg" alt="image 1" />}
    >

      {files.length > 0 ? (
              
              <div style={{ margin: "auto", backgroundColor: "red", width: "250px", height: "150px", overflow: 'hidden' }}>
              <img src={files[0].img_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            ) : (
                <div style={{width: "250px", height: "150px", overflow: 'hidden'}}>
                    <img src="/uploads/sJPG.jpg" alt=""  style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                     
                </div>
        )}



      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
        {limitedContent}
      </h5>
      <h6>
      {created_at}
      </h6>     

      
    </Card>
  );
}