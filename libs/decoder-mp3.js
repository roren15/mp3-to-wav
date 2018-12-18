'use strict'

const createBuffer = require('audio-buffer-from')
const toArrayBuffer = require('to-array-buffer')
const toBuffer = require('typedarray-to-buffer')
const isBuffer = require('is-buffer')
const AV = require('av')
require('mp3')

module.exports = (buffer) => {

  if (!isBuffer(buffer)) {
    if (ArrayBuffer.isView(buffer)) buffer = toBuffer(buffer)
    else {
      buffer = Buffer.from(toArrayBuffer(buffer))
    }
  }

  return new Promise((resolve, reject) => {

    let asset = AV.Asset.fromBuffer(buffer)

    asset.on('error', err => {
      reject(err)
    })

    asset.decodeToBuffer((buffer) => {
      let data = createBuffer(buffer, {
        channels: asset.format.channelsPerFrame,
        sampleRate: asset.format.sampleRate
      })
      resolve(data)
    })
  })
}
