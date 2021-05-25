const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

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
		type: String
	},	
	description: {
		type: String
	},	
	tags: {
		type: Array,
		items: { type: String},
		required: true
	}
});

const ThemesSchema = new Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	flag: {
		type: String
	},		
	tags: {
		type: Array,
		items: { type: String},
		required: true
	},
	lyrics: {
		type: Object,
		required: true
	},
	comments: {
		type: Array,
		items: { type: String},
		required: true
	},
	likes: {
		type: Number,
		required: true
	},
	dislikes: {
		type: Number,
		required: true
	},
	views: {
		type: Number,
		required: true
	},
	artist: {
		type: Object,
		required: true
	},
});

ThemesSchema.plugin(mongoosePaginate);

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
	description: {
		type: String
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

UserSchema.plugin(mongoosePaginate);

mongoose.model('Artist', ArtistSchema);
mongoose.model('Theme', ThemesSchema);
mongoose.model('User', UserSchema);







