"use strict";
    let modal = document.querySelector(".modal-custom");
    let closeIcon = document.querySelector(".modal-icon");
    let openButton = document.querySelector(".click-button-custom button");
    let closeBtn=document.querySelector(".close-btn");
  
    openButton.addEventListener("click", function() {
      modal.style.display = "block";
      modal.style.margin="200px auto 0 auto"

    });
  
    closeIcon.addEventListener("click", function() {
      modal.style.display = "none";
      modal.style.margin="0 auto 0 auto"

    });

  
    closeBtn.addEventListener("click",function(){
      modal.style.display="none";
      modal.style.margin="0 auto 0 auto"

    })