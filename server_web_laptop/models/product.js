'use strict'

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }, {
        timestamps : false
    });
    Product.associate = (models) => {

    }
    return Product;
}