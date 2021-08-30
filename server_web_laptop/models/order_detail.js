'use strict'

module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('order_detail', {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        order_id : {
            type : DataTypes.INTEGER,
            allowNull : false    
        }, 
        laptop_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        quantity : {
            type : DataTypes.INTEGER,
            allowNull : false
        }

    }, {
        timestamps : false
    });
    OrderDetail.associate = (models) => {
        OrderDetail.belongsTo(models.order, {
            foreignKey : 'order_id',
            onDelete : 'CASCADE'
        });
        OrderDetail.belongsTo(models.laptop, {
            foreignKey : 'laptop_id',
            onDelete : 'CASCADE'
        });
    }
    return OrderDetail;
}