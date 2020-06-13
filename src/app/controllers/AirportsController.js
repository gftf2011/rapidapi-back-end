const request = require("request");

const { promisify } = require('util');

class AirportsController {
    async index(req, res) {
        const { location: query = 'Los Angeles' } = req.params;
    
        const options = {
            method: 'GET',
            url: 'https://tripadvisor1.p.rapidapi.com/airports/search',
            qs: {locale: 'en_US', query},
            headers: {
              'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
              'x-rapidapi-key': 'f864608ca3msh95a2a229bef0586p197316jsn77bb065d47e0',
              useQueryString: true
            }
        };

        const { body } = await promisify(request)(options);

        return res.json(JSON.parse(body));
    }
}

module.exports = new AirportsController();
