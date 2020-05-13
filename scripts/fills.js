// This module contains fill utilities for D3 maps. Due to CORS these aren't being imported yet, persay
// but are here for copy and paste for now.

// Across this module are 8 different shades in a gradient of fills, from key A being the lightest to key
// H being the darkest. There are also utilities here that map a value to a fill key given an array of
// 7 thresholds.

const getFillKey = (amt, thresholds) => {
    const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    for (const [i, thresh] of thresholds.entries()) {
        if (amt < thresh) return keys[i]
    }
    return 'H'
}

const fillsRed = {
    A: "#FFE5E5",
    B: "#FED7D7",
    C: "#FEB2B2",
    D: "#FC8181",
    E: "#F56565",
    F: "#E53E3E",
    G: "#C53030",
    H: "#9B2C2C",
}

const fillsGray = {
    A: '#F7FAFC',
    B: '#EDF2F7',
    C: '#E2E8F0',
    D: '#CBD5E0',
    E: '#A0AEC0',
    F: '#718096',
    G: '#4A5568',
    H: '#2D3748',
}

const fillsOrange = {
    A: '#FFFAF0',
    B: '#FEEBC8',
    C: '#FBD38D',
    D: '#F6AD55',
    E: '#ED8936',
    F: '#DD6B20',
    G: '#C05621',
    H: '#9C4221',
}

const fillsYellow = {
    A: '#FFFFF0',
    B: '#FEFCBF',
    C: '#FAF089',
    D: '#F6E05E',
    E: '#ECC94B',
    F: '#D69E2E',
    G: '#B7791F',
    H: '#975A16',
}

const fillsGreen = {
    A: '#F0FFF4',
    B: '#C6F6D5',
    C: '#9AE6B4',
    D: '#68D391',
    E: '#48BB78',
    F: '#38A169',
    G: '#2F855A',
    H: '#276749',
}

const fillsTeal = {
    A: '#E6FFFA',
    B: '#B2F5EA',
    C: '#81E6D9',
    D: '#4FD1C5',
    E: '#38B2AC',
    F: '#319795',
    G: '#2C7A7B',
    H: '#285E61',
}

const fillsBlue = {
    A: '#EBF8FF',
    B: '#BEE3F8',
    C: '#90CDF4',
    D: '#63B3ED',
    E: '#4299E1',
    F: '#3182CE',
    G: '#2B6CB0',
    H: '#2C5282',
}

const fillsIndigo = {
    A: '#EBF4FF',
    B: '#C3DAFE',
    C: '#A3BFFA',
    D: '#7F9CF5',
    E: '#667EEA',
    F: '#5A67D8',
    G: '#4C51BF',
    H: '#434190',
}

const fillsPurple = {
    A: '#FAF5FF',
    B: '#E9D8FD',
    C: '#D6BCFA',
    D: '#B794F4',
    E: '#9F7AEA',
    F: '#805AD5',
    G: '#6B46C1',
    H: '#553C9A',
}

const fillsPink = {
    A: '#FFF5F7',
    B: '#FED7E2',
    C: '#FBB6CE',
    D: '#F687B3',
    E: '#ED64A6',
    F: '#D53F8C',
    G: '#B83280',
    H: '#97266D',
}