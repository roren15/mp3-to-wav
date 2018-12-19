'use strict'

const path = require('path')
const Mp32Wav = require('../index.js')

new Mp32Wav(path.join(__dirname, 'test-mono.mp3')).exec()
new Mp32Wav(path.join(__dirname, 'test-stero-2.mp3'), __dirname).exec()