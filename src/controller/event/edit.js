const sequelize = require('./../../model/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res) => {
    Event
        .findByPk(req.params.id)
        .then((event) => {
            return res.render('event/edit', { 
                title: 'Editar - ' + req.params.id,
                msg: 'Editando ' + event.name,
                event: event
            })
        })
}