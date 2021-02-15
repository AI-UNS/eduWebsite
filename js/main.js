let boxContainer = document.querySelectorAll('.box');
let i = 0;
let incr = 2;
function myLoop() {
    setTimeout(function () {
        boxContainer[i].style = `z-index: ${incr};`;
        console.log("hi");
        i++;
        if( i == 6){
            i = 0;
            incr++;
        }
        myLoop();
    }, 3000)
}



myLoop()

// let gridBox = {
//     'block_1': {
//         'col': 0,
//         'row': 0
//     },
//     'block_2': {
//         'col': 0,
//         'row': 0
//     },
//     'block_3': {
//         'col': 0,
//         'row': 0
//     },
//     'block_4': {
//         'col': 0,
//         'row': 0
//     },
//     'block_5': {
//         'col': 0,
//         'row': 0
//     },
//     'block_6': {
//         'col': 0,
//         'row': 0
//     }
// }

// let value_1 = 0
// let value_2 = 0


// for (let i = 0; i < boxContainer.length; i++) {
//     let value_1 = Math.floor(Math.random() * 4);
//     let value_3 = Math.floor(Math.random() * 4);

//     if (value_1 == 0) {
//         value_1 = 1;
//     }
//     if (value_3 == 0) {
//         value_3 = 1;
//     }

//     let value_2 = value_1 + 1;
//     let value_4 = value_3 + 1;

//     // let char = '/'
//     // console.log( "\ngrid-column " + value_1 + char + value_2);
//     // console.log( 'grid-row ' + value_3 + char + value_4);


//     boxContainer[i].style = `grid-column: ${value_1}/${value_2};
//                              grid-row: ${value_3}/${value_4};`;

//     gridBox[`block_${i + 1}`]['col'] = [value_1, value_2];
//     gridBox[`block_${i + 1}`]['row'] = [value_3, value_4];

// }

// for (let i = 0; i < 6; i++) {
//     let gridBoxCol = gridBox[`block_${i + 1}`]['col'];
//     let gridBoxRow = gridBox[`block_${i + 1}`]['row'];
//     let checker = [];

//     for(let g = 0; g < gridBoxCol.length; g++){
//         let comparison = gridBoxCol[g] == gridBoxRow[g];


//         if(comparison){
//             checker.push(comparison);
//         }
//     }


//     if(checker[0] == true && checker[1] == true){
//         console.log('Found same coordinates')
//     }
// }
