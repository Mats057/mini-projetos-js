const turnOnOff = document.getElementById ( 'turnOnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOnOff () {
    if ( !isLampBroken () && turnOnOff.textContent == 'Ligar' ) {
        lamp.src = './img/ligada.jpg';
        turnOnOff.textContent = 'Desligar'
    }else if ( !isLampBroken () && turnOnOff.textContent == 'Desligar' ){
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Ligar'
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
    turnOnOff.textContent = 'Quebrou'
}

turnOnOff.addEventListener ( 'click', lampOnOff );
lamp.addEventListener ( 'mouseover', lampOnOff );
lamp.addEventListener ( 'mouseleave', lampOnOff );
lamp.addEventListener ( 'dblclick', lampBroken );