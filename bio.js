document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var nama = document.getElementById("nama").value;
    var varian = document.getElementById("varian").value;
    var jumlah = document.getElementById("jumlah").value;
    var catatan = document.getElementById("catatan").value;

    var pesan =
        "Halo, saya mau pesan BioShine%0A%0A" +
        "Nama: " + nama + "%0A" +
        "Varian: " + varian + "%0A" +
        "Jumlah: " + jumlah + "%0A" +
        "Catatan: " + catatan;

    var nomorWA = "6283896690924";
    var url = "https://wa.me/" + nomorWA + "?text=" + pesan;

    window.open(url, "_blank");
});
