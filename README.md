# PruebaBotBlaze

Este proyecto es una prueba técnica para desarrollar habilidades en el uso de Laravel y en el desarrollo web en general. El objetivo es crear una aplicación funcional que demuestre el conocimiento en estas tecnologías.

## Tecnologías utilizadas

- **PHP**: Lenguaje de programación principal para el backend.
- **Laravel**: Framework PHP utilizado para el desarrollo backend.
- **MySQL**: Sistema de gestión de bases de datos utilizado para el almacenamiento.
- **JavaScript**: Lenguaje utilizado para la interactividad en el frontend.
- **HTML/CSS**: Lenguajes utilizados para estructurar y estilizar el frontend.
- **Git**: Control de versiones utilizado para la gestión del proyecto.

## Instrucciones para ejecutar el proyecto

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Chompi777/PruebaBotBlaze.git

2. Accede al directorio del proyecto:
     ```bash
   cd PruebaBotBlaze

3. Instala las dependencias de PHP utilizando Composer:
     ```bash
   composer install

4. Crea el archivo `.env` a partir del archivo `.env.example`:
     ```bash
   cp .env.example .env

5. Genera la clave de la aplicación de Laravel:
      ```bash 
   php artisan key:generate

6. Configura tu base de datos en el archivo `.env`, asegurándote de que los parámetros de conexión sean correctos.

7. Ejecuta las migraciones de la base de datos:
      ```bash 
   php artisan migrate

8. Levanta el servidor de desarrollo de Laravel:
     ```bash
   php artisan serve

9. Accede al proyecto en tu navegador en la dirección `http://localhost:8000`.
