

function showProject(partId) {
    // Hide all project content divs
    var projectContents = document.getElementsByClassName('portfolio-details');
    for (var i = 0; i < projectContents.length; i++) {
        projectContents[i].style.display = 'none';
    }

    // Show the selected project content div
    var selectedProjectContent = document.getElementById(partId);
    if (selectedProjectContent) {
        selectedProjectContent.style.display = 'block';
    }
}



