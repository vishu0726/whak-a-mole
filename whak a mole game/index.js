const cursor = document.querySelector('.cursor');
const holes = [...document.querySelectorAll('.hole')];
const scoreEl = document.querySelector('.score span');
let score = 0;
const sound = new Audio ('./images/assets_smash.mp3');
function run() {
    const i = Math.floor(Math.random() * holes.length);
    const hole = holes[i];
    let timer = null;

    const img = document.createElement('img');
    img.classList.add('mole');
    img.src = './images/mole.png';
    img.addEventListener('click', ()=> {
        score += 10;
        scoreEl.innerHTML = score;
        sound.play();
        img.src = './images/mole-whacked.png'
        setTimeout(() => {
            hole.removeChild(img);
            run();
        },500)
    })
    hole.appendChild(img);
    timer = setTimeout(() => {
        hole.removeChild(img);
        run();
    },900);
}
run();
//we adding listener to mass movement
window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px' //we get position of our mouse at Y direction
    cursor.style.left = e.pageX + 'px' //we get position of our mouse at X direction
})
window.addEventListener('mousedown',() => {
    cursor.classList.add('active');
})
window.addEventListener('mouseup',() => {
    cursor.classList.remove('active');
})