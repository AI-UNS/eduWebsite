let boxContainer = document.querySelectorAll('.box');
let i = 0;
let incr = 2;
function myLoop() {
    setTimeout(function () {
        let randomer = Math.floor(Math.random() * 6);
        const COLORS = {
            0: '#ffc300',
            1: '#e96a96',
            2: '#4bc0a2',
            3: '#a373b6',
            4: '#52c7fc',
            5: '#0070be'
        }
        boxContainer[i].style = `z-index: ${incr};
                                 background: ${COLORS[randomer]};
                                 transition: 1s;
                                 opacity: 1;
                                 `;
        i++;
        if (i == 6) {
            i = 0;
            incr++;
            for (let i = 0; i < 6; i++) {
                boxContainer[i].style = `opacity: 0; transition: 0.5s;`;
            }
        }
        myLoop();
    }, 4000)
}

myLoop()

///////////////////////////// Slides ////////////////////////////////

const quotesList = {
    0: {
        'quote': `Before Coursecity, I was working two minimum wage jobs. Now,
        & new life!"I learned most of my programming skills and
        hrough self-study and the material available.`,
        'author': 'stephanie magion'
    },
    1: {
        'quote': `To wisely live your life, you don't need to know much
        Just remember two main rules for the beginning:
        You better starve, than eat whatever
        And better be alone, than with whoever.`,
        'author': 'omar khayyam'
    },
    2: {
        'quote': `Life is really simple, but we insist on making it complicated.`,
        'author': 'confucius'
    },
    3: {
        'quote': `I didn't fail the test. I just found 100 ways to do it wrong.`,
        'author': 'benjamin franklin'
    },
    4: {
        'quote': `First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.`,
        'author': 'aristotle'
    }
}

let quoteText = document.querySelector('.quote p'),
    quoteAuth = document.querySelector('.quote h3'),
    slides = document.querySelectorAll('.slides'),
    parentSlides = document.querySelector('.quotes__slides');

let z = 0;
function quoteLoop() {
    if (z >= 5) {
        slides[z - 1].classList.remove('active');
        z = 0;
    }

    quoteText.innerHTML = quotesList[z]['quote'];
    quoteAuth.innerHTML = quotesList[z]['author'];
    slides[z].classList.toggle('active');
    z++;

    if (z !== 1 && slides[z - 2].classList.contains('active')) {
        slides[z - 2].classList.remove('active');
    }
}
setInterval(quoteLoop, 5000);

for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function () {
        quoteText.innerHTML = quotesList[i]['quote'];
        quoteAuth.innerHTML = quotesList[i]['author'];
    })
}