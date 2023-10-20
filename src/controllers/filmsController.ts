import { Request, Response } from "express"



const getFilms = (req:Request, res:Response) => {
    // logica de lo que quiero hacer/devolver

    return res.send('GET FILMS')
}

const createFilm = (req:Request, res:Response) => {
    // logica para crear peliculas
    console.log('create');
    console.log(req.body);
    

    return res.send('CREATE FILM')
}

const updateFilmById = (req: Request, res: Response) => {
    // logica para actualizar peliculas
    // console.log(req.params.id);

    const filmId = req.params.id
    

    return res.send('UPDATE FILM ' + filmId)
}

const deleteFilmById = (req:Request, res:Response) => {
    // logica para eliminar peliculas

    const filmId = req.params.id

    return res.send('DELETE FILM ' + filmId)
}

const getFilmById = (req:Request,res:Response) =>{

    const filmId = req.params.id

    return res.send(`GET FILM WITH id: ${filmId}`)
}

export {getFilms, createFilm, updateFilmById, deleteFilmById, getFilmById}