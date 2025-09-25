welcomeMessage();
function welcomeMessage() {
  let username = prompt("Masukkan nama Anda:");
  document.getElementById("username").textContent = username || "Guest";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

function validateForm(e) {
  e.preventDefault();
  // Ambil data dari input
  let nama = document.getElementById("nama").value;
  let tanggal = document.getElementById("tanggal").value;
  let gender = document.querySelector("input[name='jenis-kelamin']:checked")?.value || "-";
  let pesan = document.getElementById("pesan").value;

  if(nama === "" || tanggal === "" || pesan === "" || gender === "-") {
    alert("Semua field harus diisi!");
  }else{
    alert("Thanks, "+nama+"! Form submitted successfully!");
  }

  document.getElementById("hasil-nama").textContent = nama || "-";
  document.getElementById("hasil-tanggal").textContent = tanggal || "-";
  document.getElementById("hasil-gender").textContent = gender;
  document.getElementById("hasil-pesan").textContent = pesan || "-";

  document.getElementById('current-time').textContent = new Date().toString();
}