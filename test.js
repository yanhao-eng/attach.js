// This script is intend to establish some connction between two elements on dom, assign a action to implement
// element and action pair is the minimum unit of the script. By default is empty unit;
// The init element is empty; the element could be jquery object, hantak object or an array of hantak

var 
	rootAttach,
	
	attach = Attach = function( obj, action ) {
		return new Attach.fn.init( obj, action, rootAttach );
	};
	
	Attach.fn = Attach.prototype = {
		acted: false,
		constructor: Attach,
		
		init: function( obj, action, rootAttach ) {
			if( obj instanceof jQuery ) {
				action.apply(this, obj);
				this.acted = true;
				return this;
			}
			// if the obj is a hantak object, check the state of the hantak  
			else if( obj instanceof Attach ) {
				// check if the obj acted, if yes, run the action
				if(obj.acted) {
					action.apply(this);
					this.acted = true;	
				}
				return this;
			}
			// if the obj is an array
			else if( obj instanceof Array ) {
				var valid = true;
				// check if all the objs in the array are hantak object and is acted
				$.each(obj, function(index, value) {
					if( ( value instanceof Attach ) ) {
						if( !value.acted ) {
							valid = false;
						}
					} else {
						valid = false;
					}
				})
				
				if(valid) {
					action.apply(this);
					this.acted = true;
				}
				return this;
			}
			else {
				//do nothing
			}
		}
	}
	
	// Give the init function the Attach prototype for later instantiation
	Attach.fn.init.prototype = Attach.fn;
	
	// All Attach objects should point back to these
	//rootAttach = Attach(document);