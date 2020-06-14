const request = require("request");

const { promisify } = require('util');

class HotelController {
    async index(req, res) {
        const { checkin, adults, nights, location: query = 'Los Angeles' } = req.params;
    
        const locationOptions = {
            method: 'GET',
            url: 'https://tripadvisor1.p.rapidapi.com/locations/search',
            qs: {
            location_id: '1',
            limit: '30',
            sort: 'relevance',
            offset: '0',
            lang: 'en_US',
            currency: 'USD',
            units: 'km',
            query
            },
            headers: {
            'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
            'x-rapidapi-key': '1397ac49e3msh7db6364537ccfdfp163568jsne5ddf29f76a5',
            useQueryString: true
            }
        };

        const { body: locationBody } = await promisify(request)(locationOptions);

        const { location_id } = JSON.parse(locationBody).data[0].result_object;

        const options = {
            method: 'GET',
            url: 'https://tripadvisor1.p.rapidapi.com/hotels/list',
            qs: {
            offset: '0',
            currency: 'USD',
            limit: '30',
            order: 'asc',
            lang: 'en_US',
            sort: 'recommended',
            location_id,
            adults,
            checkin,
            rooms: '1',
            nights,
            },
            headers: {
            'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
            'x-rapidapi-key': 'f864608ca3msh95a2a229bef0586p197316jsn77bb065d47e0',
            useQueryString: true
            }
        };

        const { body: hotelBody } = await promisify(request)(options);

        return res.json(JSON.parse(hotelBody));
    }
}

module.exports = new HotelController();
