const btnHome = document.querySelector('.home');
const sectionHome = document.querySelector('#home');
btnHome.addEventListener('click', function() {
    sectionHome.scrollIntoView({behavior: "smooth", block:"center"})
});

const btnAbout = document.querySelector('.about');
const sectionAbout = document.querySelector('#about');
btnAbout.addEventListener('click', function() {
    sectionAbout.scrollIntoView({behavior: "smooth", block:"center"})
});

const btnSkills = document.querySelector('.skills');
const sectionSkills = document.querySelector('#skills');
btnSkills.addEventListener('click', function() {
    sectionSkills.scrollIntoView({behavior: "smooth", block:"center"})
});

const btnWorks = document.querySelector('.works');
const sectionWorks = document.querySelector('#works');
btnWorks.addEventListener('click', function() {
    sectionWorks.scrollIntoView({behavior: "smooth", block:"center"})
});

const btnContact = document.querySelector('.contact');
const sectionContact = document.querySelector('#contact');
btnContact.addEventListener('click', function() {
    sectionContact.scrollIntoView({behavior: "smooth", block:"center"})
});

const arrowUp = document.querySelector('.arrow-up');
arrowUp.addEventListener('click', function() {
    sectionHome.scrollIntoView({behavior: "smooth", block:"center"})
})

document.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        arrowUp.classList.add('show');
    } else {
        arrowUp.classList.remove('show');
    }
});
