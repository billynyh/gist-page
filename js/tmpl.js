(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gist_file_item'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"file-item\">\n  <pre class=\"prettyprint with-label\" rel=\"";
  foundHelper = helpers.filename;
  stack1 = foundHelper || depth0.filename;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "filename", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.source;
  stack1 = foundHelper || depth0.source;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "source", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</pre>\n</div>\n";
  return buffer;});
templates['gist_starred_projects'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"span4\">\n    <a href=\"";
  foundHelper = helpers.html_url;
  stack1 = foundHelper || depth0.html_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "html_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.full_name;
  stack1 = foundHelper || depth0.full_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "full_name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n    <p>";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n</div>\n";
  return buffer;});
templates['gist_user_profile'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "  <div class=\"gist-profile well\" >\n    <div class=\"profile-pic\">\n      <img src=\"";
  foundHelper = helpers.avatar_url;
  stack1 = foundHelper || depth0.avatar_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "avatar_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"img-polaroid\" />\n    </div>\n    <div class=\"info-row\">\n      <div class=\"username\">\n        <span class=\"username\">";
  foundHelper = helpers.login;
  stack1 = foundHelper || depth0.login;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "login", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n      </div>\n      <div class=\"info-row\">\n        <span class=\"\">\n        <a href=\"";
  foundHelper = helpers.html_url;
  stack1 = foundHelper || depth0.html_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "html_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.html_url;
  stack1 = foundHelper || depth0.html_url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "html_url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n        </span>\n      </div>\n      <div class=\"row-fluid\">\n        <span class=\"span8 info-label\"><i class=\"icon-thumbs-up\"></i> Public Repos : </span>\n        <span class=\"span4 info-content\"><span class=\"badge badge-success\">";
  foundHelper = helpers.public_repos;
  stack1 = foundHelper || depth0.public_repos;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "public_repos", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span></span>\n      </div>\n      <div class=\"info-row clearfix\">\n        <span class=\"info-label\"><i class=\"icon-thumbs-up\"></i> Public gist : </span>\n        <span class=\"info-content\"><span class=\"badge badge-info\">";
  foundHelper = helpers.public_gists;
  stack1 = foundHelper || depth0.public_gists;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "public_gists", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span></span>\n      </div>\n      <p>";
  foundHelper = helpers.bio;
  stack1 = foundHelper || depth0.bio;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "bio", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n    </div>\n  </div>\n";
  return buffer;});
templates['item'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n  <div class=\"span12 gist-container\">\n    <div class=\"gist-info\">\n      <h3>";
  foundHelper = helpers.description;
  stack1 = foundHelper || depth0.description;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h3>\n      <a class=\"gist-link\" href=\"";
  foundHelper = helpers.url;
  stack1 = foundHelper || depth0.url;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">gist ";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n    </div>\n    <div class=\"files-container\">\n    </div>\n  </div>\n  <hr/>\n</div>\n";
  return buffer;});
templates['no_gist'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "<div class=\"well\">\n<p>No Gist</p>\n</div>";});
})();