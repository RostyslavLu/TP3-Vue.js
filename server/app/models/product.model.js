module.exports = (connex, Sequelize) => {
    const Product = connex.define('product', {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        photo: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        }
    });
    return Product;
}