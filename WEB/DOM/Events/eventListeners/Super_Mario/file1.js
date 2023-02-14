document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) {
    document.getElementById('animatedBackground').className = 'animated';
    document.querySelector('.mario-pho').classList.add('hidden');
    document.querySelector('.mario-run').classList.remove('hidden');
  }
});
document.addEventListener('keyup', function (event) {
  if (event.code === 'ArrowRight') {
    document.getElementById('animatedBackground').className = '';
    // document.getElementById('super').src = './SuperMarioAssets/mario.png';
    document.querySelector('.mario-pho').classList.remove('hidden');
    document.querySelector('.mario-run').classList.add('hidden');
  }
});
