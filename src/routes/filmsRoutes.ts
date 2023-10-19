import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    // logica de lo que quiero hacer/devolver

    return res.send('GET FILMS')
})

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