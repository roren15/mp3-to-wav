# mp3-to-wav

Convert `mp3` audio data to `wav` type, for both audio type mono and stero

[![npm install mp3-to-wav](https://nodei.co/npm/mp3-to-wav.png?mini=true)](https://www.npmjs.com/package/mp3-to-wav)

## 1. Install

```bash
$ npm install --save mp3-to-wav
```

## 2. Usage

```javascript
const Mp32Wav = require('mp3-to-wav')
new Mp32Wav('mp3 file absolute dir / .mp3 file').exec()
// will produce wav file on provided dir
```

## 3. Api

### Init

```javascript
const Mp32Wav = require('mp3-to-wav')
const mp32Wav = new Mp32Wav('mp3 file dir / .mp3 file','wav file saving dir')
```

|arguments|required|description|
|:------:|:------:|------|
|mp3_file_path|true|absolute path to for mp3 file|
|wav_file_saving_dir|false|default to same with mp3 file|

### Function

#### mp32Wav.exec()

convert mp3 file to wav file

#### mp32Wav.decodeMp3()

decode mp3 file

|arguments|required|description|
|:------:|:------:|------|
|mp3_file_path|true|absolute path to for mp3 file|

#### mp32Wav.saveForWav()

encode wav file and saving

|arguments|required|description|
|:------:|:------:|------|
|buffer|true|pure voice data wrapped by array|
|savePath|true|saving path|
|filename|false|filename without postfix|
|sampleRate|true|sampleRate|
|channels|true|channels number|
|float|false|saving type inside|