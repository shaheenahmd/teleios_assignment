
$(document).ready(function(){
    // YouTube video ID
    var videoID = "v=uUnXU3us2BA";
  
    // When the popup link is clicked, open the modal and load the video
    $("#popup-link").click(function(){
      $("#videoIframe").attr("src", "https://www.youtube.com/watch?v=uUnXU3us2BA" + videoID);
      $("#videoModal").modal("show");
    });
  
    // When the modal is closed, stop the video playback
    $("#videoModal").on("hidden.bs.modal", function(){
      $("#videoIframe").attr("src", "");
    });
  });



  // Back to top feature --------------
  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
          document.getElementById("BackTotop-Btn").style.display = "block";
      } else {
          document.getElementById("BackTotop-Btn").style.display = "none";
      }
  }
  
  function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
  


  // Aos animation library functions--------
  AOS.init({
    once:false,
    duration:1500,
    delay:100,
    offset:80,
  });



  // Contact form submission ------------------------

  // let form = document.getElementById('myForm');
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    
    // To store data temerarly using Localstorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("email", email);

    // alert("Data submitted successfully!");
    Swal.fire({
      title: "Your Form is Submitted!",
      text: "Thanks for connecting with Us",
      icon: "success"
    });
  });

