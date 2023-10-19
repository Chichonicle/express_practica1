import { Router } from "express";
import { createFilm, deleteFilmById, getFilms, updateFilmById } from "../controllers/filmsController";

const router = Router()

router.get('/', getFilms)
router.post('/', createFilm)

router.put('/:id', updateFilmById)

router.delete('/:id',deleteFilmById )


export { router }