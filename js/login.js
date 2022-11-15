// 비밀번호 숨기기/보이기
function changeBtn() {
    const iconBtn = document.getElementById('passwd-icon');
    const passwdBtn = document.getElementById('input-passwd');
    if (iconBtn.classList.contains('fa-eye-slash')) {
        iconBtn.classList.replace('fa-eye-slash', 'fa-eye');
        passwdBtn.type = "text"
    } else {
        iconBtn.classList.replace('fa-eye', 'fa-eye-slash');
        passwdBtn.type = "password"
    }
}