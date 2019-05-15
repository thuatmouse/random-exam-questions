const AuthenticationController = require('./controllers/AuthenticationController')
const path = require('path')
const multer = require('multer')
const uuidv4 = require('uuidv4')

const pathDirUploadTmp = './storage'
const Storage = multer.diskStorage({
  destination: pathDirUploadTmp,
  filename: function (req, file, callback) {
    let extname = path.extname(file.originalname).toLowerCase()
    callback(null, uuidv4() + extname)
  }
})
const upload = multer({ storage: Storage }) // Field name and max count

module.exports = (app) => {
  app.post('/hello', AuthenticationController.hello)
  app.get('/getFile/:folderName/:fileName', AuthenticationController.getFile)
  app.post('/uploadFile', upload.single('randomFile'), AuthenticationController.uploadFile)
}
