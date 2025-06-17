function openApp(url) {
  const win = document.createElement('div');
  win.className = 'app-window';
  win.style.top = '100px';
  win.style.left = '100px';

  const header = document.createElement('div');
  header.className = 'app-header';
  header.innerText = url.split('/').pop().replace('.html', '');

  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.className = 'app-body';

  win.appendChild(header);
  win.appendChild(iframe);
  document.body.appendChild(win);

  let offsetX, offsetY, isDragging = false;
  header.onmousedown = function (e) {
    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  };
  document.onmousemove = function (e) {
    if (isDragging) {
      win.style.left = (e.clientX - offsetX) + 'px';
      win.style.top = (e.clientY - offsetY) + 'px';
    }
  };
  document.onmouseup = function () {
    isDragging = false;
  };
}
