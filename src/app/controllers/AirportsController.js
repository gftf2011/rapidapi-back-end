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
              'x-rapidapi-key': '1397ac49e3msh7db6364537ccfdfp163568jsne5ddf29f76a5',
              useQueryString: true
            }
        };

        const { body } = await promisify(request)(options);

        return res.json(JSON.parse(body));
    }
}

module.exports = new AirportsController();
