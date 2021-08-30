'use strict';

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
    return queryInterface.bulkInsert('orders', [
        {
            user_id : 1,
            status : 0,
            address : "Quốc Oai - Hà Nội",
            name : "Nguyễn Danh Nhân",
            phone : 3669916015
        },
        {
            user_id : 2,
            status : 0,
            address : "Tiên Du - Bắc Ninh",
            name : "Nguyễn Trung Anh",
            phone : 987654321
        },
        {
            user_id : 3,
            status : 1,
            address : "Quế Võ - Bắc Ninh",
            name : "Trương Thị Ngọc",
            phone : 337478888
        },
        {
            user_id : 4,
            status : 0,
            address : "Phủ Lý - Hà Nam",
            name : "Nguyễn Văn Quân",
            phone : 339792000
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
   return queryInterface.bulkDelete('orders', null, {});
  }
};
