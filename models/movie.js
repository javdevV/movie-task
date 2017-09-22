var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
	title : String,
	Duration : Number,
	actors : [String],
	director : String
},{collection : "movies"});
module.exports=mongoose.model('movie',movieSchema);