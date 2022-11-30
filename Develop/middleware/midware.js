const router = require('express').Router();
const apiRoutes = require('./notesRoutes');

router.use('/notes', apiRoutes);

module.exports = router;