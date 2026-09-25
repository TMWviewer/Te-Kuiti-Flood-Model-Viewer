ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2193").setExtent([1787083.509812, 5750466.624462, 1792295.289812, 5758399.019179]);
var wms_layers = [];


        var lyr_googlenew_0 = new ol.layer.Tile({
            'title': 'google new',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_PostOptioneering_10yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Post Optioneering_10yr_Historical Flood Hazard_v2_Duke_St_Opt2_HAZARD2D.tif<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_1_0.png" /> Very Low<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_1_1.png" /> Moderate<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_1_2.png" /> Significant<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_1_3.png" /> Extreme<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PostOptioneering_10yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_1.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1787146.000000, 5752472.000000, 1792680.000000, 5756410.000000]
        })
    });
var lyr_PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Post Optioneering_10yr_Historical Flood Depth_v2_Duke_St_Opt2_DEPTH2D.tif<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_0.png" /> <= 0.05<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_1.png" /> 0.05 - 0.10<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_2.png" /> 0.10 - 0.20<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_3.png" /> 0.20 - 0.30<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_4.png" /> 0.30 - 0.50<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_5.png" /> 0.50 - 0.80<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_6.png" /> 0.80 - 1.00<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_7.png" /> 1.00 - 2.00<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_8.png" /> 2.00 - 3.00<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_9.png" /> 3.0 - 5.0<br />\
    <img src="styles/legend/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2_10.png" /> >5.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1787146.000000, 5752472.000000, 1792680.000000, 5756410.000000]
        })
    });
var lyr_PostOptioneering_100yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Post Optioneering_100yr_Historical Flood Hazard_v2_Duke_St_Opt2_HAZARD2D.tif<br />\
    <img src="styles/legend/PostOptioneering_100yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_3_0.png" /> Very Low<br />\
    <img src="styles/legend/PostOptioneering_100yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_3_1.png" /> Moderate<br />\
    <img src="styles/legend/PostOptioneering_100yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_3_2.png" /> Significant<br />\
    <img src="styles/legend/PostOptioneering_100yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_3_3.png" /> Extreme<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PostOptioneering_100yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_3.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1787100.000000, 5752456.000000, 1792680.000000, 5756410.000000]
        })
    });
var lyr_PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Post Optioneering_100yr_Historical_Flood Depth_v2_Duke_St_Opt2_DEPTH2D.tif<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_0.png" /> <= 0.05<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_1.png" /> 0.05 - 0.10<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_2.png" /> 0.10 - 0.20<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_3.png" /> 0.20 - 0.30<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_4.png" /> 0.30 - 0.50<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_5.png" /> 0.50 - 0.80<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_6.png" /> 0.80 - 1.00<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_7.png" /> 1.00 - 2.00<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_8.png" /> 2.00 - 3.00<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_9.png" /> 3.0 - 5.0<br />\
    <img src="styles/legend/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4_10.png" /> >5.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1787100.000000, 5752456.000000, 1792680.000000, 5756410.000000]
        })
    });
var lyr_Existing_10yr_HistoricalFloodHazardtif_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Existing_10yr_Historical Flood Hazard.tif<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFloodHazardtif_5_0.png" /> Very Low<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFloodHazardtif_5_1.png" /> Moderate<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFloodHazardtif_5_2.png" /> Significant<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFloodHazardtif_5_3.png" /> Extreme<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Existing_10yr_HistoricalFloodHazardtif_5.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1787140.000000, 5752456.000000, 1792680.000000, 5756410.000000]
        })
    });
var lyr_Existing_10yr_HistoricalFlooddepth_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Existing_10yr_Historical Flood depth<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_0.png" /> <= 0.05<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_1.png" /> 0.05 - 0.10<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_2.png" /> 0.10 - 0.20<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_3.png" /> 0.20 - 0.30<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_4.png" /> 0.30 - 0.50<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_5.png" /> 0.50 - 0.80<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_6.png" /> 0.80 - 1.00<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_7.png" /> 1.00 - 2.00<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_8.png" /> 2.00 - 3.00<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_9.png" /> 3.0 - 5.0<br />\
    <img src="styles/legend/Existing_10yr_HistoricalFlooddepth_6_10.png" /> >5.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Existing_10yr_HistoricalFlooddepth_6.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1787140.000000, 5752456.000000, 1792680.000000, 5756410.000000]
        })
    });
var lyr_Existing_100yr_Historical_FloodHazardtif_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Existing_100yr_Historical_Flood Hazard.tif<br />\
    <img src="styles/legend/Existing_100yr_Historical_FloodHazardtif_7_0.png" /> Very Low<br />\
    <img src="styles/legend/Existing_100yr_Historical_FloodHazardtif_7_1.png" /> Moderate<br />\
    <img src="styles/legend/Existing_100yr_Historical_FloodHazardtif_7_2.png" /> Significant<br />\
    <img src="styles/legend/Existing_100yr_Historical_FloodHazardtif_7_3.png" /> Extreme<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Existing_100yr_Historical_FloodHazardtif_7.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1787103.529000, 5752458.070100, 1792676.446600, 5756406.421200]
        })
    });
var lyr_Existing_100yrHistoricalFloodDepthtif_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Existing_100yr Historical Flood Depth.tif<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_0.png" /> <= 0.05<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_1.png" /> 0.05 - 0.10<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_2.png" /> 0.10 - 0.20<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_3.png" /> 0.20 - 0.30<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_4.png" /> 0.30 - 0.50<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_5.png" /> 0.50 - 0.80<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_6.png" /> 0.80 - 1.00<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_7.png" /> 1.00 - 2.00<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_8.png" /> 2.00 - 3.00<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_9.png" /> 3.0 - 5.0<br />\
    <img src="styles/legend/Existing_100yrHistoricalFloodDepthtif_8_10.png" /> >5.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Existing_100yrHistoricalFloodDepthtif_8.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1787103.529000, 5752458.070100, 1792676.446600, 5756406.421200]
        })
    });
var lyr_100yr_Hist_v3_Bunds_Opt3_HAZARD2D_9 = new ol.layer.Image({
        opacity: 1,
        
    title: '100yr_Hist_v3_Bunds_Opt3_HAZARD2D<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_HAZARD2D_9_0.png" /> Very Low<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_HAZARD2D_9_1.png" /> Moderate<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_HAZARD2D_9_2.png" /> Significant<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_HAZARD2D_9_3.png" /> Extreme<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/100yr_Hist_v3_Bunds_Opt3_HAZARD2D_9.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1787100.000000, 5752456.000000, 1792650.000000, 5756410.000000]
        })
    });
var lyr_100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10 = new ol.layer.Image({
        opacity: 1,
        
    title: '100yr_Hist_v3_Bunds_Opt3_DEPTH2D<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_0.png" /> <= 0.05<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_1.png" /> 0.05 - 0.10<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_2.png" /> 0.10 - 0.20<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_3.png" /> 0.20 - 0.30<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_4.png" /> 0.30 - 0.50<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_5.png" /> 0.50 - 0.80<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_6.png" /> 0.80 - 1.00<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_7.png" /> 1.00 - 2.00<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_8.png" /> 2.00 - 3.00<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_9.png" /> 3.0 - 5.0<br />\
    <img src="styles/legend/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10_10.png" /> >5.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10.png",
            attributions: ' ',
            projection: 'EPSG:2193',
            alwaysInRange: true,
            imageExtent: [1787100.000000, 5752456.000000, 1792650.000000, 5756410.000000]
        })
    });
var format_FloodAffectedBuildings10yr_Hist_v2_above150mm_11 = new ol.format.GeoJSON();
var features_FloodAffectedBuildings10yr_Hist_v2_above150mm_11 = format_FloodAffectedBuildings10yr_Hist_v2_above150mm_11.readFeatures(json_FloodAffectedBuildings10yr_Hist_v2_above150mm_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_FloodAffectedBuildings10yr_Hist_v2_above150mm_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodAffectedBuildings10yr_Hist_v2_above150mm_11.addFeatures(features_FloodAffectedBuildings10yr_Hist_v2_above150mm_11);
var lyr_FloodAffectedBuildings10yr_Hist_v2_above150mm_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodAffectedBuildings10yr_Hist_v2_above150mm_11, 
                style: style_FloodAffectedBuildings10yr_Hist_v2_above150mm_11,
                popuplayertitle: 'Flood Affected Buildings 10yr_Hist_v2_above 150mm',
                interactive: false,
                title: '<img src="styles/legend/FloodAffectedBuildings10yr_Hist_v2_above150mm_11.png" /> Flood Affected Buildings 10yr_Hist_v2_above 150mm'
            });
var format_FloodAffectedBuildings100yr_Hist_v2_above150mm_12 = new ol.format.GeoJSON();
var features_FloodAffectedBuildings100yr_Hist_v2_above150mm_12 = format_FloodAffectedBuildings100yr_Hist_v2_above150mm_12.readFeatures(json_FloodAffectedBuildings100yr_Hist_v2_above150mm_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_FloodAffectedBuildings100yr_Hist_v2_above150mm_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodAffectedBuildings100yr_Hist_v2_above150mm_12.addFeatures(features_FloodAffectedBuildings100yr_Hist_v2_above150mm_12);
var lyr_FloodAffectedBuildings100yr_Hist_v2_above150mm_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodAffectedBuildings100yr_Hist_v2_above150mm_12, 
                style: style_FloodAffectedBuildings100yr_Hist_v2_above150mm_12,
                popuplayertitle: 'Flood Affected Buildings 100yr_Hist_v2_above 150mm',
                interactive: false,
                title: '<img src="styles/legend/FloodAffectedBuildings100yr_Hist_v2_above150mm_12.png" /> Flood Affected Buildings 100yr_Hist_v2_above 150mm'
            });
var format_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13 = new ol.format.GeoJSON();
var features_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13 = format_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13.readFeatures(json_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13.addFeatures(features_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13);
var lyr_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13, 
                style: style_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13,
                popuplayertitle: 'Flood Affected Buildings_10yr_Hist(v2)_Duke_St_Opt2_above 150mm',
                interactive: false,
                title: '<img src="styles/legend/FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13.png" /> Flood Affected Buildings_10yr_Hist(v2)_Duke_St_Opt2_above 150mm'
            });
var format_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14 = new ol.format.GeoJSON();
var features_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14 = format_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14.readFeatures(json_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14.addFeatures(features_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14);
var lyr_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14, 
                style: style_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14,
                popuplayertitle: 'Flood Affected Buildings_100yr_Hist(v2)_Duke_St_Opt2_above 150mm',
                interactive: false,
                title: '<img src="styles/legend/FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14.png" /> Flood Affected Buildings_100yr_Hist(v2)_Duke_St_Opt2_above 150mm'
            });
var format_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15 = new ol.format.GeoJSON();
var features_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15 = format_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15.readFeatures(json_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15.addFeatures(features_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15);
var lyr_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15, 
                style: style_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15,
                popuplayertitle: 'Flood Affected buildings_100yr_Historical_v3_Bunds_Opt3_above 150mm',
                interactive: true,
                title: '<img src="styles/legend/FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15.png" /> Flood Affected buildings_100yr_Historical_v3_Bunds_Opt3_above 150mm'
            });

lyr_googlenew_0.setVisible(true);lyr_PostOptioneering_10yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_1.setVisible(false);lyr_PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2.setVisible(false);lyr_PostOptioneering_100yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_3.setVisible(false);lyr_PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4.setVisible(false);lyr_Existing_10yr_HistoricalFloodHazardtif_5.setVisible(false);lyr_Existing_10yr_HistoricalFlooddepth_6.setVisible(false);lyr_Existing_100yr_Historical_FloodHazardtif_7.setVisible(false);lyr_Existing_100yrHistoricalFloodDepthtif_8.setVisible(false);lyr_100yr_Hist_v3_Bunds_Opt3_HAZARD2D_9.setVisible(false);lyr_100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10.setVisible(true);lyr_FloodAffectedBuildings10yr_Hist_v2_above150mm_11.setVisible(false);lyr_FloodAffectedBuildings100yr_Hist_v2_above150mm_12.setVisible(false);lyr_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13.setVisible(false);lyr_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14.setVisible(false);lyr_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15.setVisible(true);
var layersList = [lyr_googlenew_0,lyr_PostOptioneering_10yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_1,lyr_PostOptioneering_10yr_HistoricalFloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_2,lyr_PostOptioneering_100yr_HistoricalFloodHazard_v2_Duke_St_Opt2_HAZARD2Dtif_3,lyr_PostOptioneering_100yr_Historical_FloodDepth_v2_Duke_St_Opt2_DEPTH2Dtif_4,lyr_Existing_10yr_HistoricalFloodHazardtif_5,lyr_Existing_10yr_HistoricalFlooddepth_6,lyr_Existing_100yr_Historical_FloodHazardtif_7,lyr_Existing_100yrHistoricalFloodDepthtif_8,lyr_100yr_Hist_v3_Bunds_Opt3_HAZARD2D_9,lyr_100yr_Hist_v3_Bunds_Opt3_DEPTH2D_10,lyr_FloodAffectedBuildings10yr_Hist_v2_above150mm_11,lyr_FloodAffectedBuildings100yr_Hist_v2_above150mm_12,lyr_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13,lyr_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14,lyr_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15];
lyr_FloodAffectedBuildings10yr_Hist_v2_above150mm_11.set('fieldAliases', {'fid': 'fid', 'building_i': 'building_i', 'name': 'name', 'use': 'use', 'suburb_loc': 'suburb_loc', 'town_city': 'town_city', 'territoria': 'territoria', 'capture_me': 'capture_me', 'capture_so': 'capture_so', 'capture__1': 'capture__1', 'capture__2': 'capture__2', 'capture__3': 'capture__3', 'capture__4': 'capture__4', 'last_modif': 'last_modif', 'Survey': 'Survey', 'No_Survey': 'No_Survey', 'Field': 'Field', 'Depth_max': 'Depth_max', 'Level_max': 'Level_max', });
lyr_FloodAffectedBuildings100yr_Hist_v2_above150mm_12.set('fieldAliases', {'fid': 'fid', 'building_i': 'building_i', 'name': 'name', 'use': 'use', 'suburb_loc': 'suburb_loc', 'town_city': 'town_city', 'territoria': 'territoria', 'capture_me': 'capture_me', 'capture_so': 'capture_so', 'capture__1': 'capture__1', 'capture__2': 'capture__2', 'capture__3': 'capture__3', 'capture__4': 'capture__4', 'last_modif': 'last_modif', 'Survey': 'Survey', 'No_Survey': 'No_Survey', 'Field': 'Field', 'depth_mean': 'depth_mean', 'depth_max': 'depth_max', 'level_mean': 'level_mean', 'level_max': 'level_max', });
lyr_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13.set('fieldAliases', {'building_i': 'building_i', 'name': 'name', 'use': 'use', 'suburb_loc': 'suburb_loc', 'town_city': 'town_city', 'territoria': 'territoria', 'capture_me': 'capture_me', 'capture_so': 'capture_so', 'capture__1': 'capture__1', 'capture__2': 'capture__2', 'capture__3': 'capture__3', 'capture__4': 'capture__4', 'last_modif': 'last_modif', 'Survey': 'Survey', 'No_Survey': 'No_Survey', 'Level_max': 'Level_max', 'Depth_max': 'Depth_max', });
lyr_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14.set('fieldAliases', {'building_i': 'building_i', 'name': 'name', 'use': 'use', 'suburb_loc': 'suburb_loc', 'town_city': 'town_city', 'territoria': 'territoria', 'capture_me': 'capture_me', 'capture_so': 'capture_so', 'capture__1': 'capture__1', 'capture__2': 'capture__2', 'capture__3': 'capture__3', 'capture__4': 'capture__4', 'last_modif': 'last_modif', 'Survey': 'Survey', 'No_Survey': 'No_Survey', 'Field': 'Field', 'Depth_max': 'Depth_max', 'Level_max': 'Level_max', });
lyr_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15.set('fieldAliases', {'building_i': 'building_i', 'name': 'name', 'use': 'use', 'suburb_loc': 'suburb_loc', 'town_city': 'town_city', 'territoria': 'territoria', 'capture_me': 'capture_me', 'capture_so': 'capture_so', 'capture__1': 'capture__1', 'capture__2': 'capture__2', 'capture__3': 'capture__3', 'capture__4': 'capture__4', 'last_modif': 'last_modif', 'Depth_max': 'Depth_max', });
lyr_FloodAffectedBuildings10yr_Hist_v2_above150mm_11.set('fieldImages', {'fid': '', 'building_i': '', 'name': '', 'use': '', 'suburb_loc': '', 'town_city': '', 'territoria': '', 'capture_me': '', 'capture_so': '', 'capture__1': '', 'capture__2': '', 'capture__3': '', 'capture__4': '', 'last_modif': '', 'Survey': '', 'No_Survey': '', 'Field': '', 'Depth_max': '', 'Level_max': '', });
lyr_FloodAffectedBuildings100yr_Hist_v2_above150mm_12.set('fieldImages', {'fid': '', 'building_i': '', 'name': '', 'use': '', 'suburb_loc': '', 'town_city': '', 'territoria': '', 'capture_me': '', 'capture_so': '', 'capture__1': '', 'capture__2': '', 'capture__3': '', 'capture__4': '', 'last_modif': '', 'Survey': '', 'No_Survey': '', 'Field': '', 'depth_mean': '', 'depth_max': '', 'level_mean': '', 'level_max': '', });
lyr_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13.set('fieldImages', {'building_i': '', 'name': '', 'use': '', 'suburb_loc': '', 'town_city': '', 'territoria': '', 'capture_me': '', 'capture_so': '', 'capture__1': '', 'capture__2': '', 'capture__3': '', 'capture__4': '', 'last_modif': '', 'Survey': '', 'No_Survey': '', 'Level_max': '', 'Depth_max': '', });
lyr_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14.set('fieldImages', {'building_i': '', 'name': '', 'use': '', 'suburb_loc': '', 'town_city': '', 'territoria': '', 'capture_me': '', 'capture_so': '', 'capture__1': '', 'capture__2': '', 'capture__3': '', 'capture__4': '', 'last_modif': '', 'Survey': '', 'No_Survey': '', 'Field': '', 'Depth_max': '', 'Level_max': '', });
lyr_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15.set('fieldImages', {'building_i': '', 'name': '', 'use': '', 'suburb_loc': '', 'town_city': '', 'territoria': '', 'capture_me': '', 'capture_so': '', 'capture__1': '', 'capture__2': '', 'capture__3': '', 'capture__4': '', 'last_modif': '', 'Depth_max': '', });
lyr_FloodAffectedBuildings10yr_Hist_v2_above150mm_11.set('fieldLabels', {'fid': 'no label', 'building_i': 'no label', 'name': 'no label', 'use': 'no label', 'suburb_loc': 'no label', 'town_city': 'no label', 'territoria': 'no label', 'capture_me': 'no label', 'capture_so': 'no label', 'capture__1': 'no label', 'capture__2': 'no label', 'capture__3': 'no label', 'capture__4': 'no label', 'last_modif': 'no label', 'Survey': 'no label', 'No_Survey': 'no label', 'Field': 'no label', 'Depth_max': 'no label', 'Level_max': 'no label', });
lyr_FloodAffectedBuildings100yr_Hist_v2_above150mm_12.set('fieldLabels', {'fid': 'no label', 'building_i': 'inline label - always visible', 'name': 'no label', 'use': 'no label', 'suburb_loc': 'no label', 'town_city': 'no label', 'territoria': 'no label', 'capture_me': 'no label', 'capture_so': 'no label', 'capture__1': 'no label', 'capture__2': 'no label', 'capture__3': 'no label', 'capture__4': 'no label', 'last_modif': 'no label', 'Survey': 'no label', 'No_Survey': 'no label', 'Field': 'no label', 'depth_mean': 'no label', 'depth_max': 'no label', 'level_mean': 'no label', 'level_max': 'no label', });
lyr_FloodAffectedBuildings_10yr_Histv2_Duke_St_Opt2_above150mm_13.set('fieldLabels', {'building_i': 'no label', 'name': 'no label', 'use': 'no label', 'suburb_loc': 'no label', 'town_city': 'no label', 'territoria': 'no label', 'capture_me': 'no label', 'capture_so': 'no label', 'capture__1': 'no label', 'capture__2': 'no label', 'capture__3': 'no label', 'capture__4': 'no label', 'last_modif': 'no label', 'Survey': 'no label', 'No_Survey': 'no label', 'Level_max': 'no label', 'Depth_max': 'no label', });
lyr_FloodAffectedBuildings_100yr_Histv2_Duke_St_Opt2_above150mm_14.set('fieldLabels', {'building_i': 'inline label - always visible', 'name': 'no label', 'use': 'no label', 'suburb_loc': 'no label', 'town_city': 'no label', 'territoria': 'no label', 'capture_me': 'no label', 'capture_so': 'no label', 'capture__1': 'no label', 'capture__2': 'no label', 'capture__3': 'no label', 'capture__4': 'no label', 'last_modif': 'no label', 'Survey': 'no label', 'No_Survey': 'no label', 'Field': 'no label', 'Depth_max': 'no label', 'Level_max': 'no label', });
lyr_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15.set('fieldLabels', {'building_i': 'no label', 'name': 'no label', 'use': 'no label', 'suburb_loc': 'no label', 'town_city': 'no label', 'territoria': 'no label', 'capture_me': 'no label', 'capture_so': 'no label', 'capture__1': 'no label', 'capture__2': 'no label', 'capture__3': 'no label', 'capture__4': 'no label', 'last_modif': 'no label', 'Depth_max': 'no label', });
lyr_FloodAffectedbuildings_100yr_Historical_v3_Bunds_Opt3_above150mm_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});