ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-23.673316, 19.525836, 12.248797, 38.736064]);
var wms_layers = [];

var format_Limites_MAR_0 = new ol.format.GeoJSON();
var features_Limites_MAR_0 = format_Limites_MAR_0.readFeatures(json_Limites_MAR_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Limites_MAR_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_MAR_0.addFeatures(features_Limites_MAR_0);
var lyr_Limites_MAR_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limites_MAR_0, 
                style: style_Limites_MAR_0,
                popuplayertitle: 'Limites_MAR',
                interactive: true,
                title: '<img src="styles/legend/Limites_MAR_0.png" /> Limites_MAR'
            });
var format_Regions_MAR_1 = new ol.format.GeoJSON();
var features_Regions_MAR_1 = format_Regions_MAR_1.readFeatures(json_Regions_MAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Regions_MAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_MAR_1.addFeatures(features_Regions_MAR_1);
var lyr_Regions_MAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_MAR_1, 
                style: style_Regions_MAR_1,
                popuplayertitle: 'Regions_MAR',
                interactive: true,
                title: '<img src="styles/legend/Regions_MAR_1.png" /> Regions_MAR'
            });
var format_Aeroports_2 = new ol.format.GeoJSON();
var features_Aeroports_2 = format_Aeroports_2.readFeatures(json_Aeroports_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Aeroports_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeroports_2.addFeatures(features_Aeroports_2);
var lyr_Aeroports_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aeroports_2, 
                style: style_Aeroports_2,
                popuplayertitle: 'Aeroports',
                interactive: true,
                title: '<img src="styles/legend/Aeroports_2.png" /> Aeroports'
            });
var group_carteaeroport = new ol.layer.Group({
                                layers: [lyr_Limites_MAR_0,lyr_Regions_MAR_1,lyr_Aeroports_2,],
                                fold: 'close',
                                title: 'carte aeroport'});

lyr_Limites_MAR_0.setVisible(true);lyr_Regions_MAR_1.setVisible(true);lyr_Aeroports_2.setVisible(true);
var layersList = [group_carteaeroport];
lyr_Limites_MAR_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr_Regions_MAR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE_REGIO': 'CODE_REGIO', 'Nom_Region': 'Nom_Region', 'Population': 'Population', 'Menages': 'Menages', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', 'Non_ar': 'Non_ar', });
lyr_Aeroports_2.set('fieldAliases', {'Nom_fr': 'Nom_fr', 'Nom_ar': 'Nom_ar', 'iata': 'iata', 'Capacite_A': 'Capacite_A', 'Capacite_1': 'Capacite_1', 'Capacite_2': 'Capacite_2', });
lyr_Limites_MAR_0.set('fieldImages', {'OBJECTID': '', });
lyr_Regions_MAR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'Nom_Region': 'TextEdit', 'Population': 'TextEdit', 'Menages': 'TextEdit', 'Etrangers': 'TextEdit', 'Marocains': 'TextEdit', 'Non_ar': 'TextEdit', });
lyr_Aeroports_2.set('fieldImages', {'Nom_fr': 'TextEdit', 'Nom_ar': 'TextEdit', 'iata': 'TextEdit', 'Capacite_A': 'TextEdit', 'Capacite_1': 'TextEdit', 'Capacite_2': 'TextEdit', });
lyr_Limites_MAR_0.set('fieldLabels', {'OBJECTID': 'no label', });
lyr_Regions_MAR_1.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'CODE_REGIO': 'hidden field', 'Nom_Region': 'inline label - always visible', 'Population': 'inline label - always visible', 'Menages': 'hidden field', 'Etrangers': 'hidden field', 'Marocains': 'hidden field', 'Non_ar': 'inline label - always visible', });
lyr_Aeroports_2.set('fieldLabels', {'Nom_fr': 'inline label - always visible', 'Nom_ar': 'inline label - always visible', 'iata': 'no label', 'Capacite_A': 'no label', 'Capacite_1': 'inline label - always visible', 'Capacite_2': 'inline label - always visible', });
lyr_Aeroports_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});