import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/getWorks", (req, res) => {
    const movies = {
        name: "Batman",
        desc: "Filme do morcego",
        rating: 5
    };
    res.send(movies);
});
app.listen(8001, () => console.log("⚡️ Server is runing!"));
