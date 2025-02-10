document.addEventListener('DOMContentLoaded', function () {
    var offcanvasElement = document.getElementById('offcanvasRight');
    var offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    var navLinks = document.querySelectorAll('.offcanvas-body .nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            offcanvas.hide();
        });
    });

    function updateHeaderColors() {
        var sections = document.querySelectorAll('main section');
        var header = document.querySelector('header');
        var topLine = document.getElementById('topLine');
        var headerHeight = header.offsetHeight;
        var scrollPosition = window.scrollY + headerHeight;

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var bgColor = window.getComputedStyle(section).backgroundColor;
                var textColor = (bgColor === 'rgb(240, 240, 240)') ? '#151515' : '#f0f0f0';
                var borderClass = (bgColor === 'rgb(240, 240, 240)') ? 'border-black' : 'border-white';
                var imgSrc = (bgColor === 'rgb(240, 240, 240)') ? 'assets/logo/Wordmark wLogo black.svg' : 'assets/logo/Wordmark wLogo white.svg';

                header.style.color = textColor;
                topLine.classList.remove('border-black', 'border-white');
                topLine.classList.add(borderClass);
                header.querySelectorAll('a, svg').forEach(function (element) {
                    element.style.color = textColor;
                });
                header.querySelector('img').src = imgSrc;
            }
        });
    }

    function updateFooterColors() {
        var sections = document.querySelectorAll('main section');
        var footer = document.querySelector('footer');
        var bottomLine = document.getElementById('bottomLine');
        var footerHeight = footer.offsetHeight;
        var scrollPosition = window.scrollY + window.innerHeight - footerHeight;

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var bgColor = window.getComputedStyle(section).backgroundColor;
                var textColor = (bgColor === 'rgb(240, 240, 240)') ? '#151515' : '#f0f0f0';
                var borderClass = (bgColor === 'rgb(240, 240, 240)') ? 'border-black' : 'border-white';
                var btnClassToAdd = (bgColor === 'rgb(240, 240, 240)') ? 'btn-outline-dark' : 'btn-outline-light';
                var btnClassToRemove = (bgColor === 'rgb(240, 240, 240)') ? 'btn-outline-light' : 'btn-outline-dark';

                footer.style.color = textColor;
                bottomLine.classList.remove('border-black', 'border-white');
                bottomLine.classList.add(borderClass);
                footer.querySelectorAll('a, svg').forEach(function (element) {
                    element.style.color = textColor;
                });
                footer.querySelectorAll('a.btn').forEach(function (btn) {
                    btn.classList.remove(btnClassToRemove);
                    btn.classList.add(btnClassToAdd);
                });

                // Toggle visibility of the link buttons column
                var linkButtonsColumn = document.getElementById('FooterLinks');
                if (section.id === 'home') {
                    linkButtonsColumn.setAttribute('hidden', 'hidden');
                } else {
                    linkButtonsColumn.removeAttribute('hidden');
                }
            }
        });
    }

    window.addEventListener('scroll', updateHeaderColors);
    window.addEventListener('scroll', updateFooterColors);
    updateHeaderColors();
    updateFooterColors();
});