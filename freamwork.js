document.addEventListener("DOMContentLoaded", function() {
   
    var modal = document.getElementById("myModal");
    var btn = document.querySelector("[data-target='#myModal']");
    var span = document.getElementsByClassName("popin-dismiss")[0];
  
    
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
   
    span.onclick = function() {
      modal.style.display = "none";
    }
  
   
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    
    document.onkeydown = function(event) {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    }
    var servicesLink = document.querySelector('a[href="#myModal"]');
            servicesLink.addEventListener("click", function() {
                document.getElementById("myModal").classList.add("modal");
            }); 
 
    var tabItems = document.querySelectorAll(".tab-item");
  
    tabItems.forEach(function(tabItem) {
      tabItem.addEventListener("click", function() {
        var targetId = tabItem.getAttribute("data-target");
        var targetPane = document.querySelector(targetId);
  
        
        document.querySelectorAll(".tab-item").forEach(function(item) {
          item.classList.remove("active");
        });
        document.querySelectorAll(".tab-pane").forEach(function(pane) {
          pane.classList.remove("active");
        });
  
       
        tabItem.classList.add("active");
        targetPane.classList.add("active");
      });
    });
            var servicesLink = document.querySelector('a[href="#tab1"]');
            servicesLink.addEventListener("click", function() {
                document.getElementById("tab1").classList.add("active");
            });
            var servicesLink = document.querySelector('a[href="#tab2"]');
            servicesLink.addEventListener("click", function() {
                document.getElementById("tab2").classList.add("active");
            }); 
            var servicesLink = document.querySelector('a[href="#tab3"]');
            servicesLink.addEventListener("click", function() {
                document.getElementById("tab3").classList.add("active");
            });   

    var tooltips = document.querySelectorAll(".tooltip");
  
    tooltips.forEach(function(tooltip) {
      var placement = tooltip.getAttribute("data-placement");
      tooltip.style.position = "relative";
  
      tooltip.addEventListener("mouseenter", function() {
        var tooltipContent = tooltip.getAttribute("title");
        var tooltipElement = document.createElement("div");
        tooltipElement.innerText = tooltipContent;
        tooltipElement.classList.add("tooltip-content");
        tooltipElement.style.position = "absolute";
        tooltipElement.style.backgroundColor = "#333";
        tooltipElement.style.color = "white";
        tooltipElement.style.padding = "5px";
        tooltipElement.style.borderRadius = "4px";
        tooltipElement.style.visibility = "hidden";
        tooltipElement.style.opacity = "0";
        tooltipElement.style.transition = "opacity 0.3s";
        tooltipElement.style.zIndex = "1";
  
        if (placement === "top") {
          tooltipElement.style.bottom = "100%";
          tooltipElement.style.left = "50%";
          tooltipElement.style.transform = "translateX(-50%)";
        }
  
        tooltip.appendChild(tooltipElement);
  
        setTimeout(function() {
          tooltipElement.style.visibility = "visible";
          tooltipElement.style.opacity = "1";
        }, 10);
      });
  
      tooltip.addEventListener("mouseleave", function() {
        var tooltipContent = tooltip.querySelector(".tooltip-content");
        if (tooltipContent) {
          tooltipContent.remove();
        }
      });
    });
  });
  setTimeout(function() {
    document.getElementById('secondAlert').style.display = 'none';
}, 5000);
  