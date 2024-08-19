  const changeNavigation = (element) => {
    const navbarList = document.querySelectorAll(".navbar-list a");
    navbarList.forEach((a) => {
      if (a.classList.contains("selected-nav-list")) {
        a.classList.remove("selected-nav-list");
      }
    });
    element.classList.toggle("selected-nav-list");
  };
