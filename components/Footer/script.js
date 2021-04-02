import './style.scss'

export default {
  data() {
    return {
      year: Number,
    }
  },
  created() {
    this.year = new Date().getFullYear()
  },
}
