import express from "express";
import { router as routerFilms } from "./routes/filmsRoutes";
import { AppDataSource } from "./db";

const app = express()

const PORT = process.env.PORT || 4000

//middleware
app.use(express.json())

AppDataSource.initialize()
    .then(() => {
    console.log('Database connected');
    })
    .catch(error => {
    console.log(error)
    })

app.use('/films', routerFilms)

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
})