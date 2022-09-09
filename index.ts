import express, { Express, Request, Response } from "express"
import cors from "cors"

const app: Express = express()
app.use(cors())

interface typeMovies {
   name: string,
   desc: string,
   rating: number
}

app.get("/getWorks", (req: Request ,res: Response) => {
   const movies: typeMovies = {
      name: "Batman",
      desc: "Filme do morcego",
      rating: 5
   }

   res.send(movies)
})

app.listen(8001, () => console.log("⚡️ Server is runing!"))