<template>
  <div id='upload-file'>
    <!-- <form id='frmUploader' enctype='multipart/form-data' method='post'>
      <input type='file' name='randomFile' multiple />
      <input type='submit' name='submit' id='btnSubmit' value='Upload' />
    </form>
    <button @click='clickMe'>TEST</button> -->
    <!-- <el-upload
      class='upload-demo'
      ref='upload'
      name='randomFile'
      action='http://localhost:8081/uploadFile'
      :on-success='uploadFileSuccess'
      :auto-upload='false'>
      <el-button slot='trigger' size='small' type='primary'>select file</el-button>
      <el-button style='margin-left: 10px;' size='small' type='success' @click='submitUpload'>upload to server</el-button>
      <div class='el-upload__tip' slot='tip'>jpg/png files with a size less than 500kb</div>
    </el-upload>

    <button @click='test'>Test file</button> -->
    <div style="text-align: left"><a @click="downloadFile()" style="text-decoration: underline; cursor: pointer">Download file</a></div>
    <br/>
    <input type='file' id='fileUpload' />
    <hr />
    <el-button size="small" type="success" @click="text()">Upload File&nbsp;<i class="el-icon-upload el-icon-right"></i></el-button>
    <hr />
    <div id='dvExcel'></div>

    <div :is="currentView" :data="data"></div>
  </div>
</template>

<script>
import questions from './Questions'

function RandomX(e) {
  return Math.floor(Math.random() * e.length)
}

export default {
  name: 'uploadFiles',
  components: { questions },
  data() {
    return {
      action: `${window.location.protocol}//${window.location.hostname}:8081/getFile/`,
      baseUrl: `${window.location.protocol}//${window.location.hostname}:8081/getFile/`,
      currentView: '',
      data: {
        de1: [],
        de2: [],
        de3: []
      }
    }
  },

  methods: {
    downloadFile () {
      window.location = this.action +  'storage/default.xlsx'
    },
    ProcessExcel (data) {
      // Read the Excel File data.
      var workbook = XLSX.read(data, {
        type: 'binary'
      })

      // Fetch the name of First Sheet.
      var firstSheet = workbook.SheetNames[0]

      // Read all rows from First Sheet into an JSON array.
      var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet])
      var row = workbook.Sheets[firstSheet]
      excelRows.splice(0, 7)
      var lst = []
      try {
        delete row['!ref']
      } catch (error) {

      }
      for (var i = 1; i < 11; i++) {
        delete row['A' + i]
        delete row['B' + i]
        delete row['C' + i]
      }
      var f // flag check D/A
      for (let key in row) {

        if (key.indexOf('E') >= 0 || key.indexOf('D') >= 0) {
          delete row[key]
        }
        if (key.indexOf('A') >= 0) {
          var k = {}
          k.s = row[key].h
          lst.push(k)
          f = 0
        }
        if (key.indexOf('B') >= 0) {
          lst[lst.length - 1].q = ''
          lst[lst.length - 1].q = row[key].v
          f = 1
          lst[lst.length - 1].A = []// create list d/a
        }
        if (key.indexOf('C') >= 0) {
          if (f == 1) {
            lst[lst.length - 1].A.push(row[key].v)
          }
        }
      }
      console.log(lst)
      var a = []
      var b = []
      var c = []
      var d = []
      for (var i = 0; i < lst.length; i++) {
        if (lst[i].s.indexOf('M.VKT') == -1) {
          delete lst[i]
        } else if (i <= 39) {
          a.push(lst[i])
        } else if (39 < i && i <= 71) {
          b.push(lst[i])
        } else if (71 < i && i <= 93) {
          c.push(lst[i])
        } else if (93 < i && i < lst.length) {
          d.push(lst[i])
        }
      }
      var de1 = []
      var de2 = []
      var de3 = []
      for (let k = 0; k < 3; k++) {
        let de = []
        for (let i = 0; i < 8; i++) {
          if (i < 2) {
            let x = RandomX(d)
            de.push(d[x])
            d.splice(x, 1)
          }
          if (i < 4) {
            let x = RandomX(c)
            de.push(c[x])
            c.splice(x, 1)
          }
          if (i < 6) {
            let x = RandomX(b)
            de.push(b[x])
            b.splice(x, 1)
          }
          if (i < 8) {
            let x = RandomX(a)
            de.push(a[x])
            a.splice(x, 1)
          }
        }
        k === 0 ? de1 = de : k === 1 ? de2 = de : k === 2 ? de3 = de : console.log('het')
      }
      this.data.de1 = de1
      this.data.de2 = de2
      this.data.de3 = de3
      console.log(de1)
      console.log(de2)
      console.log(de3)
      this.currentView = 'questions'
    },
    text () {
      var self = this
      // Reference the FileUpload element.
      var fileUpload = $('#fileUpload')[0]

      // Validate whether File is valid Excel file.
      // var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/

      // if (regex.test(fileUpload.value.toLowerCase())) {
      if (true) {
        if (typeof (FileReader) !== 'undefined') {
          var reader = new FileReader()

          // For Browsers other than IE.
          if (reader.readAsBinaryString) {
            reader.onload = function (e) {
              self.ProcessExcel(e.target.result)
            }
            reader.readAsBinaryString(fileUpload.files[0])
          } else {
            // For IE Browser.
            reader.onload = function (e) {
              var data = ''
              var bytes = new Uint8Array(e.target.result)
              for (var i = 0; i < bytes.byteLength; i++) {
                data += String.fromCharCode(bytes[i])
              }
              self.ProcessExcel(data)
            }
            reader.readAsArrayBuffer(fileUpload.files[0])
          }
        } else {
          alert('This browser does not support HTML5.')
        }
      } else {
        alert('Please upload a valid Excel file.')
      }
    }
  }
}
</script>

<style scoped>
#upload-file {
  padding: 20px
}
</style>
