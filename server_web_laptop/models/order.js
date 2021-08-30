'use strict'

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        user_id : {
            type : DataTypes.INTEGER,
            allowNull : false    
        },
        status : {
            type : DataTypes.INTEGER,
            defaultValue : 0,
            allowNull : true
        },
        address : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        phone : {
            type : DataTypes.BIGINT,
            allowNull : false
        }

    }, {
        timestamps : true
    });
    Order.associate = (models) => {
        Order.belongsTo(models.user, {
            foreignKey : 'user_id',
            onDelete : 'CASCADE'
        });
        Order.hasMany(models.order_detail, {
            foreignKey : 'order_id'
        });
    }
    return Order;
}