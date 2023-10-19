import { Router } from "express";
import { createFilm, getFilms } from "../controllers/filmsController";

const router = Router()

router.get('/', getFilms)
router.post('/', createFilm)

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