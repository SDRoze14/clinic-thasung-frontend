let domain_sorts = [
  { value: 'updatedAt', label: 'Latest update' },
  { value: 'latestScan', label: 'Scan date' },
]

let user_status = [
  { value: undefined, label: 'All' },
  { value: true, label: 'Active' },
]

let layouts = [
  {
    img: '/images/web-layout-bottom.svg',
    value: 'bottom',
  },
  {
    img: '/images/web-layout-top.svg',
    value: 'top',
  },
  {
    img: '/images/web-layout-overlay.svg',
    value: 'pop-up',
  },
]

let themes = [
  {
    img: '/images/theme-white.png',
    title: 'White',
    des: 'Backgroud color is white',
    value: 'white',
  },
  {
    img: '/images/theme-black.png',
    title: 'Dark',
    des: 'Backgroud color is dark',
    value: 'dark',
  },
  {
    img: '/images/theme-gsb.png',
    title: 'GSB',
    des: 'Backgroud color is GSB',
    value: 'gsb',
  },
]

let languages = [
  { key: 'th', label: 'Thai' },
  { key: 'en', label: 'English' },
  // { key: 'jp', label: 'JP - Japan' },
  // { key: 'cn', label: 'CN - China' },
]

let cookie_expiry = [
  { value: 'SESSION', label: 'Session' },
  { value: '0 Day(s)', label: '0 Day(s)' },
  { value: '1 Day(s)', label: '1 Day(s)' },
  { value: '1 Month(s)', label: '1 Month(s)' },
  { value: '1 Year(s)', label: '1 Year(s)' },
  { value: '2 Year(s)', label: '2 Year(s)' },
]

let cookie_type = [
  { value: 'HTTP', label: 'HTTP' },
  { value: 'HTML', label: 'HTML' },
  { value: 'Secure', label: 'Secure' },
]

import dayjs from 'dayjs'

export default ({ app }, inject) => {
  inject('model', {
    domain_sorts: domain_sorts,
    domainSorts: (value) => {
      let o = domain_sorts.find((e) => e.value === value)
      return o ? o : {}
    },
    user_status: user_status,
    userStatus: (value) => {
      let o = user_status.find((e) => e.value === value)
      return o ? o : {}
    },
    cookie_expiry: cookie_expiry,
    cookieExpiry: (value) => {
      let o = cookie_expiry.find((e) => e.value === value)
      return o ? o : {}
    },
    cookie_type: cookie_type,
    cookieType: (value) => {
      let o = cookie_type.find((e) => e.value === value)
      return o ? o : {}
    },
    validDomain: (domain) => {
      var re = new RegExp(
        /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})(\/[a-z0-9-+\/]+)?/
      )
      return domain.match(re)
    },
    validateEmail: (email) => {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      )
        return true
      return false
    },
    layouts: layouts,
    layout: (value) => {
      let o = layouts.find((e) => e.value === value)
      return o ? o : {}
    },
    themes: themes,
    languages: languages,
    language: (key) => {
      let o = languages.find((e) => e.key === key)
      return o ? o : {}
    },
    digit: (num, size) => {
      var s = String(num)
      while (s.length < (size || 2)) {
        s = '0' + s
      }
      return s
    },
    getDate: (date) => {
      return dayjs(date).format('DD/MM/YYYY')
    },
    getDateTime: (date) => {
      return dayjs(date).format('DD/MM/YYYY | HH:mm')
    },
    getFormatISO: (date) => {
      return dayjs(date).format('YYYY-MM-DDTHH:mm:ss[Z]')
    }
  })
}
