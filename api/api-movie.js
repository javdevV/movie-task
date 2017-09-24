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
router.get('/search/:title',function (req,res) {
	Movie.find({"title":req.params.title},{title:1,director:1},function(err,mov){
		if (err) 
			res.json(err);
		res.json(mov);
	})
	
})

module.exports=router;