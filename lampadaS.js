const lampada = document.querySelector('#luzLampada');

let lampadaAcesa = false;

lampada.addEventListener('click', () => {
    if (lampadaAcesa) {
        lampada.src = 'lampada.jpg'
        lampadaAcesa = false;
    } else {
        lampada.src = 'lampada-on.jpg'
        lampadaAcesa = true;
    }
});

const hover = document.querySelector('#dd');

lampadaHouver = false;

hover.addEventListener('mouseover', () => {
    if (lampadaHouver) {
        hover.src = 'lampada.jpg'
        lampadaHouver = false;
    } else {
        hover.src = 'lampada-on.jpg';
        lampadaHouver = true;
    }
});



