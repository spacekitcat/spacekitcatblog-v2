var express = require('express');
var router = express.Router();
var os = require('os');

let hacker_text_config = {
  targets: [
    {
      htmlId: 'hackertexttwo',
      text: 'spacekitcat',

      renderer: {
        strategy: 'SinePhaseFrameRenderStrategy'
      },
      framerate: 6,
      rows: 20
    },
    {
      htmlId: 'hackertextthree',
      text: '01110011',

      renderer: {
        strategy: 'SinePhaseFrameRenderStrategy'
      },
      framerate: 2,
      rows: 3
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
