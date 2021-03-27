import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      isLoading: this.show,
    }
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    doAjax() {
      this.isLoading = true
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false
        console.log('GROS ETRON ENORME')
      }, 5000)
    },
    onCancel() {
      console.log('User cancelled the loader.')
    },
  },
}
