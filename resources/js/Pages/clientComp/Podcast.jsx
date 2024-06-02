import YouTube from 'react-youtube';
import getVideoId from 'get-video-id';

export default function Podcast({lastPodcast}){

    const youtubeStyle = {
        // Add your CSS properties here
        width: '200px', // Example width
        height: '500px', // Example height
        border: 'none', // Example border
        // Add more styles as needed
    };

    const opts = {
        height: '390px',
        width: '90%'
      };

      const idVideo  = getVideoId(lastPodcast.video_url);
     
    return(
        <div className='py-14'>
        
           
            <h1 className="text-4xl font-extrabold uppercase text-left my-8 mb-4" > Watch the Video</h1>
            <YouTube 
            opts={opts}
            
            videoId={idVideo.id}/>
        </div>
    )
}