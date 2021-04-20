import './style.scss'

const THREE = require('@/assets/scripts/three')

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

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.querySelector('.all-graduation').appendChild(renderer.domElement)

      // const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

      const points = []
      points.push(new THREE.Vector3(-10, 0, 0))
      points.push(new THREE.Vector3(0, 10, 0))
      points.push(new THREE.Vector3(10, 0, 0))
      points.push(new THREE.Vector3(0, 0, 10))
      const geometry = new THREE.BufferGeometry().setFromPoints(points)

      const cube = new THREE.Mesh(geometry, material)
      const line = new THREE.Line(geometry, material)
      scene.add(cube)
      scene.add(line)

      camera.position.z = 5

      function animate() {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
      }
      animate()
    })
  },
}
