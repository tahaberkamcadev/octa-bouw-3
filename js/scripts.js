window.addEventListener('DOMContentLoaded', event => {

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

    navbarShrink();


    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    
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

    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function () {
            const shortText = this.previousElementSibling.querySelector('.short-text');
            const fullText = this.previousElementSibling.querySelector('.full-text');
    
            if (fullText.classList.contains('d-none')) {
                fullText.classList.remove('d-none');
                shortText.classList.add('d-none');
                if (document.documentElement.lang === 'nl') {
                    this.textContent = 'Lees minder';
                } else if (document.documentElement.lang === 'en') {
                    this.textContent = 'Read less';
                } else {
                    this.textContent = 'Daha az';
                }
            } else {
                fullText.classList.add('d-none');
                shortText.classList.remove('d-none');
                if (document.documentElement.lang === 'nl') {
                    this.textContent = 'Lees meer';
                } else if (document.documentElement.lang === 'en') {
                    this.textContent = 'Read more';
                } else {
                    this.textContent = 'Devamını oku';
                }
            }
        });
    });


});


const modals = [
    { mainImageId: 'main-modal-image-1', thumbnailsId: 'modal-thumbnails-1' },
    { mainImageId: 'main-modal-image-2', thumbnailsId: 'modal-thumbnails-2' },
    { mainImageId: 'main-modal-image-3', thumbnailsId: 'modal-thumbnails-3' },
    { mainImageId: 'main-modal-image-4', thumbnailsId: 'modal-thumbnails-4' },
    { mainImageId: 'main-modal-image-5', thumbnailsId: 'modal-thumbnails-5' },
    { mainImageId: 'main-modal-image-6', thumbnailsId: 'modal-thumbnails-6' }
];

document.addEventListener('DOMContentLoaded', () => {
    

    modals.forEach(modal => {
        const mainImage = document.getElementById(modal.mainImageId);
        const thumbnails = document.querySelectorAll(`#${modal.thumbnailsId} img`);

        if (mainImage && thumbnails.length > 0) {
            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', () => {
                    mainImage.src = thumbnail.src; 
                });
            });
        }
    });
});

function toggleMobileLanguageMenu() {
    const menu = document.getElementById('mobileLanguageMenu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}


document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobileLanguageMenu');
    const button = event.target.closest('.btn-primary');
    if (!button && menu.style.display === 'block') {
        menu.style.display = 'none';
    }
});

function handleLanguageClick(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const navbarCollapse = document.getElementById('navbarResponsive');
    if (navbarCollapse.classList.contains('show')) {
        event.stopImmediatePropagation();
    }
}


document.querySelectorAll('#collapseOne .btn-link').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});


