// Esperar a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cambiar el color de fondo cuando se hace clic en el botón de la página de inicio
    const changeColorBtn = document.getElementById('changeColorBtn');
    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', () => {
            // Generar un color de fondo aleatorio
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            document.body.style.backgroundColor = randomColor;
        });
    }

    // 2. Validación simple del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Por favor, complete todos los campos.');
                event.preventDefault(); // Evita el envío del formulario si hay campos vacíos
            } else {
                alert('Formulario enviado correctamente.');
            }
        });
    }

    // 3. Cambiar el título de la página cuando se pasa el ratón sobre un encabezado
    const headers = document.querySelectorAll('header h1');
    headers.forEach(header => {
        header.addEventListener('mouseover', () => {
            document.title = '¡Estás sobre el encabezado!';
        });
        header.addEventListener('mouseout', () => {
            document.title = 'Mi Sitio Web'; // Restaurar título original
        });
    });

    
    const mas1 = document.querySelector('#btnmas1');
    const cerrar1 = document.querySelector('#btncerrar1')
    const card1text = document.querySelector('#card1text')
    mas1.addEventListener('click', function(){
        card1text.classList.remove('hidden');
        mas1.classList.add('hidden')
        cerrar1.classList.remove('hidden');
        
    })
    cerrar1.addEventListener('click', function(){
        card1text.classList.add('hidden');
        mas1.classList.remove('hidden')
        cerrar1.classList.add('hidden');

    })

    const mas2 = document.querySelector('#btnmas2');
    const cerrar2 = document.querySelector('#btncerrar2')
    const card2text = document.querySelector('#card2text')
    mas2.addEventListener('click', function(){
        card2text.classList.remove('hidden');
        mas2.classList.add('hidden')
        cerrar2.classList.remove('hidden');
        
    })
    cerrar2.addEventListener('click', function(){
        card2text.classList.add('hidden');
        mas2.classList.remove('hidden')
        cerrar2.classList.add('hidden');

    })

    const mas3 = document.querySelector('#btnmas3');
    const cerrar3 = document.querySelector('#btncerrar3')
    const card3text = document.querySelector('#card3text')
    mas3.addEventListener('click', function(){
        card3text.classList.remove('hidden');
        mas3.classList.add('hidden')
        cerrar3.classList.remove('hidden');
        
    })
    cerrar3.addEventListener('click', function(){
        card3text.classList.add('hidden');
        mas3.classList.remove('hidden')
        cerrar3.classList.add('hidden');

    })
});




