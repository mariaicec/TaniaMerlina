document.getElementById('showMoreBtn').addEventListener('click', function() {
    var detailsSection = document.getElementById('details');
    if (detailsSection.style.display === 'none') {
        detailsSection.style.display = 'block';
        this.textContent = 'Mostrar menos';
    } else {
        detailsSection.style.display = 'none';
        this.textContent = 'Saber más';
    }
});




