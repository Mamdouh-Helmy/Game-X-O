let turn = 'x';
let title = document.querySelector(".title");
let arr = [];

function game(id){
    let squares = document.getElementById(id);
    if(turn === 'x' && squares.innerHTML === ''){
        squares.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O 🤗🤗';
    }else if (turn === 'o' && squares.innerHTML === '') {
        squares.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X 🤗🤗';
    }
    winner();
    // gameOver ();
}

function end(num1 , num2 , num3){
        title.innerHTML = `${arr[num1]} Winner`;
        document.getElementById("item" + num1).style.backgroundColor = '#000';
        document.getElementById("item" + num2).style.backgroundColor = '#000';
        document.getElementById("item" + num3).style.backgroundColor = '#000';
        
        setInterval( () => {
            title.innerHTML += `.`;
        } , 1000)

        setTimeout( () => {
            location.reload();
        } , 3000)

        turn = '';
}

function gameOver () {
    title.innerHTML = `Game Over`;
        
        setInterval( () => {
            title.innerHTML += `.`;
        } , 1000)

        setTimeout( () => {
            location.reload();
        } , 3000)

        turn = '';
}

function winner(){
    for(let i = 1 ; i < 10 ; i++){
        arr[i] = document.getElementById("item" + i).innerHTML;
    }
    if(arr[1] === arr[2] && arr[2] === arr[3] && arr[1] !== ''){
        end(1 , 2 , 3);
    }else if (arr[4] === arr[5] && arr[5] === arr[6] && arr[4] !== '') {
        end(4 , 5 , 6);
    }else if (arr[7] === arr[8] && arr[8] === arr[9] && arr[7] !== '') {
        end(7 , 8 , 9);
    }else if (arr[1] === arr[5] && arr[5] === arr[9] && arr[1] !== '') {
        end(1 , 5 , 9);
    }else if (arr[3] === arr[5] && arr[5] === arr[7] && arr[3] !== '') {
        end(3 , 5 , 7);
    }else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== '') {
        end(1 , 4 , 7);
    }else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== '') {
        end(2 , 5 , 8);
    }else if (arr[3] === arr[6] && arr[6] === arr[9] && arr[3] !== '') {
        end(3 , 6 , 9);
    }else if (arr.every(cell => cell !== '')) {
        title.innerHTML = `Game Over`;
        
        setInterval(() => {
            title.innerHTML += `.`;
        }, 1000);
    
        setTimeout(() => {
            location.reload();
        }, 3000);
    
        turn = '';
    }
}
