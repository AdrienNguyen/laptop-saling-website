const db = require('../models');

const index = (req, res) => {
    db.product.findAll({}).then((data) => {
        res.json({
            success : true,
            data : data
        })
    });
}

const store = (req, res) => {
    db.product.create({
        name : req.body.name
    }).then((data) => {
        res.json({
            success : true,
            data : data
        })
    })
}

const update = (req, res) => {
    db.product.findOne({
        where : {
            id : req.params.id
        }
    }).then((data) => {
        if(!data) {
            res.json({
                success : false,
                message : "Invalid product"
            });
        }else{
            data.update({
                name : req.body.name
            });
            res.json({
                success : true,
                data : data
            })
        }
    })
}

const destroy = (req, res) => {
    db.product.findOne({
        where : {
            id : req.params.id
        }
    }).then((data) => {
        if(!data) {
            res.json({
                success : false,
                message : "Invalid product"
            });
        }else{
            data.destroy().then(function(){
                res.json({
                    success : true,
                    message : "Deleted product"
                })
            });
        }
    })
}
const productController = {}
productController.index = index;
productController.store = store;
productController.update = update;
productController.destroy = destroy;

module.exports = productController;