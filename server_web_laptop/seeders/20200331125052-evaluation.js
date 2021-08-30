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
   return queryInterface.bulkInsert('evaluations', [
       {
            rate : 5,
            user_id : 1,
            laptop_id : 1
       },
       {
            rate : 4,
            user_id : 2,
            laptop_id : 1
        },
        {
            rate : 4,
            user_id : 3,
            laptop_id : 1
        },
        {
            rate : 5,
            user_id : 1,
            laptop_id : 2
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
   return queryInterface.bulkDelete('evaluations', null, {});
  }
};
