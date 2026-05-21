// Cari semua tombol ber-class "buon"
const daftarTombol = document.querySelectorAll('.buon');

// Berikan fungsi klik ke setiap tombol
daftarTombol.forEach(function(tombol) {
    tombol.addEventListener('click', function() {
        const tulisanTombol = tombol.innerText;
        
        // Cetak ke console inspect untuk pembuktian
        console.log('User baru saja mengklik tombol: ' + tulisanTombol);
        
        // Tetap munculkan alert agar seru
        alert('Hebat! Kamu berhasil mengklik tombol ' + tulisanTombol);
    });
});
