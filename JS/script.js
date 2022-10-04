function showcatmenu() {
    document.getElementById("dropcatmenu").click();
}

function showlogmenu() {
    document.getElementById("droplogmenu").click();
}

function shownav() {
    var togspan = document.getElementById("togspan");

    if (togspan.hasAttribute("class", 'fa fa-list fa-lg')) {
        togspan.removeAttribute("class", 'fa fa-list fa-lg');
        togspan.setAttribute("class", 'fa fa-close fa-lg');
    }
    else if (togspan.hasAttribute("class", 'fa fa-close fa-lg')) {
        togspan.removeAttribute("class", 'fa fa-close fa-lg');
        togspan.setAttribute("class", 'fa fa-list fa-lg');
    }
}