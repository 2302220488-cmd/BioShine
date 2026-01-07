document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("orderForm").addEventListener("submit", function (e) {
        e.preventDefault();

        var nama = document.getElementById("nama").value;
        var varian = document.getElementById("varian").value;
        var jumlah = document.getElementById("jumlah").value;
        var catatan = document.getElementById("catatan").value;

        if(!nama || !varian || !jumlah) {
            alert("Mohon lengkapi data pemesanan!");
            return;
        }

        var pesan =
            "Halo, saya mau pesan BioShine\n\n" +
            "Nama: " + nama + "\n" +
            "Varian: " + varian + "\n" +
            "Jumlah: " + jumlah + "\n" +
            "Catatan: " + catatan;

        var nomorWA = "6283896690924"; // Ganti dengan nomor WA kamu
        var url = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(pesan);

        window.open(url, "_blank");
    });
});
