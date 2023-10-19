import express from "express";

const app = express()

const PORT = process.env.PORT || 4000

app.get('/films', (req, res) => {
    // logica de lo que quiero hacer/devolver

    return res.send('GET FILMS')
})

app.post('/films', (req, res) => {
    // logica para crear peliculas
    console.log('create');

    return res.send('CREATE FILM')
})

app.put('/films/:id', (req, res) => {
    // logica para actualizar peliculas
    // console.log(req.params.id);

    const filmId = req.params.id
    

    return res.send('UPDATE FILM' + filmId)
})

app.delete('/films/:id', (req, res) => {
    // logica para eliminar peliculas

    const filmId = req.params.id

    return res.send('DELETE FILM' + filmId)
})

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
})