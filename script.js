// ===== Sửa ở đây =====
const SECRET_CODE = "03102026";
const MESSAGE = `Hy vọng mọi điều tốt đẹp sẽ đến với em 🌸`;
// =====================

const $ = (id) => document.getElementById(id);
const audio = $("audio");

$("lockForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if ($("code").value.trim() !== SECRET_CODE) {
    $("error").textContent = "Sai mã rồi nè 😢 thử lại đi";
    $("lock").classList.remove("shake");
    void $("lock").offsetWidth; // restart animation
    $("lock").classList.add("shake");
    return;
  }
  $("lock").classList.add("hidden");
  $("main").classList.remove("hidden");
  audio.play().catch(() => {}); // được phép autoplay vì người dùng vừa bấm
  typeMessage();
});

function typeMessage() {
  let i = 0;
  const timer = setInterval(() => {
    $("message").textContent = MESSAGE.slice(0, ++i);
    if (i >= MESSAGE.length) clearInterval(timer);
  }, 45);
}

function spawnHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = ["💖", "💕", "💗", "❤️", "🌸"][Math.floor(Math.random() * 5)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 16 + Math.random() * 24 + "px";
  h.style.animationDuration = 4 + Math.random() * 4 + "s";
  $("hearts").appendChild(h);
  setTimeout(() => h.remove(), 8000);
}
setInterval(spawnHeart, 600);
