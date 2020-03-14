const sequelize = require('./../../model/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res) => {
    Event
        .findAll()
        .then((events) => {
            return res.render('event/index', {
                title: 'Lista',
                msg: 'Lista de eventos',
                events: events
            })        
        })
}