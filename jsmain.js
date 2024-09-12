document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    // Show the home section by default
    document.getElementById('home').style.display = 'block';

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href').substring(1);

            // Hide all sections
            sections.forEach(section => section.style.display = 'none');

            // Show the target section
            document.getElementById(targetSection).style.display = 'block';

            // Update the active tab
            tabs.forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
