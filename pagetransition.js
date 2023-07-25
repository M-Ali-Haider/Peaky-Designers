document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href='about.html'],a[href='main.html']");
  
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        // Create the black screen element
        const blackScreen = document.createElement("div");
        blackScreen.classList.add("black-screen");
        document.body.appendChild(blackScreen);
  
        // Slide the black screen in
        requestAnimationFrame(function () {
          blackScreen.style.opacity = "1";
          blackScreen.style.transform = "translateY(0)";
        });
  
        setTimeout(function () {
          window.location.href = link.getAttribute("href");
        }, 650);
      });
    });
  });
  
