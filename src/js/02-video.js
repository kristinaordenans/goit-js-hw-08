import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.getVideoTitle().then((title) => {
    console.log('title:', title);
});

const timeStorage = "videoplayer-current-time";
const currentTime = localStorage.getItem(timeStorage);
    
if (currentTime !== 0) {
    player.setCurrentTime(currentTime);
};


function getCurrentTime(e) {
    localStorage.setItem(timeStorage, e.seconds)
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

