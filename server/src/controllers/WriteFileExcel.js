const path = require('path')

const excel = require('excel4node')

module.exports = {
  hello (req, res) {
    var wb = new excel.Workbook()

    var ws = wb.addWorksheet('Đề 1')

    let dirname = path.dirname(require.main.filename)
    if (dirname.indexOf('\\src') !== -1) dirname = dirname.replace('\\src', '')

    var normarStyle = (name, bold, size, wrapText, horizontal) => {
      let myStyle = {
        font: {},
        alignment: {}
      }
      myStyle.font.name = name
      myStyle.font.color = '#000000'
      myStyle.font.bold = bold || false
      myStyle.font.size = size || 11

      if (wrapText) myStyle.alignment.wrapText = true
      if (horizontal) myStyle.alignment.horizontal = horizontal

      return wb.createStyle(myStyle)
    }

    var normarStyleWithBorder = wb.createStyle({
      border: {
        left: {
          style: 'medium',
          color: 'black'
        },
        right: {
          style: 'medium',
          color: 'black'
        },
        top: {
          style: 'medium',
          color: 'black'
        },
        bottom: {
          style: 'medium',
          color: 'black'
        }
      }
    })
    ws.column(1).setWidth(8)

    ws.column(2).setWidth(16)
    ws.column(3).setWidth(25)
    ws.column(4).setWidth(30)

    // ws.cell(startRow, startColumn, [[endRow, endColumn], isMerged]);
    ws.cell(1, 1, 1, 3, true).string('TRƯỜNG CAO ĐẲNG CƠ ĐIỆN').style(normarStyle('Times New Roman', true, 13))
    ws.cell(2, 1, 2, 3, true).string('\tVÀ XÂY DỰNG BẮC NINH').style(normarStyle('Times New Roman', true, 13))

    ws.cell(1, 4, 2, 4, true).string('ĐỀ KIỂM TRA KẾT THÚC MÔN HỌC (MÔ-ĐUN)').style(normarStyle('Times New Roman', true, 13, true, 'center'))

    console.log('line 58:', normarStyleWithBorder)
    wb.write(dirname + '/public/export/' + Date.now() + '.xlsx', (error, stats) => {
      console.log('line 60:', error, stats)
    })

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
