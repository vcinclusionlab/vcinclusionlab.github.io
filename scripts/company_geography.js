$.ajax({
        url:'data/funded_companies.csv',
        success: function (data) {
                var funded_companies_csv_string = data;
                var funded_companies = $.csv.toArray(funded_companies_csv_string);
                alert("done");
        },
});



var map = new Datamap({
    element: document.getElementById('container'),
    scope: 'usa',
    fills: {
        HIGH: '#59253A',
        LOW: '#2D4159',
        MEDIUM: '#895061',
        defaultFill: 'blue'
    },
    data: {"NM": {"numberOfFundedCompanes": 116, "averageFunding": 12.73, "fillKey": "LOW"}, "AK": {"numberOfFundedCompanes": 18, "averageFunding": 6.37, "fillKey": "LOW"}, "NY": {"numberOfFundedCompanes": 6318, "averageFunding": 27.58, "fillKey": "HIGH"}, "KS": {"numberOfFundedCompanes": 157, "averageFunding": 15.63, "fillKey": "LOW"}, "OR": {"numberOfFundedCompanes": 549, "averageFunding": 13.64, "fillKey": "MEDIUM"}, "NE": {"numberOfFundedCompanes": 134, "averageFunding": 6.54, "fillKey": "LOW"}, "LA": {"numberOfFundedCompanes": 132, "averageFunding": 6.69, "fillKey": "LOW"}, "MA": {"numberOfFundedCompanes": 3654, "averageFunding": 30.44, "fillKey": "HIGH"}, "ID": {"numberOfFundedCompanes": 104, "averageFunding": 10.21, "fillKey": "LOW"}, "OH": {"numberOfFundedCompanes": 892, "averageFunding": 14.33, "fillKey": "MEDIUM"}, "VT": {"numberOfFundedCompanes": 71, "averageFunding": 9.61, "fillKey": "LOW"}, "DE": {"numberOfFundedCompanes": 174, "averageFunding": 5.12, "fillKey": "LOW"}, "SD": {"numberOfFundedCompanes": 27, "averageFunding": 6.24, "fillKey": "LOW"}, "OK": {"numberOfFundedCompanes": 111, "averageFunding": 14.36, "fillKey": "LOW"}, "IL": {"numberOfFundedCompanes": 1446, "averageFunding": 26.26, "fillKey": "HIGH"}, "WI": {"numberOfFundedCompanes": 522, "averageFunding": 10.95, "fillKey": "MEDIUM"}, "MT": {"numberOfFundedCompanes": 59, "averageFunding": 9.14, "fillKey": "LOW"}, "VA": {"numberOfFundedCompanes": 990, "averageFunding": 28.6, "fillKey": "MEDIUM"}, "TX": {"numberOfFundedCompanes": 2838, "averageFunding": 31.91, "fillKey": "HIGH"}, "MD": {"numberOfFundedCompanes": 826, "averageFunding": 25.19, "fillKey": "MEDIUM"}, "SC": {"numberOfFundedCompanes": 225, "averageFunding": 12.56, "fillKey": "LOW"}, "TN": {"numberOfFundedCompanes": 620, "averageFunding": 11.35, "fillKey": "MEDIUM"}, "NC": {"numberOfFundedCompanes": 943, "averageFunding": 20.68, "fillKey": "MEDIUM"}, "AR": {"numberOfFundedCompanes": 113, "averageFunding": 5.04, "fillKey": "LOW"}, "WA": {"numberOfFundedCompanes": 1752, "averageFunding": 24.28, "fillKey": "HIGH"}, "FL": {"numberOfFundedCompanes": 1636, "averageFunding": 17.3, "fillKey": "HIGH"}, "MO": {"numberOfFundedCompanes": 430, "averageFunding": 22.53, "fillKey": "LOW"}, "MS": {"numberOfFundedCompanes": 35, "averageFunding": 10.58, "fillKey": "LOW"}, "KY": {"numberOfFundedCompanes": 231, "averageFunding": 10.44, "fillKey": "LOW"}, "ME": {"numberOfFundedCompanes": 116, "averageFunding": 9.61, "fillKey": "LOW"}, "PA": {"numberOfFundedCompanes": 1351, "averageFunding": 19.23, "fillKey": "HIGH"}, "AZ": {"numberOfFundedCompanes": 555, "averageFunding": 19.41, "fillKey": "MEDIUM"}, "MI": {"numberOfFundedCompanes": 559, "averageFunding": 13.01, "fillKey": "MEDIUM"}, "WV": {"numberOfFundedCompanes": 24, "averageFunding": 11.41, "fillKey": "LOW"}, "CA": {"numberOfFundedCompanes": 18091, "averageFunding": 32.62, "fillKey": "HIGH"}, "WY": {"numberOfFundedCompanes": 40, "averageFunding": 3.59, "fillKey": "LOW"}, "NJ": {"numberOfFundedCompanes": 845, "averageFunding": 26.24, "fillKey": "MEDIUM"}, "HI": {"numberOfFundedCompanes": 98, "averageFunding": 6.69, "fillKey": "LOW"}, "CT": {"numberOfFundedCompanes": 573, "averageFunding": 36.67, "fillKey": "MEDIUM"}, "IA": {"numberOfFundedCompanes": 137, "averageFunding": 13.02, "fillKey": "LOW"}, "DC": {"numberOfFundedCompanes": 412, "averageFunding": 21.39, "fillKey": "LOW"}, "CO": {"numberOfFundedCompanes": 1402, "averageFunding": 21.31, "fillKey": "HIGH"}, "IN": {"numberOfFundedCompanes": 383, "averageFunding": 13.09, "fillKey": "LOW"}, "NH": {"numberOfFundedCompanes": 185, "averageFunding": 17.91, "fillKey": "LOW"}, "GA": {"numberOfFundedCompanes": 1007, "averageFunding": 27.79, "fillKey": "HIGH"}, "NV": {"numberOfFundedCompanes": 311, "averageFunding": 20.75, "fillKey": "LOW"}, "MN": {"numberOfFundedCompanes": 649, "averageFunding": 17.93, "fillKey": "MEDIUM"}, "UT": {"numberOfFundedCompanes": 574, "averageFunding": 28.28, "fillKey": "MEDIUM"}, "RI": {"numberOfFundedCompanes": 134, "averageFunding": 9.72, "fillKey": "LOW"}, "ND": {"numberOfFundedCompanes": 29, "averageFunding": 8.48, "fillKey": "LOW"}, "AL": {"numberOfFundedCompanes": 172, "averageFunding": 19.07, "fillKey": "LOW"}},
    geographyConfig: {
        popupTemplate: function(geo, data) {
            return ['<div class="hoverinfo"><strong>',
                    'Number of funded companies in ' + geo.properties.name,
                    ': ' + data.numberOfFundedCompanes + ' with average funding (Million USD) of ' + data.averageFunding,
                    '</strong></div>'].join('');
        }
    }
});
map.legend();
