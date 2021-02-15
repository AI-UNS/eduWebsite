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
            4:'#52c7fc',
            5: '#0070be'
        }
        boxContainer[i].style = `z-index: ${incr};
                                 background: ${COLORS[randomer]};
                                 transition: 1s;
                                 opacity: 1;
                                 `;
        i++;
        if( i == 6){
            i = 0;
            incr++;
            for(let i = 0; i < 6; i++){
                boxContainer[i].style = `opacity: 0; transition: 1s;`;
            }
        }
        myLoop();
    }, 4000)
}



myLoop()
