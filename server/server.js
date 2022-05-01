import express from "express";
import path from "path";

const app = express();

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

app.get("/api/movies", (req, res, next) => {
    res.json(MOVIES);
});

app.use(express.static(path.resolve("..", "client", "dist")));
app.use((req, res) => {
    res.sendFile(path.resolve("..", "client", "dist", "index.html"));
})

const server = app.listen(3000, () => {
    console.log(`Started server on http://localhost:${server.address().port}`);
});
