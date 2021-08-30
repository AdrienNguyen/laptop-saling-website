const db = require('../models');

const index = (req, res) => {
    db.evaluation.findAll({
        where : {
            laptop_id : req.params.id
        }
    }).then(function(evaluations) {
        if(evaluations.length === 0) {
            res.json({
                success : true,
                data : {
                    result : 0
                }
            })
        }
        let point = 0;
        evaluations.forEach(evaluation => {
            point += evaluation.rate;
        });
        res.json({
            success : true,
            data : {
                result : Math.round(point/evaluations.length)
            }
        });
    });
}

const store = (req, res) => {
    db.evaluation.findOne({
        where : {
            user_id : req.user.id,
            laptop_id : req.body.laptop_id
        }
    }).then(function(evaluation) {
        if(evaluation) {
            res.json({
                success : false,
                message : 'Valid evaluation'
            })
        } else {
            db.evaluation.create({
                rate : req.body.rate,
                user_id : req.user.id,
                laptop_id : req.body.laptop_id
            }).then(function(data){
                res.json({
                    success : true,
                    data : data
                })
            })
        }
    })
}

const update = (req, res) => {
    db.evaluation.findOne({
        where : {
            id : req.params.id,
            user_id : req.user.id
        }
    }).then(function(evaluation) {
        if(evaluation) {
            evaluation.update({
                rate : req.body.rate
            });
            res.json({
                success : true,
                data : evaluation
            })
        } else { 
            res.json({
                success : false,
                message : 'Invalid evaluation'
            })
        }
    })
}

const evaluationController = {}

evaluationController.index = index;
evaluationController.store = store;
evaluationController.update = update;

module.exports = evaluationController;
