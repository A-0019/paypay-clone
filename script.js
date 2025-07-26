const loginBtn = document.querySelector('button');
const phoneInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const tabLogin = document.querySelector('.tab span:first-child');
const tabRegister = document.querySelector('.tab span:last-child');

// ログインボタンクリック時の処理
loginBtn.addEventListener('click', () => {
  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();

  // リセット
  phoneInput.classList.remove('input-error');
  passwordInput.classList.remove('input-error');

  if (!phone || !password) {
    alert('電話番号とパスワードを入力してください。');
    if (!phone) phoneInput.classList.add('input-error');
    if (!password) passwordInput.classList.add('input-error');
    return;
  }

  if (password.length < 6) {
    alert('パスワードは6文字以上で入力してください。');
    passwordInput.classList.add('input-error');
    return;
  }

  alert(`ログイン試行：\n電話番号: ${phone}\nパスワード: ${password}`);
  localStorage.setItem('loginPhone', phone);
  localStorage.setItem('loginPass', password);
});

// パスワード表示/非表示切り替え（SVGでアイコン切り替え）
const passwordWrapper = passwordInput.parentElement;

const svgNS = "http://www.w3.org/2000/svg";
const eyeIcon = document.createElementNS(svgNS, "svg");
eyeIcon.setAttribute("width", "20");
eyeIcon.setAttribute("height", "20");
eyeIcon.setAttribute("viewBox", "0 0 24 24");
eyeIcon.style.position = 'absolute';
eyeIcon.style.right = '10px';
eyeIcon.style.top = '50%';
eyeIcon.style.transform = 'translateY(-50%)';
eyeIcon.style.cursor = 'pointer';
eyeIcon.classList.add("eye-icon");

const eyePath = document.createElementNS(svgNS, "path");
eyePath.setAttribute("d", "M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z");
eyePath.classList.add("eye-open");

const slashPath = document.createElementNS(svgNS, "path");
slashPath.setAttribute("d", "M3 3L21 21");
slashPath.classList.add("eye-slash");

eyeIcon.appendChild(eyePath);
eyeIcon.appendChild(slashPath);
passwordWrapper.style.position = 'relative';
passwordWrapper.appendChild(eyeIcon);

let passwordVisible = false;
eyeIcon.addEventListener('click', () => {
  passwordVisible = !passwordVisible;
  passwordInput.type = passwordVisible ? 'text' : 'password';
  eyePath.style.opacity = passwordVisible ? '1' : '0.4';
  slashPath.style.display = passwordVisible ? 'none' : 'block';
});

// タブ切り替え（ログイン/新規登録）
tabLogin.addEventListener('click', () => {
  tabLogin.classList.add('active');
  tabRegister.classList.remove('active');
});

tabRegister.addEventListener('click', () => {
  tabRegister.classList.add('active');
  tabLogin.classList.remove('active');
})