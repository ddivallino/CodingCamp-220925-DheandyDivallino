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
    document.getElementById("hasil-nama").textContent = nama || "-";
    document.getElementById("hasil-tanggal").textContent = tanggal || "-";
    document.getElementById("hasil-gender").textContent = gender;
    document.getElementById("hasil-pesan").textContent = pesan || "-";

    document.getElementById('current-time').textContent = new Date().toString();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".profile-img");
  const infoBox = document.getElementById("info-box");
  const infoName = document.getElementById("info-name");
  const infoAsal = document.getElementById("info-asal");
  const infoLulusan = document.getElementById("info-lulusan");

  photos.forEach(photo => {
    photo.addEventListener("mouseover", function () {
      // ambil data dari atribut foto
      const name = this.getAttribute("data-name");
      const asal = this.getAttribute("data-asal");
      const lulusan = this.getAttribute("data-lulusan");

      // masukkan ke info box
      infoName.textContent = name;
      infoAsal.textContent = "Asal: " + asal;
      infoLulusan.textContent = "Lulusan: " + lulusan;

      // tampilkan info box
      infoBox.classList.remove("hidden");
      infoBox.classList.add("opacity-100");
    });
  });

  // Kalau mau info box hilang lagi saat mouse keluar dari foto-container
  const photoContainer = document.getElementById("photo-container");
  photoContainer.addEventListener("mouseleave", function () {
    infoBox.classList.add("hidden");
    infoBox.classList.remove("opacity-100");
  });
});