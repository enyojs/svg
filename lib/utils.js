require('svg');

// General utility functions
module.exports = {

	// Provide an Enyo control or a string containing an ID
	getId: function (control) {
		control =  (typeof control == 'string') ? this.owner.$[control] : control;
		if (control && control.id) {
			return control.id;
		}
	}
};
