import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const MovieDetails = () => {
    const movieData = useLoaderData()
    const { id } = useParams()
    const [movies, setMovies] = useState({})
    console.log(movies)
    const { name, image, genres, premiered, language, rating, ended, schedule, status, summary, type, } = movies

    const paragraphs = summary?.split('</p>').filter(Boolean).map((paragraph, index) => (
        <p key={index}>{paragraph.replace(/<[^>]+>/g, '')}</p>
    ));


    useEffect(() => {
        const movie = movieData.find(item => item.show.id == id)
        setMovies(movie.show)

    }, [movieData, id])


    const handleBuyTicket = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Create an object from form data
        const formDataObject = Object.fromEntries(formData.entries());

        const existingData = localStorage.getItem('formData');

        let formDataArray = [];
        if (existingData) {
            formDataArray = JSON.parse(existingData);
            if (!Array.isArray(formDataArray)) {
                formDataArray = [];
            }
        }

        // Add the new form data to the array
        formDataArray.push(formDataObject);


        // Store the form data in local storage
        localStorage.setItem('formData', JSON.stringify(formDataArray));
    };


    return (
        <div className="pt-52 bg-black/60 bg-blend-darken text-white" style={{ backgroundImage: `url('${image?.original}')` }}>
            <div className="container p-5 mx-auto">
                <div className="max-w-screen-xl mx-auto grid">
                    <div className="md:flex justify-center gap-10 items-center ">
                        <img className="md:w-[500px] mb-5 md:mb-0" src={image?.medium} alt="" />
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
                                <div>
                                    <p className="w-11/12 text-justify mb-5">{paragraphs}</p>
                                    <button className="btn rounded-md">{status}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleBuyTicket} className="mt-20 mx-auto space-y-4 mb-10">
                        <div className="flex gap-3">
                            <input defaultValue={name} name="name" type="text" className="text-black input input-bordered w-full max-w-xs" />
                            <input type="text" name="language" defaultValue={language} className="text-black input input-bordered w-full max-w-xs" />
                            <input type="date" name="date" className="text-black input input-bordered w-full max-w-xs" />
                        </div>
                        <input type="text" name="intro" placeholder="Type here" className="input input-bordered w-full max-w-xs flex justify-center mx-auto  text-black" />
                        <input className="btn rounded-full mx-auto flex justify-center" type="submit" value="Get Ticket" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;