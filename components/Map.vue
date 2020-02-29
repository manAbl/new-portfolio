<template>
  <div id="map" />
</template>
<script>
export default {
  name: 'Map',
  data: () => ({
    map: undefined
  }),
  mounted() {
    this.map = this.createMap()
    this.map.resize()
  },
  methods: {
    createMap() {
      const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
      mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN
      // eslint-disable-next-line
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        // interactive: false,
        zoom: 3,
        center: [-74.32683702526107, 5.328455306471625]
      })

      this.addMapEvents(map)
      return map
    },
    addMapEvents(map) {
      const size = 200
      const pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        // eslint-disable-next-line
        onAdd: function() {
          const canvas = document.createElement('canvas')
          canvas.width = this.width
          canvas.height = this.height
          this.context = canvas.getContext('2d')
        },
        // eslint-disable-next-line
        render: function() {
          const duration = 1320
          const t = (performance.now() % duration) / duration
          const radius = (size / 2) * 0.3
          const outerRadius = (size / 2) * 0.7 * t + radius
          const context = this.context
          context.clearRect(0, 0, this.width, this.height)
          context.beginPath()
          context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
          )
          context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')'
          context.fill()
          context.beginPath()
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2)
          context.fillStyle = 'rgba(255, 100, 100, 1)'
          context.strokeStyle = 'white'
          context.lineWidth = 2 + 4 * (1 - t)
          context.fill()
          context.stroke()
          this.data = context.getImageData(0, 0, this.width, this.height).data
          map.triggerRepaint()
          return true
        }
      }

      map.on('load', function() {
        map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 4 })

        map.addLayer({
          id: 'points',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'Point',
              coordinates: [-75.56569, 6.25184]
            }
          },
          layout: {
            'icon-image': 'pulsing-dot'
          }
        })
      })
    }
  }
}
</script>
