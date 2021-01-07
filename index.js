$(document).ready(function () {
  $.getJSON("blog_data/desc.json", function (data) {
    for (i = 0; i < data["desc"].length; i++) {
      $('<div class = "card" />')
        .text(data["desc"][i]["title"])
        .appendTo(".body_container");
    }
  });
});
