# mp3-to-wav

Transfer mp3 file to wav type, for both audio type mono or stero

## 1. install

```bash
$ npm install --save mp3-to-wav
```

## 2. usage

```javascript
const Mp32Wav = require('mp3-to-wav')
new Mp32Wav('mp3-file-path-to-transfer','wav-file-saving-dir').exec()
// will produce wav file on providing dir
```