document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert('Registro exitoso');
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            alert('Inicio de sesión exitoso');
            window.location.href = './inicio.html'; // Redireccionar a la página principal
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    })
    .catch(error => console.error('Error:', error));
});


document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario de donación
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const tipo_dispositivo = document.getElementById('tipo_dispositivo').value;
    const marca_modelo = document.getElementById('marca_modelo').value;
    const estado_dispositivo = document.getElementById('estado_dispositivo').value;
    const descripcion_estado = document.getElementById('descripcion_estado').value;
    const accesorios = document.getElementById('accesorios').value;
    const preferencia_contacto = document.querySelector('input[name="preferencia_contacto"]:checked').value;
    const instrucciones_entrega = document.getElementById('instrucciones_entrega').value;
    const como_enteraste = document.getElementById('como_enteraste').value;
    const confirmacion_terminos = document.getElementById('confirmacion_terminos').checked;

    // Objeto con los datos de la donación
    const donationData = {
        nombre,
        email,
        telefono,
        tipo_dispositivo,
        marca_modelo,
        estado_dispositivo,
        descripcion_estado,
        accesorios,
        preferencia_contacto,
        instrucciones_entrega,
        como_enteraste,
        confirmacion_terminos
    };

    // Enviar los datos al servidor JSON
    fetch('http://localhost:3000/donaciones', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(donationData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        alert('Donación enviada correctamente');
        console.log('Nueva donación registrada:', data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar la donación');
    });
});



