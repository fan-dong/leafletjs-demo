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
    // Leaflet 图层
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.tileLayer
      .wms(
        "http://10.1.20.206:6080/arcgis/services/hb/pm3/MapServer/WMSServer?request=GetCapabilities&service=WMS",
        {
          layers: "Export_Output66",
          format: "image/png"
          // transparent: true,
          // attribution: "Weather data © 2012 IEM Nexrad"
        }
      )
      .addTo(map);
    // let url = "http://10.1.20.206:6080/arcgis/rest/services/hb/pm3/MapServer";
    // L.esri.basemapLayer('Gray').addTo(map);

    var url =
      "https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/World/MODIS/ImageServer";

    var busStops = L.esri
      .featureLayer({
        url: url
      })
      .addTo(map);

    L.esri.Vector.layer(url).addTo(map);
    var envLayer = L.esri.dynamicMapLayer({
      url: url,
      opacity: 0.8,
      layers: [0]
    });
    map.addLayer(envLayer);

    L.esri.Cluster.featureLayer({
      url: "http://10.1.20.206:6080/arcgis/rest/services/hb/pm3/MapServer"
    }).addTo(map);

    L.esri.tiledMapLayer({ url: url }).addTo(map);

    L.esri.basemapLayer("Streets").addTo(map);
    L.esri
      .featureLayer({
        url: url
      })
      .addTo(map);

    //天地图  地形
    L.tileLayer(
      "http://t{s}.tianditu.cn/ter_w/wmts?service=wmts&request=GetTile&;version=1.0.0&LAYER=ter&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles",
      {
        subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"]
      }
    ).addTo(map);

    // 天地图  矢量
    this.tileLayerVEC =  L.tileLayer("http://t{s}.tianditu.cn/vec_w/wmts?service=wmts&request=GetTile&;version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles", {
      subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"]
    }).addTo(this.map);

    // 天地图 影像
    this.tileLayerIMG =  L.tileLayer("http://t{s}.tianditu.cn/img_w/wmts?service=wmts&request=GetTile&;version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles", {
    subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"]
    }).addTo(this.map);



    // 天地图 标注
    if(this.tileLayerCIA != ""){
    this.tileLayerCIA.remove(this.map)
    }
    this.tileLayerCIA = L.tileLayer("http://t{s}.tianditu.cn/cia_w/wmts?service=wmts&request=GetTile&;version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles", {
    subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"]
    }).addTo(this.map);










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

