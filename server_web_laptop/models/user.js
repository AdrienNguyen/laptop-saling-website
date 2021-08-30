'use strict'

module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define('user', {
        id : {
            type : Datatypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        email : {
            type : Datatypes.STRING,
            allowNull : false
        },
        password : {
            type : Datatypes.STRING,
            allowNull : false
        },
        name : {
            type : Datatypes.STRING,
            allowNull : false
        }, 
        address : {
            type : Datatypes.TEXT,
            allowNull : false
        },
        phone : {
            type : Datatypes.BIGINT,
            allowNull : false
        },
        gender : {
            type : Datatypes.INTEGER
        },
        url_image : {
            type : Datatypes.STRING
        },
        role : {
            type : Datatypes.INTEGER,
            defaultValue : 0
        },
        status : {
            type : Datatypes.INTEGER,
            defaultValue : 0
        }
    }, {
        timestamps : false
    });
    User.associate = (models) => {
        User.hasMany(models.comment, {
            foreignKey : 'user_id'
        });
        User.hasMany(models.evaluation, {
            foreignKey : 'user_id'
        });
    }
    return User;
}