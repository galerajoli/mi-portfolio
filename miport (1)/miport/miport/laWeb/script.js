document.addEventListener('DOMContentLoaded', function() {
    // Función para inicializar el carrusel
    function initCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) {
            console.warn(`No se encontró el carrusel con ID: ${carouselId}`);
            return;
        }
        const images = carousel.querySelectorAll('.carousel-image');
        if (images.length === 0) {
            console.warn(`No se encontraron imágenes en el carrusel con ID: ${carouselId}`);
            return;
        }

        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        function showNextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function showPrevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        carousel.querySelector('.next').addEventListener('click', showNextImage);
        carousel.querySelector('.prev').addEventListener('click', showPrevImage);
        showImage(currentIndex);
    }

    // Inicializar los carruseles
    initCarousel('carousel1');
    initCarousel('carousel2');

    // Función para alternar "Leer más" / "Leer menos"
    function toggleReadMore(buttonId, textId) {
        const button = document.getElementById(buttonId);
        const text = document.getElementById(textId);

        if (!button || !text) {
            console.warn(`No se encontraron elementos con IDs: ${buttonId}, ${textId}`);
            return;
        }

        button.addEventListener('click', () => {
            if (text.style.webkitLineClamp === '3') {
                text.style.webkitLineClamp = 'unset';
                button.textContent = 'Leer menos';
            } else {
                text.style.webkitLineClamp = '3';
                button.textContent = 'Leer más';
            }
        });
    }

    // Alternar "Leer más" para los textos
    toggleReadMore('read-more1', 'text1');
    toggleReadMore('read-more2', 'text2');

    // Obtener los elementos del DOM para el modal
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactBtn");
    const span = document.getElementsByClassName("close")[0];

    if (!modal || !btn || !span) {
        console.warn('No se encontraron elementos del modal.');
        return;
    }

    // Mostrar el modal cuando el usuario haga clic en "Contactar"
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Cerrar el modal cuando el usuario haga clic en la 'X'
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar el modal cuando el usuario haga clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Manejar el envío del formulario
    document.getElementById("contactForm").onsubmit = function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Obtener los valores de los campos
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Crear el enlace mailto
        const mailtoLink = `mailto:tucorreo@ejemplo.com?subject=Contacto de ${encodeURIComponent(name)}&body=Correo: ${encodeURIComponent(email)}%0D%0A${encodeURIComponent(message)}`;

        // Abrir el cliente de correo
        window.location.href = mailtoLink;

        // Cerrar el modal
        modal.style.display = "none";
    };
});



    // Obtener elementos
    var modal = document.getElementById("certifModal");
    var abrirModalBtn = document.getElementById("abrirCertifModal");
    var cerrarModalBtn = document.querySelector(".cerrarCertifModal");

    // Abrir modal al hacer clic en el enlace
    abrirModalBtn.onclick = function() {
        modal.style.display = "flex"; // Muestra el modal con flex para centrar
    }

    // Cerrar modal al hacer clic en el botón de cerrar
    cerrarModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }




  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  let currentSlide = 0;
  
  nextButton.addEventListener('click', () => {
    if (currentSlide < 1) {
      currentSlide++;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  });


  // Seleccionamos todos los elementos con la clase "flex-item"
const items = document.querySelectorAll('.flex-item');

// Creamos un IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Añadimos la clase 'visible' cuando el elemento entra en la vista
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5 // El porcentaje del elemento que debe estar visible para activar el callback
});

// Asignamos el observer a cada item
items.forEach(item => {
  observer.observe(item);
});


// Abre el modal
document.getElementById("abrirCertifModal").addEventListener("click", function() {
    document.getElementById("certifModal").style.display = "flex";
    document.body.style.overflow = "hidden"; // Evita que la página en segundo plano se desplace
});

// Cierra el modal
document.querySelector(".cerrarCertifModal").addEventListener("click", function() {
    document.getElementById("certifModal").style.display = "none";
    document.body.style.overflow = "auto"; // Restaura el desplazamiento en la página principal
});

// También cierra el modal si se hace clic fuera del contenido
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("certifModal")) {
        document.getElementById("certifModal").style.display = "none";
        document.body.style.overflow = "auto";
    }
});