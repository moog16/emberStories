this["App"] = this["App"] || {};
this["App"]["TEMPLATES"] = this["App"]["TEMPLATES"] || {};

this["App"]["TEMPLATES"]["templates/newstory.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<form class=\"form-horizontal\" role=\"form\">\n  <div class=\"form-group\">\n    <label for=\"title\" class=\"col-sm-2 control-label\">Title</label>\n    <div class=\"col-sm-10\">\n      <input type=\"title\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Title of the link\" required>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"excerpt\" class=\"col-sm-2 control-label\">Excerpt</label>\n    <div class=\"col-sm-10\">\n      <textarea class=\"form-control\" id=\"excerpt\" name=\"excerpt\" placeholder=\"Short description of the link\" required></textarea>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"url\" class=\"col-sm-2 control-label\">Url</label>\n    <div class=\"col-sm-10\">\n      <input type=\"url\" class=\"form-control\" id=\"url\" name=\"url\" placeholder=\"Url of the link\" required>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"tags\" class=\"col-sm-2 control-label\">Tags</label>\n    <div class=\"col-sm-10\">\n      <textarea class=\"form-control\" id=\"tags\" name=\"tags\" placeholder=\"Comma separated list of tags\" rows=\"3\" required></textarea>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"fullname\" class=\"col-sm-2 control-label\">Full Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"title\" class=\"form-control\" id=\"fullname\" name=\"fullname\" placeholder=\"Enter your full name like Matthew Goo\" required>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-success\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Submit Story</button>\n    </div>\n  </div>\n</form>\n");
  return buffer;
  
});