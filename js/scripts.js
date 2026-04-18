/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    const fullNameInput = document.getElementById('name');
    const successMessage = document.getElementById('submitSuccessMessage');
    const successText = document.getElementById('submitSuccessText');

    if (contactForm && fullNameInput && successMessage && successText) {
        let submittedName = '';

        contactForm.addEventListener('submit', () => {
            submittedName = fullNameInput.value.trim();
        });

        const applySuccessMessage = () => {
            const nameToUse = submittedName || fullNameInput.value.trim();
            const displayName = nameToUse ? ` ${nameToUse}` : '';
            successText.textContent = `Form submission successful,${displayName}! I'll be in touch! :)`;
            contactForm.reset();
        };

        const successObserver = new MutationObserver(() => {
            if (!successMessage.classList.contains('d-none')) {
                applySuccessMessage();
            }
        });

        successObserver.observe(successMessage, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
