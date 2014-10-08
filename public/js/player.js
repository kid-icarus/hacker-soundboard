var sounds = require('./sounds')

module.exports = function() {
  var soundList = document.getElementById('sounds');

  var add = function(sound) {
    var newSound = document.createElement('li');
    newSound.innerHTML = '' +
      '<span>' + sound.title + '</span>' +
      '<audio src="/sounds/' + sound.file + '"></audio>';
    soundList.appendChild(newSound);
  }

  var play = function(ev) {
    var sound;
    if (ev.target.nodeName === 'LI') {
      sound = ev.target;
    }
    else if (ev.target.nodeName === 'SPAN') {
      sound = ev.target.parentNode;
    }
    var clip = sound.querySelector('audio');
    clip.play();
  }

  sounds.forEach(add);
  soundList.addEventListener('click', play);
}
