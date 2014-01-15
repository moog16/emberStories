Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<span class=\"glyphicon glyphicon-plus\"></span> Submit Story");
  }

  data.buffer.push("<nav class=\"navbar navbar-default navbar-fixed-top navbar-inverse\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">GetBookMarks</a>\n    </div>\n    <ul class=\"nav navbar-nav pull-right\">\n        <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "newstory", options) : helperMissing.call(depth0, "link-to", "newstory", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n  </div>\n</nav>\n\n<div id=\"main\" class=\"container\">\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tr><td>\n       ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "story", "", options) : helperMissing.call(depth0, "link-to", "story", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td></tr>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n  <div class=\"col-md-4\">\n    <table class='table'>\n      <thead>\n        <tr><th>Recent Stories</th></tr>\n      </thead>\n      ");
  stack1 = helpers.each.call(depth0, "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </table>\n  </div>\n  <div class=\"col-md-8\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["newstory"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<form class=\"form-horizontal\" role=\"form\">\n  <div class=\"form-group\">\n    <label for=\"title\" class=\"col-sm-2 control-label\">Title</label>\n    <div class=\"col-sm-10\">\n      <input type=\"title\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Title of the link\" required>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"excerpt\" class=\"col-sm-2 control-label\">Excerpt</label>\n    <div class=\"col-sm-10\">\n      <textarea class=\"form-control\" id=\"excerpt\" name=\"excerpt\" placeholder=\"Short description of the link\" required></textarea>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"url\" class=\"col-sm-2 control-label\">Url</label>\n    <div class=\"col-sm-10\">\n      <input type=\"url\" class=\"form-control\" id=\"url\" name=\"url\" placeholder=\"Url of the link\" required>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"tags\" class=\"col-sm-2 control-label\">Tags</label>\n    <div class=\"col-sm-10\">\n      <textarea class=\"form-control\" id=\"tags\" name=\"tags\" placeholder=\"Comma separated list of tags\" rows=\"3\" required></textarea>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"fullname\" class=\"col-sm-2 control-label\">Full Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"title\" class=\"form-control\" id=\"fullname\" name=\"fullname\" placeholder=\"Enter your full name like Matthew Goo\" required>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Submit Story</button>\n    </div>\n  </div>\n</form>\n");
  return buffer;
  
});

Ember.TEMPLATES["story"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"label label-primary\">");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n  ");
  return buffer;
  }

  data.buffer.push("<h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n<h2> by ");
  stack1 = helpers._triageMustache.call(depth0, "fullname", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <small class=\"muted\">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "submittedOn", options) : helperMissing.call(depth0, "format-date", "submittedOn", options))));
  data.buffer.push("</small></h2>\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editStory", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-danger\">Edit</button>\n  ");
  stack1 = helpers.each.call(depth0, "tagnames", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<hr>\n<p class=\"lead\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "excerpt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n");
  return buffer;
  
});