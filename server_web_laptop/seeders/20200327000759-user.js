'use strict';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10)

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('users', [
        {
            name : "phuong1",
            email : "phuong1@gmail.com",
            password : bcrypt.hashSync("123456", salt),
            address : "Yên Phong - Bắc Ninh",
            phone : 372109881,
            gender : 1,
            url_image : "https://static1.bestie.vn/Mlog/ImageContent/201909/dau-hieu-cua-nguoi-chua-truong-thanh-de-avatar-den-khi-that-tinh-5f32ad.jpg",
            role : 1,
            status : 0
        },
        {
          name : "phuong2",
          email : "phuong2@gmail.com",
          password : bcrypt.hashSync("123456", salt),
          address : "Yên Phong - Bắc Ninh",
          phone : 372109881,
          gender : 1,
          url_image : "https://static1.bestie.vn/Mlog/ImageContent/201909/dau-hieu-cua-nguoi-chua-truong-thanh-de-avatar-den-khi-that-tinh-5f32ad.jpg",
          role : 0,
          status : 0
        },
        {
          name : "phuong3",
          email : "phuong3@gmail.com",
          password : bcrypt.hashSync("123456", salt),
          address : "Yên Phong - Bắc Ninh",
          phone : 372109881,
          gender : 1,
          url_image : "https://static1.bestie.vn/Mlog/ImageContent/201909/dau-hieu-cua-nguoi-chua-truong-thanh-de-avatar-den-khi-that-tinh-5f32ad.jpg",
          role : 0,
          status : 0
        },
        {
          name : "phuong4",
          email : "phuong4@gmail.com",
          password : bcrypt.hashSync("123456", salt),
          address : "Yên Phong - Bắc Ninh",
          phone : 372109881,
          gender : 1,
          url_image : "https://static1.bestie.vn/Mlog/ImageContent/201909/dau-hieu-cua-nguoi-chua-truong-thanh-de-avatar-den-khi-that-tinh-5f32ad.jpg",
          role : 0,
          status : 0
        },
        {
          name : "phuong5",
          email : "phuong5@gmail.com",
          password : bcrypt.hashSync("123456", salt),
          address : "Yên Phong - Bắc Ninh",
          phone : 372109881,
          gender : 1,
          url_image : "https://static1.bestie.vn/Mlog/ImageContent/201909/dau-hieu-cua-nguoi-chua-truong-thanh-de-avatar-den-khi-that-tinh-5f32ad.jpg",
          role : 0,
          status : 0
        },
        {
          name : "phuong6",
          email : "phuong6@gmail.com",
          password : bcrypt.hashSync("123456", salt),
          address : "Yên Phong - Bắc Ninh",
          phone : 372109881,
          gender : 0,
          url_image : "https://static1.bestie.vn/Mlog/ImageContent/201909/dau-hieu-cua-nguoi-chua-truong-thanh-de-avatar-den-khi-that-tinh-5f32ad.jpg",
          role : 1,
          status : 0
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('users', null, {});
  }
};
