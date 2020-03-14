const sequelize = require('./../../model/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res) => {
    Event
        .findByPk(req.params.id)
        .then((event) => {
            return res.render('event/show', {
                title: 'Evento - ' + req.params.id,
                msg: 'Evento - ' + event.name,
                event: event
            })
        })
}