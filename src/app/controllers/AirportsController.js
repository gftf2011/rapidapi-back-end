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
              "x-rapidapi-key": "fa72e3c144msh6a1c4199179cb42p1816f1jsn51feda4ef7c7",
              useQueryString: true
            }
        };

        const { body } = await promisify(request)(options);

        return res.json(JSON.parse(body));
    }
}

module.exports = new AirportsController();
