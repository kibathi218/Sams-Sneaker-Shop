const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is crazy!'))

router.post('/reviews', controllers.createReview)

router.get('/reviews', controllers.getAllReviews)

router.get('/reviews/:id', controllers.getReviewById)

router.put('/reviews/:id', controllers.updateReview)
router.delete('/reviews/:id', controllers.deleteReview)



module.exports = router;