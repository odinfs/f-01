import * as ReactDOM from "react-dom";
import * as React from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

function FrontPage() {
    return <div><h1>A very awesome film database</h1>
        <ul>
            <li><Link to="/movies">List movies</Link></li>
            <li><Link to="/movies/new/">New movies</Link></li>
        </ul>
    </div>
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />}></Route>
            <Route path="/movies/new" element={<h1>NewMovie</h1>}></Route>
            <Route path="/movies" element={<h1>List Movies</h1>}></Route>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")

);