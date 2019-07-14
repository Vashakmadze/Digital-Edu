var dataContainer = document.getElementById("data-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts/');
  ourRequest.onload = function() {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      console.log(JSON.parse(ourRequest.responseText))
  };
  ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";

    for(i = 0; i < 3; i++) {
        htmlString += "<p>" + data[i].title + "<span>" + " This was Title " + "</span>" + data[i].body + "<span>" + "This was body" + "</span> " + ".</p>"
    }

    dataContainer.insertAdjacentHTML('beforeend', htmlString);
}