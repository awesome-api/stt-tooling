const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

var speechToText = new SpeechToTextV1({
  iam_apikey: '{apikey}',
  url: '{url}'
});

var readStream = fs.createReadStream('audio-file1.flac');

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
    console.log(JSON.stringify(speechRecognitionResults, null, 2));
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/api/recognize', (req, res) => {
  res.send({ output: 'RECOGNIZING FILE' });
});
