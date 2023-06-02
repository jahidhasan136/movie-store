import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Movies = ({ movie }) => {
    const { id, image, language, name, type, genres, premiered, rating, ended } = movie

    console.log(movie)
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
                <div className="flex justify-between mt-8">
                    <div className="space-y-2">
                        <p><span className="font-medium">Languages:</span> {language}</p>
                        <p> <span className="mr-1 font-medium">Genres:</span>
                            <>
                                {genres[0]},
                                {genres[1]}
                            </>
                        </p>
                    </div>
                    <div>
                        <h3>{premiered}</h3>
                        <h3>{ended}</h3>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Movies;