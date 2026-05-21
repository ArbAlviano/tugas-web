// Cari semua tombol ber-class "buon"
const daftarTombol = document.querySelectorAll('.buon');

// Berikan fungsi klik ke setiap tombol
daftarTombol.forEach(function(tombol) {
    tombol.addEventListener('click', function() {
        const tulisanTombol = tombol.innerText;
        
        // Di sini perubahan utamanya, kita pakai IF ELSE
        if (tulisanTombol === "GIT") {
            
            console.log("User memilih GIT");
            alert("Anda memilih GIT! Waktunya menyimpan kode ke GitHub.");
            
        } else if (tulisanTombol === "GUD") {
            
            console.log("User memilih GUD");
            alert("Anda memilih GUD! Git Gud artinya jadilah lebih jago!");
            
        }
    });
});
