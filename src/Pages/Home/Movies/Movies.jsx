import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const Movies = ({ movie }) => {
    const {id, image, language, name, genres, premiered, rating, schedule } = movie
    return (
        <div className="card w-96 rounded-none bg-base-100 shadow-xl mx-auto">
            <figure><img className="rounded-3xl w-11/12" src={image.medium} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="">
                    <img className="w-24 h-36 -m-20 ml-2" src={image.medium} alt="" />
                    <div>
                        <h2 className="card-title text-3xl ml-36 mb-3">{name}</h2>
                        <Rating
                            style={{ maxWidth: 80, marginLeft: 145 }}
                            value={rating?.average}
                            readOnly
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                    <div>
                        <h3>{premiered}</h3>
                    </div>
                    <div className='flex gap-1'>
                        <p>{schedule.days},</p>
                        <p>{schedule.time}</p>
                    </div>
                </div>
                <div className="space-y-2 mt-3">
                    <p><span className="font-medium">Languages:</span> {language}</p>
                    <p> <span className="mr-1 font-medium">Genres:</span>
                        <>
                            {genres[0]}
                            {
                                genres[1] ? <>,{genres[1]}</> : <></>
                            }
                        </>
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/movies/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Movies;