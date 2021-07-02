let map = L.map('map', {
      doubleClickZoom: false
    }).setView([-10.77, -77.23], 5);

let calles=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let rutas=L.tileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let black=L.tileLayer('http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let satelite=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let topografia=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

let dark=L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);


let littleton = L.marker([-10.61, -77.02]).bindPopup('This is Littleton, CO.').addTo(map)
    denver    = L.marker([-10.74, -77.09]).bindPopup('This is Denver, CO.').addTo(map)
    aurora    = L.marker([-10.73, -77.07]).bindPopup('This is Aurora, CO.').addTo(map)
    golden    = L.marker([-10.77, -77.04]).bindPopup('This is Golden, CO.').addTo(map)
let cities = L.layerGroup([littleton, denver, aurora, golden]);

function addGejsonFeatureFunc(feature,layer){
    console.log(feature);
}

let grifos_de_agua = new L.featureGroup();
let reservorios = new L.featureGroup();
let valvulas_de_agua = new L.featureGroup();
let buzon = new L.featureGroup();
let cajas_de_alcantarillado = new L.featureGroup();
let sector_comercial = new L.featureGroup();
let rutas_de_lectura = new L.featureGroup();
let pto_geodesico_barranca = new L.featureGroup();
let curvas_regionales = new L.featureGroup();

let baseMaps = {
    "MAPA BASE CALLES": calles,
    "MAPA BASE RUTAS": rutas,
    "MAPA BASE BLACK": black,
    "MAPA BASE SATELITE": satelite,
    "MAPA BASE TOPOGRAFIA": topografia,
    "MAPA BASE DARK": dark
};

let overlayMaps = {
    "CIUDAD": cities,
    "GRIFOS DE AGUA": grifos_de_agua,
        "RESERVORIOS": reservorios,
        "VALVULAS DE AGUA": valvulas_de_agua,

        "BUZON": buzon,
        "CAJAS DE ALCANTARILLADO": cajas_de_alcantarillado,

        "SECTOR": sector_comercial,
        "RUTAS DE LECTURA": rutas_de_lectura,

        "PTOS GEODESICOS": pto_geodesico_barranca,
        "CURVAS REGIONALES": curvas_regionales
    
};

L.control.layers(baseMaps, overlayMaps).addTo(map);



$(document).ready(function() {
        $.getJSON("data/agua_potable/GRIFOS_DE_AGUA.geojson")
        .done(function(data) {
            var info = processData(data);
            createPropSymbols(info.timestamps, data);
        })
    function processData(data) {
        var timestamps = [];
        for (var feature in data.features) {
            var properties = data.features[feature].properties;
            for (var attribute in properties) {
                if (attribute != 'lat' &&
                    attribute != 'lon' )
                {
                }
            }
        }
        return {
            timestamps : timestamps,
        }
    }  // end processData()
    function createPropSymbols(timestamps, data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    fillColor: 'green',
                    color: '#171C1B',
                    weight: 1,
                    fillOpacity: 1.0
                });
            }
        }).addTo(grifos_de_agua);
    } // end createPropSymbols()
});


$(document).ready(function() {
        $.getJSON("data/agua_potable/RESERVORIOS.geojson")
        .done(function(data) {
            var info = processData(data);
            createPropSymbols(info.timestamps, data);
        })
    function processData(data) {
        var timestamps = [];
        for (var feature in data.features) {
            var properties = data.features[feature].properties;
            for (var attribute in properties) {
                if (attribute != 'lat' &&
                    attribute != 'lon' )
                {
                }
            }
        }
        return {
            timestamps : timestamps,
        }
    }  // end processData()
    function createPropSymbols(timestamps, data) {
        L.geoJson(data, {
            multiPolygonToLayer: function(feature, latlng) {
                return L.multiPolygon(latlng, {
                    fillColor: '#802298',
                    color: '#171C1B',
                    weight: 1,
                    fillOpacity: 1.0
                });
            }
        }).addTo(reservorios);
    } // end createPropSymbols()
});


$(document).ready(function() {
        $.getJSON("data/agua_potable/VALVULAS_DE_AGUA.geojson")
        .done(function(data) {
            var info = processData(data);
            createPropSymbols(info.timestamps, data);
        })
    function processData(data) {
        var timestamps = [];
        for (var feature in data.features) {
            var properties = data.features[feature].properties;
            for (var attribute in properties) {
                if (attribute != 'lat' &&
                    attribute != 'lon' )
                {
                }
            }
        }
        return {
            timestamps : timestamps,
        }
    }  // end processData()
    function createPropSymbols(timestamps, data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    fillColor: 'white',
                    color: '#33FFE6',
                    weight: 1,
                    fillOpacity: 0.6
                });
            }
        }).addTo(valvulas_de_agua);
    } // end createPropSymbols()
});


$(document).ready(function() {
        $.getJSON("data/alcantarillado/BUZON.geojson")
        .done(function(data) {
            var info = processData(data);
            createPropSymbols(info.timestamps, data);
        })
    function processData(data) {
        var timestamps = [];
        for (var feature in data.features) {
            var properties = data.features[feature].properties;
            for (var attribute in properties) {
                if (attribute != 'lat' &&
                    attribute != 'lon' )
                {
                }
            }
        }
        return {
            timestamps : timestamps,
        }
    }  // end processData()
    function createPropSymbols(timestamps, data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    fillColor: 'yellow',
                    color: '#537898',
                    weight: 1,
                    fillOpacity: 0.6
                });
            }
        }).addTo(buzon);
    } // end createPropSymbols()
});


$(document).ready(function() {
        $.getJSON("data/alcantarillado/CAJAS_DE_ALCANTARILLADO.geojson")
        .done(function(data) {
            var info = processData(data);
            createPropSymbols(info.timestamps, data);
        })
    function processData(data) {
        var timestamps = [];
        for (var feature in data.features) {
            var properties = data.features[feature].properties;
            for (var attribute in properties) {
                if (attribute != 'lat' &&
                    attribute != 'lon' )
                {
                }
            }
        }
        return {
            timestamps : timestamps,
        }
    }  // end processData()
    function createPropSymbols(timestamps, data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    fillColor: 'purple',
                    color: '#537898',
                    weight: 1,
                    fillOpacity: 0.6
                });
            }
        }).addTo(cajas_de_alcantarillado);
    } // end createPropSymbols()
});


$(document).ready(function() {
        $.getJSON("data/comercial/SECTOR_COMERCIAL.geojson")
        .done(function(data) {
            var info = processData(data);
            createPropSymbols(info.timestamps, data);
        })
    function processData(data) {
        var timestamps = [];
        for (var feature in data.features) {
            var properties = data.features[feature].properties;
            for (var attribute in properties) {
                if (attribute != 'lat' &&
                    attribute != 'lon' )
                {
                }
            }
        }
        return {
            timestamps : timestamps,
        }
    }  // end processData()
    function createPropSymbols(timestamps, data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    fillColor: 'white',
                    color: '#777173',
                    weight: 1,
                    fillOpacity: 0.6
                });
            }
        }).addTo(sector_comercial);
    } // end createPropSymbols()
});

$(document).ready(function() {
        $.getJSON("data/comercial/RECORRIDO_RUTAS_DE_LECTURA.geojson")
        .done(function(data) {
            var info = processData(data);
            createPropSymbols(info.timestamps, data);
        })
    function processData(data) {
        var timestamps = [];
        for (var feature in data.features) {
            var properties = data.features[feature].properties;
            for (var attribute in properties) {
                if (attribute != 'lat' &&
                    attribute != 'lon' )
                {
                }
            }
        }
        return {
            timestamps : timestamps,
        }
    }  // end processData()
    function createPropSymbols(timestamps, data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    fillColor: '#C31629',
                    color: '#C31629',
                    weight: 1,
                    fillOpacity: 0.6
                });
            }
        }).addTo(rutas_de_lectura);
    } // end createPropSymbols()
});

$(document).ready(function() {
        $.getJSON("data/topografia/PTO_GEODESICO_BARRANCA.geojson")
        .done(function(data) {
            var info = processData(data);
            createPropSymbols(info.timestamps, data);
        })
    function processData(data) {
        var timestamps = [];
        for (var feature in data.features) {
            var properties = data.features[feature].properties;
            for (var attribute in properties) {
                if (attribute != 'lat' &&
                    attribute != 'lon' )
                {
                }
            }
        }
        return {
            timestamps : timestamps,
        }
    }  // end processData()
    function createPropSymbols(timestamps, data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    fillColor: 'BLACK',
                    color: '#537898',
                    weight: 1,
                    fillOpacity: 0.6
                });
            }
        }).addTo(pto_geodesico_barranca);
    } // end createPropSymbols()
});

$(document).ready(function() {
        $.getJSON("data/topografia/CURVAS_REGIONALES.geojson")
        .done(function(data) {
            var info = processData(data);
            createPropSymbols(info.timestamps, data);
        })
    function processData(data) {
        var timestamps = [];
        for (var feature in data.features) {
            var properties = data.features[feature].properties;
            for (var attribute in properties) {
                if (attribute != 'lat' &&
                    attribute != 'lon' )
                {
                }
            }
        }
        return {
            timestamps : timestamps,
        }
    }  // end processData()
    function createPropSymbols(timestamps, data) {
        let rod = L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    fillColor: '#8B817E',
                    color: '#8B817E',
                    weight: 1,
                    fillOpacity: 0.6
                });
            }
        }).addTo(curvas_regionales);
    } // end createPropSymbols()
});