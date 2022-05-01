import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();

const MOVIES = [
    {
        title: "Harry Potter og de vise sten - from server",
        year: "1999",
        plot: "Harry Potter og vennene hans finner en vis sten."
    },
    {
        title: "Humlesnurr og de lange beina - from server",
        year: "1877",
        plot: "Humlesnurr finner ut at han har lange bein."
    }
]

app.use(bodyParser.json());

app.get("/api/movies", (req, res, next) => {
    res.json(MOVIES);
});

app.post("/api/movies", (req, res) => {
    const {title, year, plot} = req.body;
    MOVIES.push({title, year, plot});
    res.sendStatus(200);

});

app.use(express.static(path.resolve("..", "client", "dist")));
app.use((req, res) => {
    res.sendFile(path.resolve("..", "client", "dist", "index.html"));
})

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Startet nodemon on http://localhost:${server.address().port}`);
});
