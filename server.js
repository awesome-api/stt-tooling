const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();
const util = require('util');
app.use(cors());
app.use(fileUpload());
const port = process.env.PORT || 4000;
require('dotenv').config(); // fetches environment vars from '.env'

var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');

var speechToText = new SpeechToTextV1({
  iam_apikey: process.env.API_KEY,
  url: process.env.API_URL
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/api/recognize', (req, res, next) => {
  let uploadFile = req.files.file
  let keywordsArray = JSON.parse(req.body.keywords);
  if (keywordsArray.length === 0) {
    keywordsArray = [''];
  }

  var recognizeParams = {
    audio: uploadFile.data,
    content_type: uploadFile.mimetype,
    timestamps: true,
    word_alternatives_threshold: 0.9,
    keywords: keywordsArray,
    keywords_threshold: 0.5
  };

  speechToText.recognize(recognizeParams, function(error, results) {
    if (error) {
      console.log(error);
    } else {
      // console.log('results:');
      // console.log(JSON.stringify(results, null, 2));
      res.send({ results });
    }
  });
})
