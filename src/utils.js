require('svg');

// General utility functions
module.exports = {

	// Provide an Enyo control or a string containing an ID
	getId: function (control) {
		if (typeof control == 'string' && this.owner.$[control]) {
			control = this.owner.$[control];
		}
		if (control && control.id) {
			return control.id;
		}
	}
};
