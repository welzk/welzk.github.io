document.addEventListener('DOMContentLoaded', () => {
    // Finds the first modal element on the page with the class 'modal'.
    const modal = document.querySelector('.modal');
    
    // Finds the modal body element.
    const modalBody = modal ? modal.querySelector('.modal-body') : null;

    // Selects all image elements with the class "open".
    const galleryImages = document.querySelectorAll('img.open');

    // Function to open the modal with a specific image.
    function openModal(imageSrc) {
        if (!modal || !modalBody) return;

        // Removes existing content in the modal body.
        modalBody.innerHTML = '';

        // Creates a new image element for the modal.
        const modalImage = document.createElement('img');
        modalImage.src = imageSrc;
        modalImage.classList.add('w-full', 'h-auto', 'object-contain', 'rounded-lg');
        
        // Appends the image to the modal body.
        modalBody.appendChild(modalImage);

        // Displays the modal.
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevents background scrolling.
    }

    // Function to close the modal.
    function closeModal() {
        if (!modal) return;
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restores background scrolling.
    }

    // Adds click event listeners to all gallery images.
    galleryImages.forEach(image => {
        // Ignores images that might already be inside a modal.
        if (!image.closest('.modal')) {
            image.addEventListener('click', (event) => {
                openModal(event.target.src);
            });
        }
    });

    // Adds a click event listener to the modal background to close it.
    if (modal) {
        modal.addEventListener('click', (event) => {
            // Checks if the click was directly on the modal background (and not on the image itself).
            if (event.target === modal || event.target.classList.contains('modal-dialog')) {
                closeModal();
            }
        });
        
        // Adds a click event listener to the close button.
        const closeButton = modal.querySelector('[data-bs-dismiss="modal"]');
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }
    }

    // Adds a keyboard event listener to close the modal with the 'Escape' key.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });
});