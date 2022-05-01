import * as ReactDOM from "react-dom";
import * as React from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";


const movies = [
    {
        title: "Harry Potter og de vise sten",
        plot: "Harry Potter og vennene hans finner en vis sten.",
        year: "1999"
    },
    {
        title: "Humlesnurr og de lange beina",
        plot: "Humlesnurr finner ut at han har lange bein.",
        year: "1877"
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

function ListMovies() {
    return <div>
        <h1>List Movies</h1>
            {movies.map(m =>
                <div>
                    <h2>{m.title} ({m.year})</h2>
                    <div>{m.plot}</div>
                </div>
            )}
    </div>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />}></Route>
            <Route path="/movies/new" element={<h1>NewMovie</h1>}></Route>
            <Route path="/movies" element={<ListMovies/>}></Route>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")

);