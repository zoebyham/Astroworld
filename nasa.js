

function getImage() {
  //create and open new request
  var request= new XMLHttpRequest();
  request.open('get', 'https://api.nasa.gov/planetary/apod?api_key=UXj6Qyq8ewKTLqe8syo4tccw1HU3ctWdkekN42lX', true);
  request.send();
  request.onreadystatechange = function(){
      if (request.readyState == 4 && request.status == 200){
      var text = request.responseText;
      var response = JSON.parse(request.responseText);
      var pic= response.hdurl;
      console.log(response)
      document.getElementById('title').textContent = response.title;
      document.getElementById('date').textContent = response.date;
      document.getElementById('pic').src = pic;
      }
    };
}
