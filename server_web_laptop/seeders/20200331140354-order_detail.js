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
   return queryInterface.bulkInsert('order_details', [
     {
       order_id : 1,
       laptop_id : 1,
       quantity : 1
     },
     {
        order_id : 1,
        laptop_id : 2,
        quantity : 2
      },
      {
        order_id : 2,
        laptop_id : 7,
        quantity : 1
      },
      {
        order_id : 3,
        laptop_id : 10,
        quantity : 1
      },
      {
        order_id : 4,
        laptop_id : 11,
        quantity : 1
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
   return queryInterface.bulkDelete('order_details', null, {});
  }
};
