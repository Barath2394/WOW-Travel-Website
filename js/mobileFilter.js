const menuBar = () => {
    document.querySelector(".navbar-list").style.display = "block";
    document.querySelector(".menu-bar-component").style.display = "block";
  }

  const closeMenuBar = () => {
    document.querySelector(".menu-bar-component").style.display = "none";
    document.querySelector(".navbar-list").style.display = "none";
  }
  
  const openFilterContainer = () =>{
    document.querySelector(".search-container").style.display = "block";
    document.querySelector(".filter-topbar").style.display = "block";
    document.querySelector(".trip-tags").style.display = "block";
    document.querySelector(".apply-filters-button").style.display = "block";
  }

  const closeFilterContainer = () =>{
    document.querySelector(".search-container").style.display = "none";
    document.querySelector(".filter-topbar").style.display = "none";
    document.querySelector(".trip-tags").style.display = "none";
    document.querySelector(".apply-filters-button").style.display = "none";
  }