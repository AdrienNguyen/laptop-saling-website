const db = require('../models');

const indexAdmin = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);

    const limit = pageSize ? pageSize : 20;
    const offset = page ? limit * page : 0;
    db.order.findAndCountAll({
        offset : offset,
        limit : limit,
        include : [{
            model : db.user
        }]
    }).then(function(data) {
        data.page = page ? page : 0;
        data.pageSize = limit;
        res.status(200).json({
            success : true,
            data : data
        })
    });
}

const indexStatusAdmin = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);

    const limit = pageSize ? pageSize : 20;
    const offset = page ? limit * page : 0;
    db.order.findAndCountAll({
        offset : offset,
        limit : limit,
        where : {
            status : req.query.status
        }
    }).then(function(data) {
        data.page = page ? page : 0;
        data.pageSize = limit;
        res.status(200).json({
            success : true,
            data : data
        })
    });
}

const updateStatusAdmin = (req, res) => {
    db.order.findOne({
        where : {
            id : req.params.id
        }
    }).then(function(order) {
        if(order) {
            order.update({
                status : req.body.status
            });
            res.json({
                success : true,
                data : order
            });
        } else {
            res.json({
                success : false,
                message : 'Invalid order'
            })
        }
    });
}

const showAdmin = (req, res) => {
    db.order.findOne({
        where : {
            id : req.params.id
        },
        include : [{
            model : db.order_detail,
            include : {
                model : db.laptop
            }
        }]
    }).then(function(order) {
        if(order) {
            res.json({
                success : true,
                data: order
            })
        } else {
            res.json({
                success : false,
                message : 'Invalid order'
            })
        }
    })
}


const index = (req, res) => {
    db.order.findAll({
        where : {
            user_id : req.user.id
        },
        include : [{
            model : db.order_detail,
            include : {
                model : db.laptop
            }
        }]
    }).then(function(orders) {
        if(orders.length !== 0) {
            res.json({
                success : true,
                data : orders
            })
        } else {
            res.json({
                success : false,
                message : "Invalid order"
            });
        }
    })
}

const update = (req, res) => {
    db.order.findOne({
        where : {
            user_id : req.user.id,
            id : req.params.id
        }
    }).then(function(order) {
        if(order) {
            order.update({
                status : req.body.status
            });
            res.json({
                success : true,
                data : order
            })
        } else {
            res.json({
                success : false,
                message : "Invalid order"
            })
        }
    });
}

const store = (req, res) => {
    db.order.create({
        user_id : req.user.id,
        address : req.body.address,
        name : req.body.name,
        phone : req.body.phone
    }).then(async function(order) {
        const laptops = req.body.laptops;
        order.dataValues.laptops = [];
        for(var i in laptops) {
            await db.order_detail.create({
                order_id : order.id,
                laptop_id : laptops[i].id,
                quantity : laptops[i].quantity,
               
            }).then(function(laptop) {
                order.dataValues.laptops.push(laptop);
            });
        }
        res.json({
            success : true,
            data : order
        });
    });
}
const orderController = {}

orderController.indexAdmin = indexAdmin;
orderController.indexStatusAdmin = indexStatusAdmin;
orderController.updateStatusAdmin = updateStatusAdmin;
orderController.showAdmin = showAdmin;
orderController.index = index;
orderController.update = update;
orderController.store = store;

module.exports = orderController;