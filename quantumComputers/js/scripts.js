document.getElementById('menu-btn').addEventListener('click', function() {
    var nav = document.getElementById('navbar');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
