import './style.scss'
export default {
  name: 'Graduation',
  mounted() {
    // eslint-disable-next-line no-console
    console.log('mounted')
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      const allGraduation = document.querySelectorAll('.graduation')
      let delay = 0
      for (let index = 0; index < allGraduation.length; index++) {
        allGraduation[index].style.animationDelay = delay + 's'
        delay += 1.5
      }
    })
  },
}
