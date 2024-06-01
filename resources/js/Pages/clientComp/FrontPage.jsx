import NavFront from "./NavFront"
//import Slider from "./Slider"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function FrontPage(){

    return(
        <div className="bg-slate-50">
                <NavFront></NavFront>
            <div className="max-w-[840px] mx-auto">
                
                <h1 className="text-4xl text-center my-8" > Our Blog </h1>

            <Carousel width="100%" md:width="75%" showThumbs={false} 
             infiniteLoop={true} 
             swipeable={true}
             stopOnHover={true} 
             autoFocus={true} autoPlay>
                <div>
                    <img src="slika.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="slika.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="slika.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
               
            </Carousel>

            </div>
        </div>
    )
}