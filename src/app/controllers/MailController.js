const Mail = require('../../lib/Mail');

const Email = require('../models/Email');

class MailController {
    async store(req, res) {
        const { email, hotelPrice, fee, ticketPrice, adults, total } = req.body;

        await Mail.sendMail({
            to: `<${email}>`,
            subject: 'Pacote Escolhido',
            template: 'package',
            context: {
                hotel_price: hotelPrice,
                fee,
                ticket_price: ticketPrice,
                adults,
                total,
            },
        });

        await Email.create(email);

        return res.json({ ok: true });
    }
}

module.exports = new MailController();
