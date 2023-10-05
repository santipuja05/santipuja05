document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.querySelector('.button-container');

    // Fungsi untuk menambahkan tombol
    function createButton(text, link, className) {
        const button = document.createElement('a');
        button.href = link;
        button.className = `button ${className}`;
        button.textContent = text;
        buttonContainer.appendChild(button);
    }

    // Menambahkan tombol WhatsApp
    createButton('WhatsApp', 'https://wa.me/6288707649301', 'whatsapp-button');

    // Menambahkan tombol Shopee
    createButton('Shopee', 'https://shopee.co.id/syabnaalifa', 'shopee-button');

    // Menambahkan tombol Tokopedia
    createButton('Tokopedia', 'https://www.tokopedia.com/', 'tokopedia-button');

});
