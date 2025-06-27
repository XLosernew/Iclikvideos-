const loginBtn = document.getElementById('loginBtn');
const adminSection = document.getElementById('adminSection');
const pwInput = document.getElementById('pw');
const submitPw = document.getElementById('submitPw');
const uploadBox = document.getElementById('uploadBox');
const videoInput = document.getElementById('videoInput');
const gallery = document.getElementById('gallery');

loginBtn.onclick = () => adminSection.classList.toggle('hidden');
submitPw.onclick = () => {
  if (pwInput.value === 'admin123') {
    uploadBox.classList.remove('hidden');
    loginBtn.disabled = true;
    alert('Admin berhasil login!');
  } else {
    alert('Password salah!');
  }
};

window.onload = () => {
  JSON.parse(localStorage.getItem('videos') || '[]').forEach(addVideo);
};

videoInput.onchange = e => {
  const file = e.target.files[0];
  if (file) {
    const fr = new FileReader();
    fr.onload = ev => {
      addVideo(ev.target.result);
      const arr = JSON.parse(localStorage.getItem('videos') || '[]');
      arr.push(ev.target.result);
      localStorage.setItem('videos', JSON.stringify(arr));
    };
    fr.readAsDataURL(file);
  }
};

function addVideo(src) {
  const v = document.createElement('video');
  v.src = src;
  v.controls = true;
  gallery.appendChild(v);
}
