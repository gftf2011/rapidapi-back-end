const request = require("request");

const { promisify } = require('util');

class BookingController {
    async index(req, res) {
        const { d1, o1, dd1, ta } = req.params;
    
        const options = {
            method: 'GET',
            url: 'https://tripadvisor1.p.rapidapi.com/flights/create-session',
            qs: {currency: 'USD', ta, c: '0', d1, o1, dd1},
            headers: {
              'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
              'x-rapidapi-key': '26140af1d5msh00474a58e1c1593p1381d5jsne13bf4aa9324',
              useQueryString: true
            }
        };

        const { body: sessionBody } = await promisify(request)(options);

        const session = JSON.parse(sessionBody);

        const { sid } = session.search_params;

        var optionsPoll = {
            method: 'GET',
            url: 'https://tripadvisor1.p.rapidapi.com/flights/poll',
            qs: { sid, currency: 'USD', n: '15', ns: 'NON_STOP%2CONE_STOP', so: 'PRICE', o: '0'},
            headers: {
              'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
              'x-rapidapi-key': 'f864608ca3msh95a2a229bef0586p197316jsn77bb065d47e0',
              useQueryString: true
            }
        };

        const { body: pollBody } = await promisify(request)(optionsPoll);

        const poll = JSON.parse(pollBody);

        return res.json(poll);
    }
}

module.exports = new BookingController();
