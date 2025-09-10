// Check if OpenLayers is loaded successfully
if (typeof ol === 'undefined') {
  console.error('OpenLayers library failed to load');
}

// Create map using OpenLayers 7 API
var map = new ol.Map({
  target: 'map',
  layers: [
    // Use OSM as base map
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([114.314521, 22.543061]),
    zoom: 10
  })
});

// Try to add WMS layers (if GeoServer is available)
// 如果GeoServer使用的不是默认的8080端口，请修改下面的URL
const GEOSERVER_PORT = '8080'; // 如果需要，修改为GeoServer实际使用的端口
try {
  var guojie = new ol.layer.Image({
    title: '国界',
    source: new ol.source.ImageWMS({
      url: `http://localhost:${GEOSERVER_PORT}/geoserver/web_map/wms`,
      params: {'LAYERS': 'web_map:guojie', 'TILED': true},
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: true
  });
  map.addLayer(guojie);
} catch (e) {
  console.warn('Failed to load GeoServer layer. The service might not be running or configured correctly:', e);
}

console.log('Map initialization completed');
