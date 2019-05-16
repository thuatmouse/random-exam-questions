const path = require('path')

// const XLSX = require('xlsx')
// const readXlsxFile = require('read-excel-file/node')

module.exports = {
  hello (req, res) {
    res.send({
      message: `<h1>Hello ${req.body.name}. Have a nice day!</h1>`
    })
  },

  getFile (req, res) {
    let folderName = req.params.folderName
    let fileName = req.params.fileName
    let dirname = path.dirname(require.main.filename)
    if (dirname.indexOf('\\src') !== -1) dirname = dirname.replace('\\src', '')
    let fileUrl = `${dirname}\\${folderName}\\${fileName}`
    res.sendFile(fileUrl)

    // // File path.
    // readXlsxFile(fileUrl).then((rows) => {
    //   // `rows` is an array of rows
    //   // each row being an array of cells.
    //   let dataFilter = {}
    //   let currentCode = ''
    //   let lastAwnser = ''
    //   for (let i = 0, len = rows.length; i < len; i++) {
    //     let array = rows[i] || []
    //     for (let j = 0, len2 = array.length; j < len2; j++) {
    //       let value = array[j] || ''
    //       if (!value) continue
    //       if (typeof value === 'string' && (value.toLowerCase().indexOf('a.') === 0 || value.toLowerCase().indexOf('b.') === 0 || value.toLowerCase().indexOf('c.') === 0 || value.toLowerCase().indexOf('d.') === 0 || value.toLowerCase().indexOf('e.') === 0)) lastAwnser = value
    //     }
    //   }
    //   console.log('line 35:', lastAwnser)
    //   let endQuestion = false
    //   for (let i = 0, len = rows.length; i < len; i++) {
    //     let array = rows[i] || []
    //     for (let j = 0, len2 = array.length; j < len2; j++) {
    //       let value = array[j] || ''
    //       if (!value) continue
    //       if (typeof value === 'string' && value.indexOf(lastAwnser) !== -1) endQuestion = true
    //       if (typeof value === 'string' && value.toLowerCase().indexOf('m.vkt') !== -1) {
    //         dataFilter[value] = {
    //           question: '',
    //           questionsAnwser: [],
    //           point: 0,
    //           level: ''
    //         }
    //         currentCode = value
    //       } else if (dataFilter[currentCode]) {
    //         let key = 'question'
    //         if (typeof value === 'number') key = 'point'
    //         else if (typeof value === 'string' && value.toLowerCase().indexOf('bài') !== -1) key = 'level'
    //         else if (typeof value === 'string' && (value.toLowerCase().indexOf('a.') === 0 || value.toLowerCase().indexOf('b.') === 0 || value.toLowerCase().indexOf('c.') === 0 || value.toLowerCase().indexOf('d.') === 0 || value.toLowerCase().indexOf('e.') === 0)) key = 'questionsAnwser'

    //         if (key === 'questionsAnwser') dataFilter[currentCode][key].push(value)
    //         else dataFilter[currentCode][key] = value
    //       }
    //     }
    //     if (endQuestion) currentCode = ''
    //   }
    //   let dataMap = {}
    //   let dataForClient = {}

    //   // Math.random() * 10
    //   let totalQuestions = 10
    //   let randomQuestions = (data, level) => {
    //     if (level === 1) totalQuestions = 40
    //     else if (level === 2) totalQuestions = 30
    //     else if (level === 3) totalQuestions = 20
    //     else if (level === 4) totalQuestions = 10

    //     let randomIndex = Math.random() * totalQuestions

    //     console.log(level + ':', parseInt(randomIndex))
    //     return false
    //   }
    //   for (const key in dataFilter) {
    //     if (dataFilter.hasOwnProperty(key)) {
    //       let level = key.split('.')[2]
    //       if (dataMap[level] === undefined) dataMap[level] = []
    //       dataFilter[key].key = key
    //       dataMap[level].push(dataFilter[key])
    //     }
    //   }
    //   for (const key in dataMap) {
    //     if (dataMap.hasOwnProperty(key)) {
    //       dataForClient[key] = []
    //       randomQuestions(dataMap[key], key)
    //     }
    //   }
    //   console.log('line 71:', dataMap)
    // })
    // read from a file
    // const workbook = XLSX.readFile(fileUrl)
    // const sheet = workbook.SheetNames
    // const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[0]])
    // let dataFilter = {
    //   'M.VKT.1': {
    //     question: '',
    //     optionsAnwser: []
    //   }
    // }
    // let currentCode = ''
    // for (const key in data) {
    //   if (data.hasOwnProperty(key)) {
    //     const object = data[key]
    //     for (const key2 in object) {
    //       if (object.hasOwnProperty(key2)) {
    //         const item = object[key2] || ''
    //         if (!item) continue
    //         if (item.toString().toLowerCase().indexOf('m.vkt.1') !== -1) currentCode = 'M.VKT.1'
    //         else if (item.toString().toLowerCase().indexOf('m.vkt.2') !== -1) currentCode = 'M.VKT.2'
    //         else if (item.toString().toLowerCase().indexOf('m.vkt.2') !== -1) currentCode = 'M.VKT.3'
    //         else if (item.toString().toLowerCase().indexOf('m.vkt.2') !== -1) currentCode = 'M.VKT.4'
    //         if (dataFilter[currentCode]) dataFilter[currentCode].optionsAnwser.push(item)
    //       }
    //     }
    //   }
    // }
    // console.log('line 45:', dataFilter)
    // res.sendFile(fileUrl)
  },

  uploadFile (req, res, next) {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    let dirname = path.dirname(require.main.filename)
    if (dirname.indexOf('\\src') !== -1) dirname = dirname.replace('\\src', '')
    // let pathFile = `${dirname}\\${file.path}`
    res.send(file)
    // // read file excel
    // var obj = xlsx.parse(pathFile) // parses a file
    // if (obj && obj[0] && obj[0].data && obj[0].data.length) {
    //   // get property data in obj
    //   let data = obj[0].data
    //   let dataFilter = {
    //     'M.VKT.1': {
    //       question: '',
    //       optionsAnwser: []
    //     },
    //     'M.VKT.2': {
    //       question: '',
    //       optionsAnwser: []
    //     },
    //     'M.VKT.3': {
    //       question: '',
    //       optionsAnwser: []
    //     },
    //     'M.VKT.4': {
    //       question: '',
    //       optionsAnwser: []
    //     }
    //   }
    //   let filterRow = (data) => {
    //     let flag = false
    //     for (let i = 0; i < data.length; i++) {
    //       let item = data[i] + ''
    //       if (!item) continue
    //       if (item.toLowerCase().indexOf('m.vkt.1') !== -1) {
    //         data.splice(i, 1)
    //         flag = 1
    //         break
    //       } else if (item.toLowerCase().indexOf('m.vkt.2') !== -1) {
    //         data.splice(i, 1)
    //         flag = 2
    //         break
    //       } else if (item.toLowerCase().indexOf('m.vkt.3') !== -1) {
    //         data.splice(i, 1)
    //         flag = 3
    //         break
    //       } else if (item.toLowerCase().indexOf('m.vkt.4') !== -1) {
    //         data.splice(i, 1)
    //         flag = 4
    //         break
    //       }
    //     }
    //     if (flag) {
    //       dataFilter['M.VKT.' + flag].optionsAnwser.push(data)
    //     }
    //   }
    //   // filter row contain questions
    //   for (let i = 0, len = data.length; i < len; i++) {
    //     console.log('data[i]:', data[i])
    //     filterRow(data[i])
    //   }
    // } else {
    //   let tmpResult = {
    //     ok: false,
    //     code: 'File rỗng'
    //   }
    //   res.send(tmpResult)
    // }
  }
}
