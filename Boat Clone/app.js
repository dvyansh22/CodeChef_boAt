document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('.vid');
  
    videos.forEach(video => {
      video.addEventListener('mouseenter', function() {
        this.play();
      });
  
      video.addEventListener('mouseleave', function() {
        this.pause();
        this.currentTime = 0;
      });
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    
    var countdownEndTime = new Date("March 30, 2024 12:00:00").getTime();
  
    
    var countdownInterval = setInterval(function() {
      var now = new Date().getTime();
      var distance = countdownEndTime - now;
  
      var hours = Math.floor(distance / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      
      document.querySelector(".hours").innerText = hours.toString().padStart(2, '0');
      document.querySelector(".minutes").innerText = minutes.toString().padStart(2, '0');
      document.querySelector(".seconds").innerText = seconds.toString().padStart(2, '0');
  
      
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Expired";
      }
    }, 1000);
  });


  function showDiv(divId) {
    var divs = document.getElementsByClassName("content-div1");
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = "none"; // Hide all content divs
    }
    document.getElementById(divId).style.display = "block"; // Display the clicked div
  }

  // Initially hide all divs except the first one
  window.onload = function() {
    var divs = document.getElementsByClassName("content-div1");
    for (var i = 1; i < divs.length; i++) {
      divs[i].style.display = "none";
    }
  };


  const buttonRight = document.getElementById('nextbtn');
  const buttonLeft = document.getElementById('backbtn');

  buttonRight.onclick = function () {
    document.getElementById('gallery').scrollLeft += 20;
  };
  buttonLeft.onclick = function () {
    document.getElementById('gallery').scrollLeft -= 20;
  };
  

  