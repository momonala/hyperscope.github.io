// Vertical navigation bar
function openSample(evt, sample) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sample).style.display = "block";
    evt.currentTarget.className += " active";
}


// Get the element with id="defaultOpen" and click on it
function clickTabOnLoad(){
    document.getElementById("defaultOpen").click();
}


// Toggle the vertical navigation bar, and extend the display
function toggleVerticalNavTab() {
    var verticalNavTab = document.getElementById("verticalNavTab");
    if (verticalNavTab.style.display === "none") {
        verticalNavTab.style.display = "block";
        verticalNavTab.style.width = "20%";

        var tabContentElements = document.getElementsByClassName('tabcontent');
        for(var i=0; i<tabContentElements.length; i++) {
            tabContentElements[i].style.width = "80%";
        }
        var tabRendererElements = document.getElementsByClassName('renderer');
        for(var i=0; i<tabRendererElements.length; i++) {
            tabRendererElements[i].style.width = "75%";
        }
    }
    else {
        verticalNavTab.style.display = "none";
        verticalNavTab.style.width = "0%";

        var tabContentElements = document.getElementsByClassName('tabcontent');
        for(var i=0; i<tabContentElements.length; i++) {
            tabContentElements[i].style.width = "100%";
        }
        var tabRendererElements = document.getElementsByClassName('renderer');
        for(var i=0; i<tabRendererElements.length; i++) {
            tabRendererElements[i].style.width = "100%";
        }
    }
}