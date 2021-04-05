const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
	id_artist: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},	
	description: {
		type: String,
		required: true
	},	
	tags: {
		type: Array,
		items: { type: String},
		required: true
	},
	themeList: {
		type: Array,
		items: { type: Object},
		required: true
	}
});

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},	
	email: {
		type: String,
		required: true
	},
	admin: {
		type: Number,
		required: true
	},
	themeLists:{
		type:Array,
		required: true
	},
	likes:{
		type:Array,
		required: true
	}
});

mongoose.model('Artist', ArtistSchema);
mongoose.model('User', UserSchema);







