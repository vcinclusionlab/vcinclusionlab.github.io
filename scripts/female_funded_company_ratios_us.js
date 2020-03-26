const fills = {
    HIGH: '#59253A',
    LOW: '#2D4159',
    MEDIUM: '#895061',
    defaultFill: 'blue'
}

const getFillKey = ratio => {
    if (ratio > 33) return 'HIGH'
    if (ratio < 28) return 'LOW'
    return 'MEDIUM'
}

const formatRawData = ([state, vals]) => {
    const ratio = 100 * vals['funded_companies_f'] / (vals['funded_companies_f'] + vals['funded_companies_m'])
    return {
        state,
        ratio,
        fillKey: getFillKey(ratio)
    }
}

const rawData = 'json_data/funding_rounds_us.json'
const data = Object.entries(rawData).map(formatRawData) // map formatter over raw

const map = new Datamap({
    element: document.getElementById('container'),
    scope: 'usa',
    fills,
    data,
    geographyConfig: {
        popupTemplate: function (geo, data) {
            return ['<div class="hoverinfo"><strong>',
                data.ratio + '% of funded companies in ' + geo.properties.name,
                'have female leadership',
                '</strong></div>'
            ].join('');
        }
    }
})
map.legend()
alert("DONE")