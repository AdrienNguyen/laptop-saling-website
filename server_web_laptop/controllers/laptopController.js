const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const index = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);

    const limit = pageSize ? pageSize : 20;
    const offset = page ? limit * page : 0;
    db.laptop.findAndCountAll({
        offset : offset,
        limit : limit,
        include : [
            {
                model : db.image
            }
        ],
        distinct : true
    }).then(function(data) {
        data.page = page ? page : 0;
        data.pageSize = limit;
        res.status(200).json({
            success : true,
            data : data
        })
    });
}

const filterLaptopByBrand = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.page);

    const limit = pageSize ? pageSize : 20;
    const offset = page ? page * limit : 0;
    const brand = req.query.brand ? req.query.brand : null;
    db.laptop.findAndCountAll({
        offset : offset,
        limit : limit,
        where : {
            brand : brand
        },
        include : [{
            model : db.image
        }],
        distinct : true
    }).then(function(data){
        if(data.rows.length === 0) {
            res.json({
                success : false,
                message : "Invalid laptop"
            });
        }else{
            res.json({
                success : true,
                data : data
            });
        }
    });
}

const filterLaptopByName = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.page);

    const limit = pageSize ? pageSize : 20;
    const offset = page ? page * limit : 0;
    const name = req.query.name ? req.query.name : null;
    db.laptop.findAndCountAll({
        offset : offset,
        limit : limit,
        where : {
            name : {
                [Op.like] : '%'+ name + '%'
            }
        },
        include : [{
            model : db.image
        }],
        distinct : true
    }).then(function(data){
        if(data.rows.length === 0) {
            res.json({
                success : false,
                message : "Invalid laptop"
            });
        }else{
            res.json({
                success : true,
                data : data
            });
        }
    });
}

const filterLaptop = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.page);

    const limit = pageSize ? pageSize : 20;
    const offset = page ? page * limit : 0;
    const cpu = req.query.cpu ? req.query.cpu : '';
    const ram = req.query.ram ? req.query.ram : '';
    const screen = req.query.screen ? req.query.screen : 15;
    const color = req.query.color ? req.query.color : '';
    const os = req.query.os ? req.query.os : '';
    const storage = req.query.storage ? req.query.storage : '';
    const pin = req.query.pin ? req.query.pin : '';
    const priceBottom = req.query.priceBottom ? req.query.priceBottom : 0;
    const priceTop = req.query.priceTop ? req.query.priceTop : 999999999;
    db.laptop.findAndCountAll({
        offset : offset,
        limit : limit,
        where : {
            price : {
                [Op.between] : [priceBottom, priceTop]
            },
            cpu : {
                [Op.like] : "%" + cpu + "%"
            },
            ram : {
                [Op.like] : "%" + ram + "%"
            },
            color : {
                [Op.like] : "%" + color + "%"
            },
            os : {
                [Op.like] : "%" + os + "%"
            },
            storage : {
                [Op.like] : "%" + storage + "%"
            },
            pin : {
                [Op.like] : "%" + pin + "%"
            },
            screen : {
                [Op.between] : [`${screen - 0.5}`, `${screen + 0.5}`]
            }
        },
        include : [{
            model : db.image
        }],
        distinct : true
    }).then(function(data){
        if(data.rows.length === 0) {
            res.json({
                success : false,
                message : "Invalid laptopxxx"
            });
        }else{
            res.json({
                success : true,
                data : data
            });
        }
    });
}

const show = (req, res) => {
    db.laptop.findOne({
        where : {
            id : req.params.id
        },
        include : [{
            model : db.image
        }]
    }).then(function(laptop) {
        if(laptop){
            res.json({
                success : true,
                data : laptop
            });
        }else {
            res.json({
                success : false,
                message : "Invalid laptop"
            });
        }
    });
}

const store = (req, res) => {
    db.laptop.create({
        name : req.body.name,
        cpu : req.body.cpu,
        ram : req.body.ram,
        screen : req.body.screen,
        color : req.body.color,
        os : req.body.os,
        storage : req.body.storage,
        graphic_card : req.body.graphic_card,
        description : req.body.description,
        pin : req.body.pin,
        price : req.body.price,
        sale : req.body.sale,
        material : req.body.material,
        brand : req.body.brand,
        quantity : req.body.quantity
    }).then(function(laptop) {
        if(laptop) {
            res.status(201).json({
                success : true,
                data : laptop
            })
        }else{
            res.json({
                success : false,
                message : "Add laptop failed"
            })
        }
    });
}

const update = (req, res) => {
    console.log("Editting");
    db.laptop.findOne({
        where : {
            id : req.params.id
        }
    }).then(function(laptop) {
        if(laptop) {    
            laptop.update({
                name : req.body.name,
                cpu : req.body.cpu,
                ram : req.body.ram,
                screen : req.body.screen,
                color : req.body.color,
                os : req.body.os,
                storage : req.body.storage,
                graphic_card : req.body.graphic_card,
                description : req.body.description,
                pin : req.body.pin,
                price : req.body.price,
                sale : req.body.sale,
                material : req.body.material,
                brand : req.body.brand,
                quantity : req.body.quantity
            })
            res.status(200).json({
                status : true,
                data : laptop
            })
        }else{
            res.status(200).json({
                status : false,
                message : "Invalid laptop"
            })
        }
    });
}

const destroy = (req, res) => {
    db.laptop.findOne({
        where : {
            id : req.params.id
        }
    }).then(function(laptop) {
        if(laptop) {
            laptop.destroy().then(function(){
                res.status(200).json({
                    success : true,
                    message : "Deleted laptop"
                })
            });
        }else{
            res.json({
                success : false,
                message : "Invalid laptop"
            });
        }
    });
}


const addQuantity = (req, res) => {
    db.laptop.findOne({
        where : {
            id : req.params.id
        }
    }).then(function(laptop){
        if(laptop) {
            laptop.update({
                quantity : laptop.quantity + req.body.quantity
            }).then(function(data){
                res.json({
                    success : true,
                    data : data
                })
            })
        }else{
            res.json({
                success : false,
                message : "Invalid laptop"
            })
        }
    });
}

const laptopController = {}

laptopController.index = index;
laptopController.filterLaptopByBrand = filterLaptopByBrand;
laptopController.filterLaptopByName = filterLaptopByName;
laptopController.filterLaptop = filterLaptop;
laptopController.show = show;
laptopController.store = store;
laptopController.update = update;
laptopController.destroy = destroy;
laptopController.addQuantity = addQuantity;

module.exports = laptopController;