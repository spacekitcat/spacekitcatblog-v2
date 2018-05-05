var express = require('express');
var router = express.Router();
var os = require('os');

let hacker_text_config = {
  targets: [
    {
      htmlId: 'hackertextone',
      text: 'spacekitcat',

      renderer: {
        strategy: 'SinePhaseFrameRenderStrategy'
      },
      framerate: 6,
      rows: 16
    },
    {
      htmlId: 'hackertexttwo',
      text: 'spacekitcat',

      renderer: {
        strategy: 'RandomizedFrameRenderStrategy'
      },
      framerate: 3,
      rows: 4
    },
    {
      htmlId: 'hackertextthree',
      text: 'spacekitcat',

      renderer: {
        strategy: 'CoSinePhaseFrameRenderStrategy'
      },
      framerate: 6,
      rows: 16
    }
  ]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'S P A C E K I T C A T',
    servername: os.hostname(),
    errstatus: 'EKEKEKEK',
    hackertextconfig: JSON.stringify(hacker_text_config)
  });
});

module.exports = router;
