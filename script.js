function updateClock() {
    const timeElement = document.getElementById('clock-time-element');
    const dateElement = document.getElementById('clock-date-element');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timeElement.textContent = `${hours}.${minutes}.${seconds} ${ampm}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    dateElement.textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock(); 

const totalBurnTime = 60000; 
setTimeout(triggerBlast, totalBurnTime);

function triggerBlast() {
    const body = document.getElementById('main-body');
    const fuse = document.getElementById('fuse-element');
    const fire = document.getElementById('fire-element');
    const earth = document.getElementById('earth-wrapper-element');
    const shatteredContainer = document.getElementById('shattered-container');
    const explosion = document.getElementById('explosion-element');
    const restartBtn = document.getElementById('restart-btn');

    if (fire) fire.style.display = 'none';
    if (fuse) fuse.style.display = 'none';

    body.classList.add('shake-active');

    earth.style.display = 'none';
    shatteredContainer.style.display = 'block';
    shatteredContainer.classList.add('blast-pieces');

    explosion.classList.add('explode-active');

    setTimeout(() => {
        body.classList.remove('shake-active');
        restartBtn.style.display = 'block';
    }, 1200);
}

function resetBomb() {
    location.reload();
}