'use strict'

module.exports = (sequelize, DataTypes) => {
    const Laptop = sequelize.define('laptop', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        cpu : {
            type : DataTypes.STRING,
            allowNull : false
        },
        ram : {
            type : DataTypes.STRING,
            allowNull : false
        },
        screen : {
            type : DataTypes.STRING,
            allowNull : false
        },
        color : {
            type : DataTypes.STRING,
            allowNull : false
        },
        os : {
            type : DataTypes.STRING,
            allowNull : false
        },
        storage : {
            type : DataTypes.STRING,
            allowNull : false
        },
        graphic_card : {
            type : DataTypes.STRING,
            allowNull : false
        },
        description : {
            type : DataTypes.TEXT,
            allowNull : true
        },
        pin : {
            type : DataTypes.STRING,
            allowNull : false
        },
        price : {
            type : DataTypes.FLOAT,
            allowNull : false
        },
        sale : {
            type : DataTypes.FLOAT,
            allowNull : true,
            defaultvalue : 0
        },
        material : {
            type : DataTypes.STRING,
            allowNull : false
        },
        brand : {
            type : DataTypes.STRING,
            allowNull : false
        },
        quantity : {
            type : DataTypes.INTEGER,
            allowNull : false,
        }
    }, {
        timestamps : false
    });
    
    Laptop.associate = (models) => {
        Laptop.hasMany(models.image, {
            foreignKey : 'laptop_id'
        });
        Laptop.hasMany(models.comment, {
            foreignKey : 'laptop_id'
        });
        Laptop.hasMany(models.evaluation, {
            foreignKey : 'laptop_id'
        });
        Laptop.hasMany(models.order_detail, {
            foreignKey : 'laptop_id'
        });;
    }
    return Laptop;
}