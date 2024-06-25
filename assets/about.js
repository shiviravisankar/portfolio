const photoContainer = document.getElementById('photoContainer');
        const numPhotos = 5;
        let currentPhotoIndex = 0;

        function createPhoto(index) {
            const photo = document.createElement('div');
            photo.className = 'photo ' + (Math.random() < 0.5 ? 'horizontal' : 'vertical');
            photo.style.zIndex = index;
            return photo;
        }

        function showNextPhoto() {
            const photos = document.querySelectorAll('.photo');
            const currentPhoto = photos[currentPhotoIndex];

            const angle = Math.random() * 20 - 10; // Random angle between -10 and 10 degrees
            const zOffset = currentPhotoIndex * 0.5; // Slight Z offset for 3D effect

            currentPhoto.style.opacity = '1';
            currentPhoto.style.transform = `translateX(-50%) translateY(-50%) rotateZ(${angle}deg) translateZ(${zOffset}vw)`;

            currentPhotoIndex = (currentPhotoIndex + 1) % numPhotos;

            if (currentPhotoIndex === 0) {
                setTimeout(() => {
                    photos.forEach(photo => {
                        photo.style.opacity = '0';
                        photo.style.transform = 'translateX(-50%) translateY(-50%) rotateZ(0deg) translateZ(0px)';
                    });
                }, 1000);
            }
        }

        for (let i = 0; i < numPhotos; i++) {
            const photo = createPhoto(i);
            photoContainer.appendChild(photo);
        }

        setInterval(showNextPhoto, 2000);