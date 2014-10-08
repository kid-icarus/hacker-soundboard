var sounds = require('./sounds')

module.exports = function() {
  var soundList = document.getElementById('sounds');

  sounds.forEach(function(sound) {
    var newSound = document.createElement('li');
    var soundTitle = document.createElement('span');
    soundTitle.textContent = sound.title;
    newSound.appendChild(soundTitle);
    soundList.appendChild(newSound);
  });
}
