<template>
  <div class="map">
    <div class="mapBox" id="mapBox"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let map = L.map("mapBox", {
      attributionControl: false,
      zoomControl: false,
      center: [29.791133, 121.992123],
      zoom: 13
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  }
};
</script>

<style lang="stylus" scoped>
.map
  width 100%
  height 100%
  .mapBox
    width 100%
    height 100%
</style>

