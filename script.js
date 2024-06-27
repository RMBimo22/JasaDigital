document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var date = document.getElementById('date').value;
  var gender = document.getElementById('gender').value;
  var message = document.getElementById('message').value;

  var formattedMessage = `Nama: ${name}\nEmail: ${email}\nTanggal: ${date}\nJenis Kelamin: ${gender}\n\nPesan:\n${message}`;

  document.getElementById('displayMessage').textContent = formattedMessage;
  document.getElementById('messageContainer').style.display = 'block';

  document.getElementById('contactForm').reset();
});




window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
}

document.getElementById("scrollToTopBtn").onclick = function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
};




  let mybutton = document.getElementById("scrollToTopBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(-6.200000, 106.816666),
        zoom: 10,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
window.onload = initMap;