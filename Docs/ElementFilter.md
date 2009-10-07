Class: ElementFilter {#ElementFilter}
=====================================

ElementFilter provides a great way for you to allow users to search through the text of any mix of elements. Simply provide a text input box and ElementFilter does the rest of the work.

### Implements:

Options, Events

ElementFilter Method: constructor {#ElementFilter:constructor}
---------------------------------------------------------------


### Syntax:

	var myElementFilter = new ElementFilter(observeElement,elements,options);

### Arguments:

1. observeElement - (*string or Element*)  The reference to the input box.
2. elements - (*string elector or Element array*)  An array of elements which will be searched.
3. options - (*object*)  An object containing the ElementFilter instance's options.

### Options:

* cache - (*boolean*, defaults to true)  Defines whether matched elements should be cached to improve performance or a fresh, full search should be done every time.
* caseSensitive - (*boolean*, defaults to false)  Defines whether the search should be case-sensitive or more flexible.
* ignoreKeys - (*array*)  Keys to ignore when pressed.
* matchAnywhere - (*boolean*, defaults to true)  Defines whether the search should match the search term at any part of the screen or only the beginning.
* property - (*string*, defaults to 'text')  The property to search -- likely "text" or "html".
* trigger - (*string*, defaults to 'keyup')  The event which triggers a new search.

### Returns:

A ElementFilter instance.


### Events:

### start

* (*function*) Function to execute when a search begins.

### Signature

	onStart()

### complete

* (*function*) Function to execute when the search is complete

### Signature

	onComplete()
	
### show

* (*function*) Function to execute on each element that is found.

### Signature

	onShow(element)
	
#### Arguments:

1. element - (*Element*) The element which was found.


### hide

* (*function*) Function to execute on each element that is hidden (or unmatched).

### Signature

	onHide(element)
	
#### Arguments:

1. element - (*Element*) The element which was hidden (or unmatched).
