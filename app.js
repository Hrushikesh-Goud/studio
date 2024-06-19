document.addEventListener("DOMContentLoaded", function() {
    // Get the Instagram icon element
    var instagramIcon = document.querySelector(".fa-instagram");
    var twitterIcon=document.querySelector(".fa-twitter");
    var youtubeIcon=document.querySelector(".fa-youtube");
    var facebookIcon=document.querySelector(".fa-facebook");
   
   
      // Define your Instagram URL
      var instagramUrl = "https://www.instagram.com/_.hrushikesh1307._/";
      var facebookUrl="https://www.facebook.com"
      var youtubeUrl="https://www.youtube.com"
      var twitterUrl="https://twitter.com"

      function openUrlInNewTab(url) {
        window.open(url, "_blank");
      }
    
      // Add click event listeners to each social media icon
      facebookIcon.addEventListener("click", function() {
        openUrlInNewTab(facebookUrl);
      });
    
      twitterIcon.addEventListener("click", function() {
        openUrlInNewTab(twitterUrl);
      });
    
      instagramIcon.addEventListener("click", function() {
        openUrlInNewTab(instagramUrl);
      });
    
      youtubeIcon.addEventListener("click", function() {
        openUrlInNewTab(youtubeUrl);
      });
    });
  
     
  



    







    // Add this script to your JavaScript file

document.addEventListener("DOMContentLoaded", function() {
  const feedbackLink = document.getElementById("feedbackLink");

  feedbackLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = feedbackLink.getAttribute("href");
  });
});
