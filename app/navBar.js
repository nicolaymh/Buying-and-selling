//Close the navigation bar when clicking on an option
document.addEventListener("click", e => {
    if(e.target.classList.contains(`navbar-toggler`)){
        document.querySelector(`#navbarSupportedContent`).classList.toggle(`show`);
    }else{
        document.querySelector(`#navbarSupportedContent`).classList.remove(`show`);
    }
})