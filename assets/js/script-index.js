const mainSiteBtn = document.getElementById("main-site-btn");
const mainSiteMsg = document.getElementById("main-site-message");

mainSiteBtn.addEventListener("click", function() {
    mainSiteMsg.classList.remove("hidden");
  });