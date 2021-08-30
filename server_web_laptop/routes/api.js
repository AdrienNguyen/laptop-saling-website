var userController = require('../controllers/userController');
var laptopController = require('../controllers/laptopController');
var commentController = require('../controllers/commentController');
var evaluationController = require('../controllers/evaluationController');
var orderController = require('../controllers/orderController');
var productController = require('../controllers/productController');
var passport = require('passport');

module.exports = (app) => {
    // guest
    app.post('/api/user/signUp', userController.signUp);
    app.post('/api/user/signIn', userController.signIn);

    // laptop for guest
    app.get('/api/laptop', laptopController.index);
    app.get('/api/laptop/brand', laptopController.filterLaptopByBrand);
    app.get('/api/laptop/name', laptopController.filterLaptopByName);
    app.get('/api/laptop/filter', laptopController.filterLaptop)
    app.get('/api/laptop/:id',  laptopController.show);

    // laptop for admin store, update, delete

    app.post('/api/laptop/admin', passport.authenticate('jwt-admin', {session : false}), laptopController.store);
    app.put('/api/laptop/admin/:id', passport.authenticate('jwt-admin', {session : false}), laptopController.update);
    app.delete('/api/laptop/admin/:id', passport.authenticate('jwt-admin', {session : false}), laptopController.destroy);
    app.post('/api/laptop/admin/:id', passport.authenticate('jwt-admin', {session : false}), laptopController.addQuantity);

    // comment
    app.get('/api/comment/laptop/:id', commentController.index);
    app.get('/api/comment/:id', passport.authenticate('jwt-user', {session : false}), commentController.show);
    app.post('/api/comment', passport.authenticate('jwt-user', {session : false}), commentController.store);
    app.put('/api/comment/:id', passport.authenticate('jwt-user', {session : false}), commentController.update);
    app.delete('/api/comment/:id', passport.authenticate('jwt-user', {session : false}), commentController.destroy);

    // evaluation

    app.get('/api/evaluation/:id', evaluationController.index);
    app.post('/api/evaluation', passport.authenticate('jwt-user', {session : false}), evaluationController.store);
    app.put('/api/evaluation/:id', passport.authenticate('jwt-user', {session : false}), evaluationController.update);

    // order for admin

    app.get('/api/order/admin', passport.authenticate('jwt-admin', {session : false}), orderController.indexAdmin);
    app.get('/api/order/admin/status', passport.authenticate('jwt-admin', {session : false}), orderController.indexStatusAdmin);
    app.put('/api/order/admin/status/:id', passport.authenticate('jwt-admin', {session : false}), orderController.updateStatusAdmin);
    app.get('/api/order/admin/:id', passport.authenticate('jwt-admin', {session : false}), orderController.showAdmin);


    // order for user
        // get all order cua user
    app.get('/api/order', passport.authenticate('jwt-user', {session : false}), orderController.index);
        // chinh sua order cua user
    app.put('/api/order/:id', passport.authenticate('jwt-user', {session : false}), orderController.update);
        // dat order
    app.post('/api/order', passport.authenticate('jwt-user', {session : false}), orderController.store);


    // image
    //user


    app.get('/api/product', productController.index);
    app.post('/api/product', productController.store);
    app.put('/api/product/:id', productController.update);
    app.delete('/api/product/:id', productController.destroy);

}