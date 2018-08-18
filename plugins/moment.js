import moment from "moment"

module.exports = {
  moment(locale, date) {
    moment.locale(locale)
    return moment(date).format("LL")
  }
}
