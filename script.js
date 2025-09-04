document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productId = product.dataset.productId;
        const colorCount = parseInt(product.dataset.colors, 10);
        const imageGallery = product.querySelector('.image-gallery');
        const colorSwatches = product.querySelectorAll('.swatch');

        // Fungsi untuk mengelola galeri gambar
        function generateImages(count) {
            imageGallery.innerHTML = '';
            for (let i = 1; i <= count; i++) {
                const img = document.createElement('img');
                img.classList.add('product-image');
                img.src = `https://via.placeholder.com/350x350/${productId}-${i}`; // Placeholder
                img.alt = `${productId} - Gambar ${i}`;
                if (i === 1) {
                    img.classList.add('active');
                }
                imageGallery.appendChild(img);
            }
        }

        // Jalankan fungsi untuk setiap produk
        generateImages(colorCount + 1);

        // Tambahkan event listener untuk swatch warna
        colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                colorSwatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
            });
        });

        // Tambahkan event listener untuk tombol "Pesan Sekarang"
        const orderButton = product.querySelector('.add-to-cart');
        orderButton.addEventListener('click', () => {
            const selectedColor = product.querySelector('.swatch.active').dataset.color;
            const selectedSize = product.querySelector('.size-select').value;
            const productName = product.querySelector('.card-title').textContent;

            // Membangun pesan otomatis
            const message = `Hai kak, saya mau order *${productName}* dengan detail berikut:%0A%0A- Ukuran: ${selectedSize}%0A- Warna: ${selectedColor}%0A%0ATerima kasih.`;

            // Nomor WhatsApp Anda (ganti dengan nomor Anda)
            const phoneNumber = '6287815884094'; 

            // URL untuk membuka WhatsApp dengan pesan otomatis
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            // Buka tab baru atau jendela untuk WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    });
});
