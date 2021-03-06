const express       = require('express'),
  router            = express.Router()
  mainController    = require('./controllers/main.controller'),
  eventsController  = require('./controllers/events.controller');


router.get('/',       mainController.showHome);
router.get('/:query', eventsController.showTimestamp);


module.exports = router;
