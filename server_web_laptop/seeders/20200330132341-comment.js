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
    return queryInterface.bulkInsert('comments', [
        {
                content : "Laptop này xịn thật",
                user_id : 1,
                laptop_id : 2
        },
        {
            content : "Laptop này có tốc độ xử lý cao đấy",
            user_id : 1,
            laptop_id : 2
            },
            {
            content : "Laptop này chất lừ nhỉ",
            user_id : 2,
            laptop_id : 2
            },
            {
                content : "Laptop này giá hạt rẻ quá",
                user_id : 2,
                laptop_id : 3
            },
            {
                content : "Đúng là đồ rẻ như cho ^^",
                user_id : 3,
                laptop_id : 3
            },
            {
                content : "Laptop đã đắt còn chạy chậm v~~",
                user_id : 4,
                laptop_id : 4
            },
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
        return queryInterface.bulkDelete('comments', null, {});
  }
};
