'use strict'

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        content : {
            type : DataTypes.TEXT,
            allowNull : false
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
        timestamps : true
    });
    Comment.associate = (models) => {
        Comment.belongsTo(models.user, {
            foreignKey : 'user_id',
            onDelete : 'CASCADE'
        });

        Comment.belongsTo(models.laptop, {
            foreignKey : 'laptop_id',
            onDelete : 'CASCADE'
        });
    }
    return Comment;

}