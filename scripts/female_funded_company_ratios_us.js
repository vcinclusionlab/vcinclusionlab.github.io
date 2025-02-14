const fills = {
    A: "#FFE5E5",
    B: "#FED7D7",
    C: "#FEB2B2",
    D: "#FC8181",
    E: "#F56565",
    F: "#E53E3E",
    G: "#C53030",
    H: "#9B2C2C",
}

const thresholds = [24, 28, 29.5, 32.1, 33.2, 34, 40]

const getFillKey = (amt, thresholds) => {
    const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    for (const [i, thresh] of thresholds.entries()) {
        if (amt < thresh) return keys[i]
    }
    return 'H'
}

const rawData = {
    "CA": {
        "funded_companies_f": 5898,
        "funding_rounds_f": 15503,
        "funded_companies_m": 12082,
        "funding_rounds_m": 24334
    },
    "IN": {
        "funded_companies_f": 138,
        "funding_rounds_f": 192,
        "funded_companies_m": 279,
        "funding_rounds_m": 465
    },
    "WY": {
        "funded_companies_f": 7,
        "funding_rounds_f": 7,
        "funded_companies_m": 29,
        "funding_rounds_m": 41
    },
    "NY": {
        "funded_companies_f": 2517,
        "funding_rounds_f": 5276,
        "funded_companies_m": 4236,
        "funding_rounds_m": 7340
    },
    "GA": {
        "funded_companies_f": 371,
        "funding_rounds_f": 682,
        "funded_companies_m": 806,
        "funding_rounds_m": 1228
    },
    "IL": {
        "funded_companies_f": 683,
        "funding_rounds_f": 1081,
        "funded_companies_m": 1205,
        "funding_rounds_m": 1709
    },
    "CO": {
        "funded_companies_f": 429,
        "funding_rounds_f": 939,
        "funded_companies_m": 1022,
        "funding_rounds_m": 1834
    },
    "VA": {
        "funded_companies_f": 368,
        "funding_rounds_f": 601,
        "funded_companies_m": 741,
        "funding_rounds_m": 1215
    },
    "AZ": {
        "funded_companies_f": 194,
        "funding_rounds_f": 328,
        "funded_companies_m": 471,
        "funding_rounds_m": 658
    },
    "MA": {
        "funded_companies_f": 1189,
        "funding_rounds_f": 3218,
        "funded_companies_m": 2185,
        "funding_rounds_m": 4907
    },
    "FL": {
        "funded_companies_f": 554,
        "funding_rounds_f": 860,
        "funded_companies_m": 1415,
        "funding_rounds_m": 1923
    },
    "WA": {
        "funded_companies_f": 602,
        "funding_rounds_f": 1398,
        "funded_companies_m": 1070,
        "funding_rounds_m": 2096
    },
    "OH": {
        "funded_companies_f": 340,
        "funding_rounds_f": 529,
        "funded_companies_m": 680,
        "funding_rounds_m": 1051
    },
    "PA": {
        "funded_companies_f": 511,
        "funding_rounds_f": 1039,
        "funded_companies_m": 1070,
        "funding_rounds_m": 1894
    },
    "MN": {
        "funded_companies_f": 223,
        "funding_rounds_f": 395,
        "funded_companies_m": 471,
        "funding_rounds_m": 892
    },
    "CT": {
        "funded_companies_f": 198,
        "funding_rounds_f": 289,
        "funded_companies_m": 403,
        "funding_rounds_m": 612
    },
    "SC": {
        "funded_companies_f": 80,
        "funding_rounds_f": 106,
        "funded_companies_m": 169,
        "funding_rounds_m": 234
    },
    "TX": {
        "funded_companies_f": 920,
        "funding_rounds_f": 1668,
        "funded_companies_m": 2222,
        "funding_rounds_m": 3474
    },
    "MO": {
        "funded_companies_f": 183,
        "funding_rounds_f": 361,
        "funded_companies_m": 333,
        "funding_rounds_m": 560
    },
    "DC": {
        "funded_companies_f": 189,
        "funding_rounds_f": 333,
        "funded_companies_m": 271,
        "funding_rounds_m": 400
    },
    "TN": {
        "funded_companies_f": 219,
        "funding_rounds_f": 416,
        "funded_companies_m": 439,
        "funding_rounds_m": 784
    },
    "MI": {
        "funded_companies_f": 186,
        "funding_rounds_f": 307,
        "funded_companies_m": 473,
        "funding_rounds_m": 715
    },
    "NE": {
        "funded_companies_f": 51,
        "funding_rounds_f": 63,
        "funded_companies_m": 103,
        "funding_rounds_m": 125
    },
    "OR": {
        "funded_companies_f": 205,
        "funding_rounds_f": 431,
        "funded_companies_m": 403,
        "funding_rounds_m": 699
    },
    "NJ": {
        "funded_companies_f": 322,
        "funding_rounds_f": 503,
        "funded_companies_m": 747,
        "funding_rounds_m": 1027
    },
    "MD": {
        "funded_companies_f": 287,
        "funding_rounds_f": 607,
        "funded_companies_m": 570,
        "funding_rounds_m": 1026
    },
    "NC": {
        "funded_companies_f": 279,
        "funding_rounds_f": 492,
        "funded_companies_m": 654,
        "funding_rounds_m": 1170
    },
    "NM": {
        "funded_companies_f": 34,
        "funding_rounds_f": 86,
        "funded_companies_m": 72,
        "funding_rounds_m": 127
    },
    "NV": {
        "funded_companies_f": 97,
        "funding_rounds_f": 153,
        "funded_companies_m": 276,
        "funding_rounds_m": 351
    },
    "ID": {
        "funded_companies_f": 27,
        "funding_rounds_f": 45,
        "funded_companies_m": 83,
        "funding_rounds_m": 120
    },
    "AL": {
        "funded_companies_f": 57,
        "funding_rounds_f": 53,
        "funded_companies_m": 141,
        "funding_rounds_m": 172
    },
    "LA": {
        "funded_companies_f": 42,
        "funding_rounds_f": 65,
        "funded_companies_m": 121,
        "funding_rounds_m": 145
    },
    "IA": {
        "funded_companies_f": 45,
        "funding_rounds_f": 53,
        "funded_companies_m": 105,
        "funding_rounds_m": 173
    },
    "UT": {
        "funded_companies_f": 141,
        "funding_rounds_f": 317,
        "funded_companies_m": 452,
        "funding_rounds_m": 809
    },
    "DE": {
        "funded_companies_f": 52,
        "funding_rounds_f": 77,
        "funded_companies_m": 139,
        "funding_rounds_m": 225
    },
    "KY": {
        "funded_companies_f": 60,
        "funding_rounds_f": 86,
        "funded_companies_m": 170,
        "funding_rounds_m": 243
    },
    "WI": {
        "funded_companies_f": 159,
        "funding_rounds_f": 280,
        "funded_companies_m": 319,
        "funding_rounds_m": 697
    },
    "MT": {
        "funded_companies_f": 10,
        "funding_rounds_f": 15,
        "funded_companies_m": 45,
        "funding_rounds_m": 87
    },
    "RI": {
        "funded_companies_f": 52,
        "funding_rounds_f": 101,
        "funded_companies_m": 78,
        "funding_rounds_m": 153
    },
    "KS": {
        "funded_companies_f": 61,
        "funding_rounds_f": 87,
        "funded_companies_m": 139,
        "funding_rounds_m": 202
    },
    "NH": {
        "funded_companies_f": 49,
        "funding_rounds_f": 72,
        "funded_companies_m": 131,
        "funding_rounds_m": 261
    },
    "ME": {
        "funded_companies_f": 39,
        "funding_rounds_f": 81,
        "funded_companies_m": 77,
        "funding_rounds_m": 135
    },
    "SD": {
        "funded_companies_f": 19,
        "funding_rounds_f": 17,
        "funded_companies_m": 23,
        "funding_rounds_m": 34
    },
    "OK": {
        "funded_companies_f": 42,
        "funding_rounds_f": 37,
        "funded_companies_m": 119,
        "funding_rounds_m": 136
    },
    "VT": {
        "funded_companies_f": 27,
        "funding_rounds_f": 47,
        "funded_companies_m": 51,
        "funding_rounds_m": 102
    },
    "WV": {
        "funded_companies_f": 4,
        "funding_rounds_f": 8,
        "funded_companies_m": 22,
        "funding_rounds_m": 36
    },
    "AR": {
        "funded_companies_f": 83,
        "funding_rounds_f": 95,
        "funded_companies_m": 132,
        "funding_rounds_m": 162
    },
    "ND": {
        "funded_companies_f": 10,
        "funding_rounds_f": 13,
        "funded_companies_m": 24,
        "funding_rounds_m": 34
    },
    "HI": {
        "funded_companies_f": 22,
        "funding_rounds_f": 31,
        "funded_companies_m": 71,
        "funding_rounds_m": 110
    },
    "AK": {
        "funded_companies_f": 7,
        "funding_rounds_f": 12,
        "funded_companies_m": 17,
        "funding_rounds_m": 23
    },
    "MS": {
        "funded_companies_f": 10,
        "funding_rounds_f": 6,
        "funded_companies_m": 33,
        "funding_rounds_m": 37
    },
    "AE": {
        "funded_companies_f": 0,
        "funding_rounds_f": 0,
        "funded_companies_m": 1,
        "funding_rounds_m": 1
    }
}
const processData = raw => {
    const data = {}
    for (let state in raw) {
        const val = raw[state]
        const ratio = 100 * val['funded_companies_f'] / (val['funded_companies_f'] + val['funded_companies_m'])
        data[state] = {
            ratio,
            total: val['funded_companies_f'] + val['funded_companies_m'],
            fillKey: getFillKey(ratio, thresholds)
        }
    }
    return data
}

const data = processData(rawData)


const map = new Datamap({
    element: document.getElementById('container'),
    scope: 'usa',
    fills,
    data,
    geographyConfig: {
        popupTemplate: function (geo, data) {
            return ['<div class="hoverinfo"><strong>',
                data.ratio.toFixed(1) + '% of the ' + data.total + ' funded companies in ' + geo.properties.name,
                ' have female leadership',
                '</strong></div>'
            ].join('');
        }
    }
})
// map.legend()