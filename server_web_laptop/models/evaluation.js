'use strict'

module.exports = (sequelize, DataTypes) => {
    const Evaluation = sequelize.define('evaluation', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true, 
            autoIncrement : true,
            allowNull : false
        },
        rate : {
            type  : DataTypes.INTEGER,
        },
        user_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        laptop_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    }, {
        timestamps : false
    });
    Evaluation.associate = (models) => {
        Evaluation.belongsTo(models.user, {
            foreignKey : 'user_id',
            onDelete : 'CASCADE'
        });
        Evaluation.belongsTo(models.laptop, {
            foreignKey : 'laptop_id',
            onDelete : 'CASCADE'
        });
    }
    return Evaluation;
}