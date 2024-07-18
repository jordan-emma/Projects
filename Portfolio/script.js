document.addEventListener('DOMContentLoaded', function() {
    let projectsSection = document.getElementById('projects');

    projectsSection.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('project')) {
            event.target.style.backgroundColor = 'gray'; 
            event.target.style.color ='white';
        }
    });

    projectsSection.addEventListener('mouseout', function(event) {
        if (event.target.classList.contains('project')) {
            event.target.style.backgroundColor = ''; 
            event.target.style.color ='black';
        }
    });
});