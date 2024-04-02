const axios = require('axios');

const API_KEY = "AIzaSyBjOVAhPXjyGRkQP481wH2L4ORaIcnl4jA"

async function getCoords(address) {

    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}
        &key=AIzaSyDzwkmwAklKLTRYV3g6acBXNeyG7JGOyag`);

    const data = response.data;

    if(!data || data.status === "ZERO_RESULTS") {
        const error = 'Could not find location for specificed address';
        throw error;
    }

    const coordinates = data.results[0].geometry.location;

    return coordinates;
}

module.exports = getCoords;

