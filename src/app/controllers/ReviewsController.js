const request = require("request");

const { promisify } = require('util');

class ReviewsController {
    async index(req, res) {
        const { location_id } = req.params;
    
        var options = {
            method: 'GET',
            url: 'https://tripadvisor1.p.rapidapi.com/reviews/list',
            qs: {limit: '20', currency: 'USD', lang: 'en_US', location_id},
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

module.exports = new ReviewsController();
