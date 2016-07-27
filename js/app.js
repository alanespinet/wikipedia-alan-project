const $ = require('jquery');

$('button').on('click', function(e){
  e.preventDefault();
  var text = $('#txt-search').val();
  if(text === "") {
    alert('You have not typed any text for searching...');
    return;
  }

  $('#search-content').html("");
  var url = 'http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&generator=search&exlimit=10&exintro=1&inprop=url&gsrsearch=' + text + '&callback=?';
  $('#txt-search').val("");

  $.getJSON(url).then((res, txt, xhr) => {
    for(var i in res.query.pages){
      $('#search-content').append("<a href=" + res.query.pages[i].fullurl + ">" + res.query.pages[i].title + "</a> " + res.query.pages[i].extract + "<br /><hr />");
    }
  });
});
