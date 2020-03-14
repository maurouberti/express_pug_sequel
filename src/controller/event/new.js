const sequelize = require('./../../model/index')
const Event = sequelize.import('./../../model/event')

module.exports = (req, res) => {
    return res.render('event/new',  {
        title: 'Novo',
        msg: 'Novo evento',
        event: new Event()
    })
}