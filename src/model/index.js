const Sequelize = require('sequelize')

// const sequelize = new Sequelize('mysql://root:123456@mysql:3306/sequelize')
const sequelize = new Sequelize('sequelize', 'root', '123456',  {
    host: 'mysql',
    dialect: 'mysql',
    // operatorsAliases: Sequelize.Op,
    // pool: {
    //     max:
    //     min:
    //     acquire:
    //     idle:
    // },
})
sequelize
    .authenticate()
    .then(() => console.log('MySQL ok'))
    .catch(() => console.log('MySQL erro'))

sequelize.sync()

module.exports = sequelize