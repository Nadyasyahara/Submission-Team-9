const Pilihan = document.getElementById('Pilihan');
const semuakategori = document.querySelectorAll('.Kategori-menu');

        Pilihan.addEventListener('change', function(){
            const pilihanuser = this.value;
            semuakategori.forEach(Kategori => {
                if (pilihanuser === 'Semua' || Kategori.dataset.kategori === pilihanuser) {
                    Kategori.style.display = 'block';
                } else {
                    Kategori.style.display = 'none';
                }
            });
        });
