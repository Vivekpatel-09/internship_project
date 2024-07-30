const navLinkEls = document.querySelectorAll('.nav_link');

window.addEventListener('scroll',() => {
    sectionEls.forEach(sectionEls => {
        if ( window.scrollY >= (sectionEl.offsetTop - 200)) {
            currentSection = sectionEl.id;
        }
    });
    navLinkEls.forEach(navLinkEl => {
        if(navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('actie');
        }
    });
});