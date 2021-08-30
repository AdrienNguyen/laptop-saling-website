const db = require('../models');

const index = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const limit = pageSize ? pageSize : 20;
    const offset = page ? limit * page : 0;

    db.comment.findAndCountAll({
        limit : limit,
        offset : offset,
        where : {
            laptop_id : req.params.id
        },
        include : [{
            model : db.user
        }]
    }).then(function(data){
        data.page = page ? page : 0;
        data.pageSize = limit;
        res.json({
            success : true,
            data : data
        });
    });
}

const show = (req, res) => {
    db.comment.findOne({
        where : {
            id : req.params.id,
            user_id : req.user.id
        },
        include : [{
            model : db.user
        }]
    }).then(function(comment) {
        if(comment) {
            res.json({
                success : true,
                data : comment
            })
        } else {
            res.json({
                success : false,
                message : "Invalid comment"
            })
        }
    });
}

const store = (req, res) => {
    db.comment.create({
        content : req.body.content,
        user_id : req.user.id,
        laptop_id : req.body.laptop_id
    }).then(function(comment) {
        if(comment) {
            res.status(201).json({
                success : true, 
                data : comment
            })
        } else {
            res.json({
                success : false,
                message : "Add comment failed"
            })
        }
    });
}

const update = (req, res) => {
    db.comment.findOne({
        where : {
            id : req.params.id,
            user_id : req.user.id
        }
    }).then(function(comment) {
        if(comment) {
            comment.update({
                content : req.body.content
            })
            res.json({
                success : true,
                data : comment
            })
        } else {
            res.json({
                success : false,
                message : "Invalid comment"
            })
        }
    })
}


const destroy = (req, res) => {
    db.comment.findOne({
        where : {
            id : req.params.id,
            user_id : req.user.id
        }
    }).then(function(comment) {
        if(comment) {
            comment.destroy().then(function() {
                res.json({
                    success : true,
                    message : "Deleted comment"
                })
            });
        } else {
            res.json({
                success : false,
                message : "Invalid Comment"
            })
        }
    });
}
const commentController = {}

commentController.index = index;
commentController.show = show;
commentController.store = store;
commentController.update = update;
commentController.destroy = destroy;
module.exports = commentController;