import YouTube from 'react-youtube';
import getVideoId from 'get-video-id';

export default function Podcast({lastPodcast}){

    const youtubeStyle = {
        width: '200px', 
        height: '500px', 
        border: 'none', 
      
    };

    const opts = {
        height: '390px',
        width: '90%'
      };

       
    const idVideo = lastPodcast && lastPodcast.video_url ? getVideoId(lastPodcast.video_url) : null;

    return (
        <div className='py-14'>
            <h1 className="text-4xl font-extrabold uppercase text-left my-8 mb-4">Watch the Video</h1>
            {idVideo && idVideo.id && (
                <YouTube 
                    opts={opts}
                    videoId={idVideo.id}
                />
            )}
        </div>
    );
}