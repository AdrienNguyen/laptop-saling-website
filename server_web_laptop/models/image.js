'use strict'
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('image', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        url_image : {
            type : DataTypes.STRING,
            allowNull : false
        },
        laptop_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        }

    }, {
        timestamps : false
    });

    Image.associate = (models) => {
        Image.belongsTo(models.laptop, {
            foreignKey : 'laptop_id',
            onDelete : 'CASCADE'
        });
    }
    return Image;
}