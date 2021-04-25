let basePath = '/api/v1'

let headerJson = {
  'Content-Type': 'application/json',
}
let headerAuth = {
  Authorization: true,
}
let headerAuthJson = {
  Authorization: true,
  'Content-Type': 'application/json',
}

export default ({app}, inject) => {
  inject('api', {
    login: (form) => {
      return app.$axios.post(`${basePath}/login`, form, {
        headers: headerJson
      })
    },
    createUser: (form) => {
      return app.$axios.post(`${basePath}/newUser`, from, {
        headers: headerAuthJson
      })
    },
    logout: () => {
      return app.$axios.get(`${basePath}/logout`, {
        headers: headerAuthJson
      })
    },
    me: () => {
      return app.$axios.get(`${basePath}/me`, {
        headers: headerAuthJson
      })
    },

    // Medical Record
    getListMedicalRecord: () => {

    }
  })
}