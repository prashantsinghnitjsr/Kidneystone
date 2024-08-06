var wms_layers = [];

var format_KidneyStoneMarketPriority_0 = new ol.format.GeoJSON();
var features_KidneyStoneMarketPriority_0 = format_KidneyStoneMarketPriority_0.readFeatures(json_KidneyStoneMarketPriority_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KidneyStoneMarketPriority_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KidneyStoneMarketPriority_0.addFeatures(features_KidneyStoneMarketPriority_0);
var lyr_KidneyStoneMarketPriority_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KidneyStoneMarketPriority_0, 
                style: style_KidneyStoneMarketPriority_0,
                popuplayertitle: "Kidney Stone Market Priority",
                interactive: true,
    title: 'Kidney Stone Market Priority<br />\
    <img src="styles/legend/KidneyStoneMarketPriority_0_0.png" /> P1<br />\
    <img src="styles/legend/KidneyStoneMarketPriority_0_1.png" /> P2<br />\
    <img src="styles/legend/KidneyStoneMarketPriority_0_2.png" /> P3<br />\
    <img src="styles/legend/KidneyStoneMarketPriority_0_3.png" /> <br />'
        });
var format_KidneyStone_Risk_1 = new ol.format.GeoJSON();
var features_KidneyStone_Risk_1 = format_KidneyStone_Risk_1.readFeatures(json_KidneyStone_Risk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KidneyStone_Risk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KidneyStone_Risk_1.addFeatures(features_KidneyStone_Risk_1);
var lyr_KidneyStone_Risk_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KidneyStone_Risk_1, 
                style: style_KidneyStone_Risk_1,
                popuplayertitle: "Kidney Stone_Risk",
                interactive: true,
    title: 'Kidney Stone_Risk<br />\
    <img src="styles/legend/KidneyStone_Risk_1_0.png" /> High Risk<br />\
    <img src="styles/legend/KidneyStone_Risk_1_1.png" /> Low Risk<br />\
    <img src="styles/legend/KidneyStone_Risk_1_2.png" /> Medium Ris<br />\
    <img src="styles/legend/KidneyStone_Risk_1_3.png" /> <br />'
        });
var format_Meat_2 = new ol.format.GeoJSON();
var features_Meat_2 = format_Meat_2.readFeatures(json_Meat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meat_2.addFeatures(features_Meat_2);
var lyr_Meat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meat_2, 
                style: style_Meat_2,
                popuplayertitle: "Meat",
                interactive: true,
    title: 'Meat<br />\
    <img src="styles/legend/Meat_2_0.png" /> 0 - 0.38<br />\
    <img src="styles/legend/Meat_2_1.png" /> 0.38 - 3.33<br />\
    <img src="styles/legend/Meat_2_2.png" /> 3.33 - 8.42<br />'
        });
var format_AlcoholRisk_3 = new ol.format.GeoJSON();
var features_AlcoholRisk_3 = format_AlcoholRisk_3.readFeatures(json_AlcoholRisk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlcoholRisk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlcoholRisk_3.addFeatures(features_AlcoholRisk_3);
var lyr_AlcoholRisk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlcoholRisk_3, 
                style: style_AlcoholRisk_3,
                popuplayertitle: "Alcohol Risk ",
                interactive: true,
    title: 'Alcohol Risk <br />\
    <img src="styles/legend/AlcoholRisk_3_0.png" /> 0 - 0<br />\
    <img src="styles/legend/AlcoholRisk_3_1.png" /> 0 - 1<br />\
    <img src="styles/legend/AlcoholRisk_3_2.png" /> 1 - 2<br />'
        });
var format_WaterRisk_4 = new ol.format.GeoJSON();
var features_WaterRisk_4 = format_WaterRisk_4.readFeatures(json_WaterRisk_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterRisk_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterRisk_4.addFeatures(features_WaterRisk_4);
var lyr_WaterRisk_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterRisk_4, 
                style: style_WaterRisk_4,
                popuplayertitle: "Water Risk ",
                interactive: true,
    title: 'Water Risk <br />\
    <img src="styles/legend/WaterRisk_4_0.png" /> 0 - 0<br />\
    <img src="styles/legend/WaterRisk_4_1.png" /> 0 - 0.51<br />\
    <img src="styles/legend/WaterRisk_4_2.png" /> 0.51 - 20.92<br />'
        });
var format_DehydrationRisk_5 = new ol.format.GeoJSON();
var features_DehydrationRisk_5 = format_DehydrationRisk_5.readFeatures(json_DehydrationRisk_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DehydrationRisk_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DehydrationRisk_5.addFeatures(features_DehydrationRisk_5);
var lyr_DehydrationRisk_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DehydrationRisk_5, 
                style: style_DehydrationRisk_5,
                popuplayertitle: "Dehydration Risk",
                interactive: true,
    title: 'Dehydration Risk<br />\
    <img src="styles/legend/DehydrationRisk_5_0.png" /> 0 - 0<br />\
    <img src="styles/legend/DehydrationRisk_5_1.png" /> 0 - 0.22<br />\
    <img src="styles/legend/DehydrationRisk_5_2.png" /> 0.22 - 1.35<br />'
        });
var format_India_markettype_6 = new ol.format.GeoJSON();
var features_India_markettype_6 = format_India_markettype_6.readFeatures(json_India_markettype_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_markettype_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_markettype_6.addFeatures(features_India_markettype_6);
var lyr_India_markettype_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_India_markettype_6, 
                style: style_India_markettype_6,
                popuplayertitle: "India_market type",
                interactive: true,
    title: 'India_market type<br />\
    <img src="styles/legend/India_markettype_6_0.png" /> Good Ma<br />\
    <img src="styles/legend/India_markettype_6_1.png" /> Average M<br />\
    <img src="styles/legend/India_markettype_6_2.png" /> Must Serve<br />\
    <img src="styles/legend/India_markettype_6_3.png" /> <br />'
        });
var format_India_population_7 = new ol.format.GeoJSON();
var features_India_population_7 = format_India_population_7.readFeatures(json_India_population_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_population_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_population_7.addFeatures(features_India_population_7);
var lyr_India_population_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_India_population_7, 
                style: style_India_population_7,
                popuplayertitle: "India_population",
                interactive: true,
    title: 'India_population<br />\
    <img src="styles/legend/India_population_7_0.png" /> 0 - 1500000<br />\
    <img src="styles/legend/India_population_7_1.png" /> 1500000 - 4000000<br />\
    <img src="styles/legend/India_population_7_2.png" /> 4000000 - 15688485<br />'
        });
var format_India_Night_8 = new ol.format.GeoJSON();
var features_India_Night_8 = format_India_Night_8.readFeatures(json_India_Night_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_Night_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_Night_8.addFeatures(features_India_Night_8);
var lyr_India_Night_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_India_Night_8, 
                style: style_India_Night_8,
                popuplayertitle: "India_Night",
                interactive: true,
    title: 'India_Night<br />\
    <img src="styles/legend/India_Night_8_0.png" /> 0 - 1<br />\
    <img src="styles/legend/India_Night_8_1.png" /> 1 - 2<br />\
    <img src="styles/legend/India_Night_8_2.png" /> 2 - 58.18<br />'
        });
var format_India_District_9 = new ol.format.GeoJSON();
var features_India_District_9 = format_India_District_9.readFeatures(json_India_District_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_District_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_District_9.addFeatures(features_India_District_9);
var lyr_India_District_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_India_District_9, 
                style: style_India_District_9,
                popuplayertitle: "India_District",
                interactive: true,
                title: '<img src="styles/legend/India_District_9.png" /> India_District'
            });

lyr_KidneyStoneMarketPriority_0.setVisible(false);lyr_KidneyStone_Risk_1.setVisible(false);lyr_Meat_2.setVisible(false);lyr_AlcoholRisk_3.setVisible(false);lyr_WaterRisk_4.setVisible(false);lyr_DehydrationRisk_5.setVisible(false);lyr_India_markettype_6.setVisible(false);lyr_India_population_7.setVisible(false);lyr_India_Night_8.setVisible(false);lyr_India_District_9.setVisible(false);
var layersList = [lyr_KidneyStoneMarketPriority_0,lyr_KidneyStone_Risk_1,lyr_Meat_2,lyr_AlcoholRisk_3,lyr_WaterRisk_4,lyr_DehydrationRisk_5,lyr_India_markettype_6,lyr_India_population_7,lyr_India_Night_8,lyr_India_District_9];
lyr_KidneyStoneMarketPriority_0.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', 'KS_Risk': 'KS_Risk', 'KS_Prior': 'KS_Prior', 'KS_Dehydra': 'KS_Dehydra', 'KS_pH_Inde': 'KS_pH_Inde', 'KS_Na_Inde': 'KS_Na_Inde', 'KS_Alchoho': 'KS_Alchoho', 'KS_Salt_In': 'KS_Salt_In', 'KS_Meat an': 'KS_Meat an', 'KS_Pulses_': 'KS_Pulses_', 'KS_Final S': 'KS_Final S', });
lyr_KidneyStone_Risk_1.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', 'KS_Risk': 'KS_Risk', 'KS_Prior': 'KS_Prior', 'KS_Dehydra': 'KS_Dehydra', 'KS_pH_Inde': 'KS_pH_Inde', 'KS_Na_Inde': 'KS_Na_Inde', 'KS_Alchoho': 'KS_Alchoho', 'KS_Salt_In': 'KS_Salt_In', 'KS_Meat an': 'KS_Meat an', 'KS_Pulses_': 'KS_Pulses_', 'KS_Final S': 'KS_Final S', });
lyr_Meat_2.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', 'KS_Risk': 'KS_Risk', 'KS_Prior': 'KS_Prior', 'KS_Dehydra': 'KS_Dehydra', 'KS_pH_Inde': 'KS_pH_Inde', 'KS_Na_Inde': 'KS_Na_Inde', 'KS_Alchoho': 'KS_Alchoho', 'KS_Salt_In': 'KS_Salt_In', 'KS_Meat an': 'KS_Meat an', 'KS_Pulses_': 'KS_Pulses_', 'KS_Final S': 'KS_Final S', });
lyr_AlcoholRisk_3.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', 'KS_Risk': 'KS_Risk', 'KS_Prior': 'KS_Prior', 'KS_Dehydra': 'KS_Dehydra', 'KS_pH_Inde': 'KS_pH_Inde', 'KS_Na_Inde': 'KS_Na_Inde', 'KS_Alchoho': 'KS_Alchoho', 'KS_Salt_In': 'KS_Salt_In', 'KS_Meat an': 'KS_Meat an', 'KS_Pulses_': 'KS_Pulses_', 'KS_Final S': 'KS_Final S', });
lyr_WaterRisk_4.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', 'KS_Risk': 'KS_Risk', 'KS_Prior': 'KS_Prior', 'KS_Dehydra': 'KS_Dehydra', 'KS_pH_Inde': 'KS_pH_Inde', 'KS_Na_Inde': 'KS_Na_Inde', 'KS_Alchoho': 'KS_Alchoho', 'KS_Salt_In': 'KS_Salt_In', 'KS_Meat an': 'KS_Meat an', 'KS_Pulses_': 'KS_Pulses_', 'KS_Final S': 'KS_Final S', });
lyr_DehydrationRisk_5.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', 'KS_Risk': 'KS_Risk', 'KS_Prior': 'KS_Prior', 'KS_Dehydra': 'KS_Dehydra', 'KS_pH_Inde': 'KS_pH_Inde', 'KS_Na_Inde': 'KS_Na_Inde', 'KS_Alchoho': 'KS_Alchoho', 'KS_Salt_In': 'KS_Salt_In', 'KS_Meat an': 'KS_Meat an', 'KS_Pulses_': 'KS_Pulses_', 'KS_Final S': 'KS_Final S', });
lyr_India_markettype_6.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', });
lyr_India_population_7.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', });
lyr_India_Night_8.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', });
lyr_India_District_9.set('fieldAliases', {'dtname': 'dtname', 'stname': 'stname', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'year_stat': 'year_stat', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID': 'OBJECTID', 'test': 'test', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', 'Light_sum': 'Light_sum', 'Light_mean': 'Light_mean', 'Population': 'Population', 'Market_ty': 'Market_ty', });
lyr_KidneyStoneMarketPriority_0.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', 'KS_Risk': 'TextEdit', 'KS_Prior': 'TextEdit', 'KS_Dehydra': 'TextEdit', 'KS_pH_Inde': 'TextEdit', 'KS_Na_Inde': 'TextEdit', 'KS_Alchoho': 'TextEdit', 'KS_Salt_In': 'TextEdit', 'KS_Meat an': 'TextEdit', 'KS_Pulses_': 'TextEdit', 'KS_Final S': 'TextEdit', });
lyr_KidneyStone_Risk_1.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', 'KS_Risk': 'TextEdit', 'KS_Prior': 'TextEdit', 'KS_Dehydra': 'TextEdit', 'KS_pH_Inde': 'TextEdit', 'KS_Na_Inde': 'TextEdit', 'KS_Alchoho': 'TextEdit', 'KS_Salt_In': 'TextEdit', 'KS_Meat an': 'TextEdit', 'KS_Pulses_': 'TextEdit', 'KS_Final S': 'TextEdit', });
lyr_Meat_2.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', 'KS_Risk': 'TextEdit', 'KS_Prior': 'TextEdit', 'KS_Dehydra': 'TextEdit', 'KS_pH_Inde': 'TextEdit', 'KS_Na_Inde': 'TextEdit', 'KS_Alchoho': 'TextEdit', 'KS_Salt_In': 'TextEdit', 'KS_Meat an': 'TextEdit', 'KS_Pulses_': 'TextEdit', 'KS_Final S': 'TextEdit', });
lyr_AlcoholRisk_3.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', 'KS_Risk': 'TextEdit', 'KS_Prior': 'TextEdit', 'KS_Dehydra': 'TextEdit', 'KS_pH_Inde': 'TextEdit', 'KS_Na_Inde': 'TextEdit', 'KS_Alchoho': 'TextEdit', 'KS_Salt_In': 'TextEdit', 'KS_Meat an': 'TextEdit', 'KS_Pulses_': 'TextEdit', 'KS_Final S': 'TextEdit', });
lyr_WaterRisk_4.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', 'KS_Risk': 'TextEdit', 'KS_Prior': 'TextEdit', 'KS_Dehydra': 'TextEdit', 'KS_pH_Inde': 'TextEdit', 'KS_Na_Inde': 'TextEdit', 'KS_Alchoho': 'TextEdit', 'KS_Salt_In': 'TextEdit', 'KS_Meat an': 'TextEdit', 'KS_Pulses_': 'TextEdit', 'KS_Final S': 'TextEdit', });
lyr_DehydrationRisk_5.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', 'KS_Risk': 'TextEdit', 'KS_Prior': 'TextEdit', 'KS_Dehydra': 'TextEdit', 'KS_pH_Inde': 'TextEdit', 'KS_Na_Inde': 'TextEdit', 'KS_Alchoho': 'TextEdit', 'KS_Salt_In': 'TextEdit', 'KS_Meat an': 'TextEdit', 'KS_Pulses_': 'TextEdit', 'KS_Final S': 'TextEdit', });
lyr_India_markettype_6.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', });
lyr_India_population_7.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', });
lyr_India_Night_8.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', });
lyr_India_District_9.set('fieldImages', {'dtname': 'TextEdit', 'stname': 'TextEdit', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'year_stat': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID': 'TextEdit', 'test': 'TextEdit', 'Dist_LGD': 'TextEdit', 'State_LGD': 'TextEdit', 'Light_sum': 'TextEdit', 'Light_mean': 'TextEdit', 'Population': 'TextEdit', 'Market_ty': 'TextEdit', });
lyr_KidneyStoneMarketPriority_0.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', 'KS_Risk': 'no label', 'KS_Prior': 'no label', 'KS_Dehydra': 'no label', 'KS_pH_Inde': 'no label', 'KS_Na_Inde': 'no label', 'KS_Alchoho': 'no label', 'KS_Salt_In': 'no label', 'KS_Meat an': 'no label', 'KS_Pulses_': 'no label', 'KS_Final S': 'no label', });
lyr_KidneyStone_Risk_1.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', 'KS_Risk': 'no label', 'KS_Prior': 'no label', 'KS_Dehydra': 'no label', 'KS_pH_Inde': 'no label', 'KS_Na_Inde': 'no label', 'KS_Alchoho': 'no label', 'KS_Salt_In': 'no label', 'KS_Meat an': 'no label', 'KS_Pulses_': 'no label', 'KS_Final S': 'no label', });
lyr_Meat_2.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', 'KS_Risk': 'no label', 'KS_Prior': 'no label', 'KS_Dehydra': 'no label', 'KS_pH_Inde': 'no label', 'KS_Na_Inde': 'no label', 'KS_Alchoho': 'no label', 'KS_Salt_In': 'no label', 'KS_Meat an': 'no label', 'KS_Pulses_': 'no label', 'KS_Final S': 'no label', });
lyr_AlcoholRisk_3.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', 'KS_Risk': 'no label', 'KS_Prior': 'no label', 'KS_Dehydra': 'no label', 'KS_pH_Inde': 'no label', 'KS_Na_Inde': 'no label', 'KS_Alchoho': 'no label', 'KS_Salt_In': 'no label', 'KS_Meat an': 'no label', 'KS_Pulses_': 'no label', 'KS_Final S': 'no label', });
lyr_WaterRisk_4.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', 'KS_Risk': 'no label', 'KS_Prior': 'no label', 'KS_Dehydra': 'no label', 'KS_pH_Inde': 'no label', 'KS_Na_Inde': 'no label', 'KS_Alchoho': 'no label', 'KS_Salt_In': 'no label', 'KS_Meat an': 'no label', 'KS_Pulses_': 'no label', 'KS_Final S': 'no label', });
lyr_DehydrationRisk_5.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', 'KS_Risk': 'no label', 'KS_Prior': 'no label', 'KS_Dehydra': 'no label', 'KS_pH_Inde': 'no label', 'KS_Na_Inde': 'no label', 'KS_Alchoho': 'no label', 'KS_Salt_In': 'no label', 'KS_Meat an': 'no label', 'KS_Pulses_': 'no label', 'KS_Final S': 'no label', });
lyr_India_markettype_6.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', });
lyr_India_population_7.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', });
lyr_India_Night_8.set('fieldLabels', {'dtname': 'inline label - always visible', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', });
lyr_India_District_9.set('fieldLabels', {'dtname': 'inline label - visible with data', 'stname': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'year_stat': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID': 'no label', 'test': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', 'Light_sum': 'no label', 'Light_mean': 'no label', 'Population': 'no label', 'Market_ty': 'no label', });
lyr_India_District_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});