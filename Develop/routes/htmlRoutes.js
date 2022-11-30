
const path = require('path');
const router = require('express').Router();
// get request for landing page.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'C:\Users\Kevin\bootcamp\note-taking\Develop\routes\apiRoutes.js'));
});
//get request for note page.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'C:\Users\Kevin\bootcamp\note-taking\Develop\public\notes.html'));
});   
//brings you back to the homepage.
 router.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, 'C:\Users\Kevin\bootcamp\note-taking\Develop\routes\apiRoutes.js')));

module.exports = router;