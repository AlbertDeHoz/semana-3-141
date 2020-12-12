'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$08$GG8aPdVHB12.9F4ALecV4eccami1ZktxZ1OK.iYHSUTFRaNAp26Tq',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});

    }
};
