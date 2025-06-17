
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if(user === 'admin' && pass === '1234') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('desktop').style.display = 'block';
  } else {
    alert('Invalid Login');
  }
}
function openApp(url) {
  const iframe = document.createElement('iframe');
  iframe.className = 'app-frame';
  iframe.src = url;
  document.body.appendChild(iframe);
}
