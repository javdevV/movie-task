var express =require('express');
var router = express.Router();
var Movie = require('../models/movie');


router.get('/',function(req,res){
	Movie.find(function (err, tag) {
        if (err)
            res.json(err);
        res.json(tag);
    });	
});

router.post('/',function(req,res){
	movie = new Movie(req.body);
	movie.save(function	(err){
		if (err) 
			return res.json(err);
		res.json(movie);
	})
})

module.exports=router;