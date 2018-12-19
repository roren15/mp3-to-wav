'use strict'

const fs = require('fs-extra')
const path = require('path')

module.exports = {

  isArray(obj) {
    return obj && Object.prototype.toString.call(obj) === '[object Array]'
  },

  isObj(obj) {
    return obj && Object.prototype.toString.call(obj) === '[object Object]'
  },

  /**
   * check not empty for object
   * @param obj
   * @returns {boolean}
   */
  objectNotEmpty(obj) {

    if (this.isObj(obj)) {
      for (let key in obj) {
        return true
      }
      return false
    } else {
      return true
    }
  },

  /**
   * check not empty for array
   * @param array
   * @returns {boolean}
   */
  arrayNotEmpty(array) {

    if (this.isArray()) {
      return array.length > 0
    } else {
      return true
    }
  },

  /**
   * 非空(有东西)判断 ps:为空情况：空字符串'',空数组[],空对象{},undefined,null,NaN
   * @param val
   * @returns {*|boolean}
   */
  judgeNotNull(val) {
    return (val || val === 0 || val === false) && this.objectNotEmpty(val) && this.arrayNotEmpty(val)
  },

  getType(obj) {
    //tostring会返回对应不同的标签的构造函数
    var toString = Object.prototype.toString;
    var map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object AsyncFunction]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
    };
    var val = toString.call(obj)
    return map[val];
  },

  /**
   * use reflection tech to check algorithm name exists
   * @param func_name
   * @param target_object
   * @returns {boolean}
   */
  checkFuncExists(func_name, target_object) {

    if (this.judgeNotNull(func_name) && this.judgeNotNull(target_object)) {
      const func = target_object[func_name]
      return this.getType(func) === 'function'
    } else {
      return false
    }
  },

  /**
   * detect null arguments
   * @param args
   * @returns {boolean}
   */
  checkArgsNotNull(...args) {

    let res = true

    args.forEach(async val => {
      if (!this.judgeNotNull(val)) {
        res = false
        return false
      }
    })
    return res
  },

  readFile(filePath) {

    if (filePath && fs.pathExistsSync(filePath)) {
      return fs.readFileSync(filePath)
    }
  },

  splitFilename(path) {

    let split = path.split('/')
    return split.slice(-1)
  },

  splitFileDir(path) {

    let split = path.split('/')
    split.splice(-1, 1)
    return split.join('/')
  },

  /**
   * ensure dir splitting last former "/" path
   * @param dirPath
   */
  ensurePathExists(dirPath) {

    if (!dirPath) return
    let splitDirPath = dirPath.split('/')
    if (splitDirPath.length > 1) {
      splitDirPath.pop()
      splitDirPath = splitDirPath.join('/')
    }
    if (!fs.pathExistsSync(splitDirPath)) {
      fs.mkdirpSync(splitDirPath)
    }
  },

  saveToPath(fullPath, data) {

    this.ensurePathExists(fullPath)
    fs.writeFileSync(fullPath, data)
  },

  generateRandomNum(num = 10) {

    // 方法1
    let res = 0
    for (let i = 1; i <= num; i++) {
      res += Math.round(Math.random() * num) * Math.pow(num, i);
    }
    return res
    // 方法2
    // return Math.random().toString().slice(-num)
  },

  generateTimestampRandom(splitDirPathFlag = '-') {
    return new Date().getTime() + splitDirPathFlag + this.generateRandomNum(6)
  },
}