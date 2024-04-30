let minesweeper = document.querySelector('#minesweeper');

let game_container = document.querySelector('#game-container');

for ( let i = 1; i <= 144; i++ ) {
    let box = document.createElement('button');
    box.classList.add('land-box');
    box.setAttribute('state', 'hidden');

    if ( i <= 12 || ( i > 24 && i <= 36 ) || ( i > 48 && i <= 60 ) || ( i > 72 && i <= 84 ) || ( i > 96 && i <= 108 ) || ( i > 120 && i <= 132 ) ) {
        if ( i % 2 == 0 ) {
            box.classList.add('light');
        }
    }
    if ( ( i > 12 && i < 24 ) || ( i > 36 && i < 48 ) || ( i > 60 && i < 72 ) || ( i > 84 && i < 96 ) || ( i > 108 && i < 120 ) || ( i > 132 && i < 144 ) ) {
        if ( i % 2 != 0 ) {
            box.classList.add('light');
        } 
    }

    game_container.appendChild(box);
}

let land_boxes = document.querySelectorAll('.land-box');
land_boxes.forEach((box) => {

    box.addEventListener('click', (e) => {

        if ( e.currentTarget.getAttribute('state') == 'hidden' ) {
            e.currentTarget.setAttribute('state', 'revealed');
        }

    });

});