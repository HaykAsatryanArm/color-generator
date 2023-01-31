window.onload = function () {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);

    let r1 = randomBetween(0, 255);
    let g1 = randomBetween(0, 255);
    let b1 = randomBetween(0, 255);
    let hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    let hex1 = '#' + ((1 << 24) + (r1 << 16) + (g1 << 8) + b1).toString(16).slice(1);
    let rgb = randomBetween(0, 360)
    let h1 = document.getElementById('h1')
    document.body.style.background = `linear-gradient(${rgb}deg, ${hex}, ${hex1})`
    h1.style.fontSize = '2.5rem'
    h1.innerText = `linear-gradient(${rgb}deg, ${hex}, ${hex1})`
    
    
    // h1.innerText = hex


}