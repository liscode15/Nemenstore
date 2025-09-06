document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 'carouselCargoPanjang',
            name: 'Celana Cargo Panjang',
            colors: 5
        },
        {
            id: 'carouselCargoPendek',
            name: 'Celana Cargo Pendek',
            colors: 5
        },
        {
            id: 'carouselChinosPanjang',
            name: 'Celana Chinos Panjang',
            colors: 5
        },
        {
            id: 'carouselChinosPendek',
            name: 'Celana Chinos Pendek',
            colors: 5
        },
        {
            id: 'carouselAnkle',
            name: 'Celana Ankle',
            colors: 4
        },
        {
            id: 'carouselJudbrey',
            name: 'Celana Judbrey',
            colors: 9
        }
    ];

    // Fungsi untuk membuat slide gambar produk
    function generateProductImages(carouselId, numColors) {
        const carouselInner = document.querySelector(`#${carouselId} .carousel-inner`);
        if (!carouselInner) return;

        // Foto depan produk
        let html = `<div class="carousel-item active">
                        <img src="img/${carouselId}-depan.jpg" class="d-block w-100" alt="Foto Depan">
                    </div>`;
        
        // Foto per warna
        for (let i = 1; i <= numColors; i++) {
            html += `<div class="carousel-item">
                        <img src="img/${carouselId}-warna-${i}.jpg" class="d-block w-100" alt="Foto Warna ${i}">
                    </div>`;
        }
        carouselInner.innerHTML = html;
    }

    // Generate foto untuk setiap produk
    products.forEach(product => {
        generateProductImages(product.id, product.colors);
    });

    // Fungsi untuk membuat link WhatsApp
    function createWhatsAppLink(productName, color, size) {
        const phoneNumber = '6287815884094';
        const message = `Halo kak, saya tertarik dengan ${productName} warna ${color} ukuran ${size}.`;
        return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }

    // Tambahkan event listener untuk semua tombol "Pesan Sekarang"
    document.querySelectorAll('.pesan-sekarang').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const productName = this.getAttribute('data-produk');
            const selectedColor = card.querySelector('select[name="warna"]').value;
            const selectedSize = card.querySelector('select[name="ukuran"]').value;
            
            const waLink = createWhatsAppLink(productName, selectedColor, selectedSize);
            window.open(waLink, '_blank');
        });
    });
});
