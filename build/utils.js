const path = require('path')

exports.assetsPath = (pathName) => {
  return path.posix.join('static', pathName)
}

exports.resolve = (dir) => {
  return path.join(__dirname, './../', dir)
}
