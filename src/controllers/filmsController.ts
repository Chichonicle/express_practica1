import { Request, Response } from "express"



const getFilms = (req:Request, res:Response) => {
    // logica de lo que quiero hacer/devolver

    return res.send('GET FILMS')
}

export {getFilms}