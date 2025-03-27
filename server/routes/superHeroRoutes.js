import { Router } from "express";

const router = Router();

// get a particular superhero
router.get('/:heroId', async function (req, res) {
    const id = req.params.heroId
    console.log(req.params)
    try {
            res.send("got a hero name")
        }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


// list all superheros
router.get('/', async function (req, res) {
    try {
        res.send("got all heroes")
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// create a new superhero
router.post('/', async (req, res) => {
    console.log('Incoming POST on /api/superheroes with data')
    console.log(req.body)

    if (req.body) {       
        return res.send("created a hero")
    }
    else {
        return res.sendStatus(400)
    }
})

export default router