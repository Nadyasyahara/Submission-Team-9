const Pilihan = document.getElementById("Pilihan");
        const Menu = document.getElementById("Menu");

        Pilihan.addEventListener("change", function(e){
            Menu.innerText = `menu yang tersedia: ${e.target.value}`;
        });
