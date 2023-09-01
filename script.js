// Temukan tombol "Website" berdasarkan ID
const websiteButton = document.getElementById("button-website");
const WhatsAppButton =  document.getElementById("button-whatsapp")
const shopeeButton = document.getElementById("button-shopee")
const tokpedButton = document.getElementById("button-tokped")

// Tambahkan event listener ke tombol "Website"
websiteButton.addEventListener("click", function() {
  // Lakukan tindakan yang sesuai, seperti mengarahkan pengguna ke URL
  window.location.href = "https://www.example.com";
});

// Tambahkan event listener ke tombol "WhatsApp"
WhatsAppButton.addEventListener("click", function () {
    window.open('https://wa.me/6285173103413', '_blank');
});

// Tambahkan event listener ke tombol "Shopee"
shopeeButton.addEventListener("click", function() {
    window.location.href = "https://shopee.co.id/shop/364368552";
});

// Tambahkan event listener ke tombol "Tokped"
tokpedButton.addEventListener("click", function() {
    window.location.href="https://tokopedia.link/h8JgeQY9JCb";
});