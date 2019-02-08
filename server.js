const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();
app.use(cors());
app.use(fileUpload());
const port = process.env.PORT || 4000;
require('dotenv').config(); // fetches environment vars from '.env'

var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

var speechToText = new SpeechToTextV1({
  iam_apikey: process.env.API_KEY,
  url: process.env.API_URL
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/api/recognize/proto', (req, res) => {
  // console.log('req: ' + JSON.stringify(req));
  let uploadedFile = req.files.file;
  console.log('file name: ' + uploadedFile.name);
  console.log('request: ' + req);
  var readStream = fs.createReadStream('audio-file.flac');

  var recognizeParams = {
    audio: readStream,
    content_type: 'audio/flac',
    timestamps: true,
    word_alternatives_threshold: 0.9,
    keywords: ['colorado', 'tornado', 'tornadoes'],
    keywords_threshold: 0.5
  };

  speechToText.recognize(recognizeParams, function(error, speechRecognitionResults) {
    if (error) {
      console.log(error);
    } else {
      // console.log(JSON.stringify(speechRecognitionResults, null, 2));
      res.send({ results: speechRecognitionResults });
    }
  });
});

//TODO: remove this endpoint
app.post('/api/recognize', (req, res, next) => {
  let uploadFile = req.files.file
  const fileName = req.files.file.name
  console.log('fileName: ' + fileName);
  // uploadFile.mv(
  //   `${__dirname}/public/files/${fileName}`,
  //   function (err) {
  //     if (err) {
  //       return res.status(500).send(err)
  //     }

  //     res.json({
  //       file: `public/${req.files.file.name}`,
  //     })
  //   },
  // )
})
