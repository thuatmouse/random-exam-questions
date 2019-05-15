import Api from '@/Services/Api'

export default {
  hello (data) {
    return Api().post('hello', data)
  }
}
