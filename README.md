ElementFilter
=========

ElementFilter provides a great way for you to allow users to search through the text of any mix of elements. Simply provide a text input box and ElementFilter does the rest of the work.

![Screenshot](http://davidwalsh.name/dw-content/element-filter.png)


How to Use
----------

ElementFilter may be initialized at any time.  Numerous custom options may be used.

	#JS
	/* ElementFilter instance */
	window.addEvent('domready',function() {
	  var myFilter = new ElementFilter('search-term', '#my-list li', {
	    trigger: 'keyup',
		cache: true,
	    onShow: function(element) {
			element.set('morph',{
				onComplete: function() {
					element.setStyle('background-color','#fff');
				}
			});
			element.morph({'padding-left':30,'background-color':'#a5faa9'});
	    },
	    onHide: function(element) {
			element.set('morph',{
				onComplete: function() {
					element.setStyle('background-color','#fff');
				}
			});
			element.morph({'padding-left':0,'background-color':'#fac3a5'});
	    }
	  });
	});
	

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/plugin-element-filter](http://davidwalsh.name/plugin-element-filter)