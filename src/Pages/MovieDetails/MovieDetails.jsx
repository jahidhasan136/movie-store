import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const MovieDetails = () => {
    const movieData = useLoaderData()
    const { id } = useParams()
    const [movies, setMovies] = useState({})
    console.log(movies)
    const { name, image, genres, premiered, rating, ended, schedule, status, summary, type, } = movies

    const paragraphs = summary?.split('</p>').filter(Boolean).map((paragraph, index) => (
        <p key={index}>{paragraph.replace(/<[^>]+>/g, '')}</p>
    ));


    useEffect(() => {
        const movie = movieData.find(item => item.show.id == id)
        setMovies(movie.show)

    }, [movieData, id])
    return (
        <div className="pt-52">
            <div className="flex justify-center gap-10 items-center max-w-screen-xl mx-auto">
                <img className="w-[500px]" src={image?.medium} alt="" />
                <div className="flex w-full">
                    <div className="space-y-2 ">
                        <div className="flex justify-between items-center">
                            <h2 className="text-4xl font-bold">{name}</h2>
                            <div className="grid mr-10 lg:mr-20">
                                <div className="flex text-lg font-bold gap-2 justify-end ">
                                    <p>{premiered}</p>
                                    <p>{ended}</p>
                                </div>
                                <Rating
                                    style={{ maxWidth: 80, marginLeft: 10 }}
                                    value={rating?.average}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="flex gap-1">
                            {
                                schedule && <>

                                    <p>{schedule?.days}</p>
                                    {
                                        schedule?.time ? <>,{schedule?.time}</> : <></>
                                    }
                                </>
                            }
                        </div>
                        <div>
                            {
                                genres &&
                                <>
                                    {genres[0]}
                                    {
                                        genres[1] ? <>,{genres[1]}</> : <></>
                                    }
                                </>
                            }
                        </div>
                        <p className="w-11/12 text-justify">{paragraphs}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;