var assert = require('assert');
var fs = require('fs');
var Canvas = require('canvas');
var sprite = require('../lib/sprite.js');
var ui = require('../lib/ui.js');



var reports_path = __dirname + '/../reports/';

exports.setUp = function (callback) {
	if (!fs.existsSync(reports_path))
		fs.mkdirSync(reports_path);
	this.canvas = new Canvas(800,600);
	this.opts ={};
	this.opts.sprites = sprite.load_sprites(__dirname + '/../static/example/scrolling/mario.chr');
	this.opts.palette = [0x22,0x16,0x27,0x18];
	this.pixel_editor = new ui.PixelEditor(this.canvas, 165, 0, this.opts);
	this.selector = new ui.SpriteSelector(this.canvas, 440, 0, this.opts);
	this.palette = new ui.Palette(this.canvas, 0 , 325, this.opts);
	this.color_picker = new ui.ColorPicker(this.canvas, 165,270,20, this.opts);
	this.preview = new ui.Preview(this.canvas, 0, 0, this.opts);

	//this.pixel_editor.addColorChangeListener(this.palette);
	//this.palette.addColorChangeListener(this.selector);
	//this.palette.addColorChangeListener(this.preview);
	//this.palette.addColorChangeListener(this.pixel_editor);
	//this.color_picker.addColorChangeListener(this.palette);

	//this.selector.addSpriteChangedListener(this.preview);
	//this.preview.addSpriteChangedListener(this.pixel_editor);
	//this.pixel_editor.addRedrawListener(this.preview);
	//this.pixel_editor.addRedrawListener(this.selector);

	callback();
};

exports.tearDown = function (callback) {
	this.canvas = null;
	this.opt = null;
	callback();
};

function click_on_palette(palette, color_id){
	var x = palette.position_x + (palette.picker_size * color_id) + (palette.picker_size / 2);
	var y = palette.position_y + (palette.height / 2);
	assert.ok(palette.was_clicked(x, y));
	palette.click(x, y);
}

exports.test_palette_clicks = function (test){
	test.equal(0, this.palette.palette_id);
	click_on_palette(this.palette, 1);
	test.equal(1, this.palette.palette_id);
	click_on_palette(this.palette, 2);
	test.equal(2, this.palette.palette_id);
	click_on_palette(this.palette, 3);
	test.equal(3, this.palette.palette_id);
	click_on_palette(this.palette, 0);
	test.equal(0, this.palette.palette_id);
	test.done();
};
