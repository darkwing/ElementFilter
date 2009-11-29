/*
---
description:     ElementFilter

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - ElementFilter
...
*/
var ElementFilter=new Class({Implements:[Options,Events],options:{cache:true,caseSensitive:false,ignoreKeys:[13,27,32,37,38,39,40],matchAnywhere:true,property:"text",trigger:"keyup",onStart:$empty,onShow:$empty,onHide:$empty,onComplete:$empty},initialize:function(c,b,a){this.setOptions(a);this.observeElement=document.id(c);this.elements=$$(b);this.matches=this.elements;this.misses=[];this.listen();},listen:function(){this.observeElement.addEvent(this.options.trigger,function(a){if(this.observeElement.value.length){if(!this.options.ignoreKeys.contains(a.code)){this.fireEvent("start");this.findMatches(this.options.cache?this.matches:this.elements);this.fireEvent("complete");}}else{this.findMatches(this.elements,false);}}.bind(this));},findMatches:function(f,b){var e=this.observeElement.value;var a=this.options.matchAnywhere?e:"^"+e;var g=this.options.caseSensitive?"":"i";var c=new RegExp(a,g);var d=[];f.each(function(i){var h=(b==undefined?c.test(i.get(this.options.property)):b);if(h){if(!i.retrieve("showing")){this.fireEvent("show",[i]);}d.push(i);i.store("showing",true);}else{if(i.retrieve("showing")){this.fireEvent("hide",[i]);}i.store("showing",false);}return true;}.bind(this));return d;}});