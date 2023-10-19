import { Router } from "express";
import { getFilms } from "../controllers/filmsController";

const router = Router()

router.get('/', getFilms)

router.post('/', (req, res) => {
    // logica para crear peliculas
    console.log('create');

    return res.send('CREATE FILM')
})

router.put('/:id', (req, res) => {
    // logica para actualizar peliculas
    // console.log(req.params.id);

    const filmId = req.params.id
    

    return res.send('UPDATE FILM ' + filmId)
})

router.delete('/:id', (req, res) => {
    // logica para eliminar peliculas

    const filmId = req.params.id

    return res.send('DELETE FILM ' + filmId)
})


export { router }