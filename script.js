const Pilihan = document.getElementById('Pilihan');
const semuakategori = document.querySelectorAll('.Kategori-menu');

if (Pilihan) {
    Pilihan.addEventListener('change', function () {
        const pilihanuser = this.value;
        semuakategori.forEach(Kategori => {
            if (pilihanuser === 'Semua') {
                if (Kategori.dataset.kategori === 'Favorit') {
                    Kategori.style.display = 'none';
                } else {
                    Kategori.style.display = 'block';
                }
            } else if (Kategori.dataset.kategori === pilihanuser) {
                Kategori.style.display = 'block';
            } else {
                Kategori.style.display = 'none';
            }
        });
    });

    window.addEventListener('DOMContentLoaded', () => {
        semuakategori.forEach(Kategori => {
            if (Kategori.dataset.kategori === 'Favorit') {
                Kategori.style.display = 'none';
            }
        });
    });
}

const menu = document.getElementById("menuhp");
const openBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-menu");

if (menu && openBtn && closeBtn) {
    openBtn.addEventListener("click", () => {
        menu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
    });
}
