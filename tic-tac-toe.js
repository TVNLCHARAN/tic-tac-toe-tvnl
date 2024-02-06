let player = 'X';

let buttons = document.querySelectorAll('.gbutton');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.innerHTML === '') {
            let element = document.querySelector('.display');
            button.innerHTML = player;
            element.classList.remove(`result${player}`);
            player = player === 'X' ? 'O' : 'X';
            element.classList.add(`result${player}`);
            element.innerHTML = `<h2>PLAYER ${player} TURN<h2>`
            evaluate();
        }
    });
});

function evaluate(){
    let arr1 = [];
    let result = '';
    buttons.forEach((button)=>{
        arr1.push(button.innerHTML);
    });
    let arr = [];
    for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            row.push(arr1[index]);
        }
        arr.push(row);
    }
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] !== '' && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
            result = arr[i][0];
        }
        if (arr[0][i] !== '' && arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
            result = arr[0][i];
        }
    }
    if(arr[0][0]!='' && arr[0][0]===arr[1][1] && arr[1][1]===arr[2][2]){
        result = arr[0][0];
    }if(arr[0][2]!='' && arr[0][2]===arr[1][1] && arr[1][1]===arr[2][0]){
        result = arr[0][2];
    }
    if(result){
        document.querySelector('.heading').innerHTML = `<h1>Player ${result} Wins!!!🥳🥳</h1>`;
        buttons.forEach((button)=>{
            button.disabled = true;
            if(button.innerHTML!==result && button.innerHTML){
                button.innerHTML = '👎🏻';
            }
            if(button.innerHTML===result){
                button.innerHTML = '🥳';
            }
        })
        document.querySelector('.display').innerHTML = `<button class='reset'>Reset!!</button>`;
        
    }
    let tie = true;
    buttons.forEach((button)=>{
        if(button.innerHTML===''){
            tie = false;
        }
    })
    if(tie || result){
        document.querySelector('.display').innerHTML = `<button class='reset'>Reset!!</button>`;
        document.querySelector('.reset').addEventListener('click',()=>{
            arr = [];
            buttons.forEach((button)=>{
                button.innerHTML = '';
                button.disabled = false;
            })
            document.querySelector('.heading').innerHTML = '<h1>TIC TAC TOE</h1>';
            document.querySelector('.display').innerHTML = '<h2>PLAYER X TURN</h2>';
            player = 'X';
        })
    }
}
