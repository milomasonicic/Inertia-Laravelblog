"use client";

import { Card } from "flowbite-react";
//import Image from "next/image";


//hm


export function BlogCard({title, files, content, created_at}) {
    
    
    const limitedContent = content.split(' ').slice(0, 10).join(' ');
  

  

  return (
    <Card
      className="max-w-sm"
      //renderImage={() => <Image width={500} height={500} src="/images/blog/image-1.jpg" alt="image 1" />}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {limitedContent}...
      </p>
      {files.length > 0 ? (
                <div>
                    Prvi fajl: {files[0].name}
                </div>
            ) : (
                <div>
                    Nema fajlova
                </div>
            )}
      <p>
      {created_at}
      
      </p>
    </Card>
  );
}