import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImage from '../../../assets/banner.png'
const Banner = () => {


    return (
        <Carousel className="text-center">
                <div>
                    <img src={bannerImage} alt="" />
                </div>
        </Carousel>
    );
};

export default Banner;