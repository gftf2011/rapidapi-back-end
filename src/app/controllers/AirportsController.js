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
              'x-rapidapi-key': '26140af1d5msh00474a58e1c1593p1381d5jsne13bf4aa9324',
              useQueryString: true
            }
        };

        const { body } = await promisify(request)(options);

        return res.json(JSON.parse(body));
    }
}

module.exports = new AirportsController();
