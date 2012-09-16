function get_qs(){
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
  }
  return vars;
}

$(function(){

var API_URL = "https://api.github.com";
function getListUrl(user){
  return API_URL + "/users/" + user + "/gists?callback=?";
}
function getGistUrl(id){
  return API_URL + "/gists/" + id + "?callback=?";
}
function getUserUrl(user){
  return API_URL + "/users/" + user + "?callback=?";
}
function getStarredUrl(user){
  return API_URL + "/users/" + user + "/starred?callback=?";
}

function loadList(_t, user, callback){
  $.getJSON(getListUrl(user), function(obj){
    var data = obj.data;
    if (callback){
      callback(data);
      return;
    }

    var n = data.length;
    if (n == 0) {
      _t.append(Handlebars.templates.no_gist());
    }else{
      for (var i=0, n=data.length; i<n; i++){
        var html = $(Handlebars.templates.item({
          description : data[i].description,
          id : data[i].id,
          url : data[i].html_url
        }));

        _t.append(html);
        html.find(".files-container").gistLoadGist(data[i].id)
      }
    }
  });
}

function loadGist(_t, id, callback){
  $.getJSON(getGistUrl(id), function(obj){
    var data = obj.data;
    if (callback){
      callback(data);
      return ;
    }
    
    for (var i in data.files){
      var f = data.files[i];
      var html = Handlebars.templates.gist_file_item({
        source : f.content,
        filename : f.filename
      });

      _t.append(html);
    }
    prettyPrint();
  });
}

function loadUser(_t, user, callback){
  $.getJSON(getUserUrl(user), function(obj){
    var data = obj.data;
    var html = Handlebars.templates.gist_user_profile(data);
    _t.append(html);
  });
}

function loadStarred(_t, user, callback){
  $.getJSON(getStarredUrl(user), function(obj){
    var list = obj.data;
    var div;
    var n = list.length;
    for (var i=0; i<n; i++){
      if (i%3==0){
        div = $('<div class="row-fluid"></div>');
      }
      var item = list[i];
      var html = Handlebars.templates.gist_starred_projects(item);
      div.append(html);
      if (i%3==2){
        _t.append(div);
        div = null;
      }
    }
    if (div){
      _t.append(div);
    }

    if (n == 0){
      _t.find("h2").hide();
    }
  });
  
}

$.fn.gistLoadList = function(user, callback){
  return this.each(function(){
    var _t = $(this);
    loadList(_t, user, callback);
  });
}

$.fn.gistLoadGist = function(id, callback){
  return this.each(function(){
    var _t = $(this);
    loadGist(_t, id, callback);
  });
}
$.fn.gistLoadUserProfile = function(id, callback){
  return this.each(function(){
    loadUser($(this), id, callback);
  });
}
$.fn.gistStarredProjects = function(id, callback){
  return this.each(function(){
    loadStarred($(this), id, callback);
  });
}

});
