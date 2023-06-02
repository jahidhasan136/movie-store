import { useEffect, useState } from "react";
import Movies from "../Movies/Movies";


const WatchingMovie = () => {

    const [watch, setWatch] = useState([])
    useEffect((() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => {
                setWatch(data)
            })
    }), [])

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-2xl mx-auto">
                {
                    watch.map((movie, index) => <Movies key={index} movie={movie.show}></Movies>)
                }
            </div>
        </>
    );
};

export default WatchingMovie;