  var items = document.getElementsByClassName("tabs");
  var item_details = document.getElementsByClassName("tabcontents");
  
  function opentab(tabname){
      for(item of items){
        item.classList.remove("show");
      }
      for(tabcontent of item_details ){
        tabcontent.classList.remove("active");
        }
    event.currentTarget.classList.add("show");
    document.getElementById(tabname).classList.add("active");
    }