import * as ReactDOM from "react-dom";
import * as React from "react";
import {Routes, Route, Link, BrowserRouter, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";


const MOVIES = [
    {
        title: "Harry Potter og de vise sten",
        year: "1999",
        plot: "Harry Potter og vennene hans finner en vis sten."
    },
    {
        title: "Humlesnurr og de lange beina",
        year: "1877",
        plot: "Humlesnurr finner ut at han har lange bein."
    }
]



function FrontPage() {
    return <div><h1>A very awesome film database</h1>
        <ul>
            <li><Link to="/movies">List movies</Link></li>
            <li><Link to="/movies/new/">New movies</Link></li>
        </ul>
    </div>
}

function ListMovies({moviesApi}) {
    const [movies, setMovies] = useState();
    useEffect(async () => {
        console.log("hei")
        setMovies(undefined);
        setMovies(await moviesApi.listMovies());
    }, []);

    if (!movies) {
        return <div>Loading... </div>
    }

    return <div>
        <h1>List Movies</h1>
            {MOVIES.map(m =>
                <div key={m.title}>
                    <h2>{m.title} ({m.year})</h2>
                    <div>{m.plot}</div>
                </div>
            )}
    </div>;
}

    function NewMovie({moviesApi}) {
        const [title, setTitle] = useState("");
        const [year, setYear] = useState("");
        const [plot, setPlot] = useState("");

        const navigate = useNavigate();



    async function handleSubmit(e){
        e.preventDefault();
        await moviesApi.onAddMovie({title, year, plot});
        navigate("/");
    }

    return <form onSubmit={handleSubmit}>
        <h1>NewMovie</h1>
        <div>
            <label>Title: <input value={title} onChange={e => setTitle(e.target.value)} /></label>
        </div>
        <div>
            <label>Year: <input value={year} onChange={e => setYear(e.target.value)} /></label>
        </div>
        <div>
            <label>Plot: <textarea value={plot} onChange={e => setPlot(e.target.value)} /></label>
        </div>
        <button>Submit</button>
    </form>
}

function Application() {
    const moviesApi = {
        onAddMovie: async (m) => MOVIES.push(m),
        listMovies: async (m) => MOVIES
    }

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />}/>
            <Route path="/movies/new" element={<NewMovie moviesApi={moviesApi}/>}/>
            <Route path="/movies" element={<ListMovies moviesApi={moviesApi}/>}/>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")

);