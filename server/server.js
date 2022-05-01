import express from "express";

const app = express();

app.get("/api/movies", (req, res, next) => {
    res.json({ title: "Hello mr.awesome" });
});

const server = app.listen(3000, () => {
    console.log(`Started server on http://localhost:${server.address().port}`);
});
