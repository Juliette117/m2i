
//Changement de couleur navbar au scroll
window.onscroll = function () {
        
    if(document.documentElement.scrollTop > 10){
      document.querySelector(".d-flex").style.background = "#efeaea7b";
      
    }
    else{
      document.querySelector(".d-flex").style.background = "#EFEAEA";
    }
  }