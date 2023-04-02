import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeStorage = "videoplayer-current-time";
const currentTime = localStorage.getItem(timeStorage);
    
if (currentTime !== null) {
    player.setCurrentTime(currentTime);
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime(e) {
    localStorage.setItem(timeStorage, e.seconds)
};