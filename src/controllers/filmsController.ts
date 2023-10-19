import { Request, Response } from "express"



const getFilms = (req:Request, res:Response) => {
    // logica de lo que quiero hacer/devolver

    return res.send('GET FILMS')
}

const createFilm = (req:Request, res:Response) => {
    // logica para crear peliculas
    console.log('create');

    return res.send('CREATE FILM')
}

export {getFilms, createFilm}