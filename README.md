# Módulo 03: Taller 02
## Taller: Integración de Funcionalidades Básicas de JavaScript en el Sitio Web del Hospital

### Descripción del Proyecto
*En este taller, los estudiantes deben continuar incorporando funcionalidades de JavaScript básico en el proyecto del hospital. Además de manipular el DOM, validar datos, y manejar errores, se pedirá la entrada de información del usuario a través de un prompt, mostrando los resultados por consola o como alertas en el navegador*

---

### Cómo visualizar el proyecto en un navegador
*Clona o descarga este repositorio en tu máquina local.
Navega hasta el directorio del proyecto.
Abre el archivo index.html directamente en un navegador web. Puedes hacerlo de las siguientes maneras:
Haciendo doble clic sobre el archivo index.html.
Arrastrando y soltando el archivo en una ventana de tu navegador.
Abriendo el archivo desde la opción "Abrir archivo" en el menú de tu navegador.
El sitio web se renderizará en el navegador, donde podrás navegar por las diferentes vistas (Home, Equipo Médico, Contacto).*

---

### Estructura de Carpetas y Archivos
```bash

/Estructura
│
├── /assets/
├── ├── /js/
│   │   └── script.js
│   │   └── navbar.js
│   │   └── prompt.js
│
│   └── /images/ 
│   ├── /scss/
│       └── /abstracts/  
│       └── /components/  
│       └── /core/
│       └── /layout/
│       └── /pages/
│       └── /themes/
│       └── /vendors/    
│       └── main.scss 
│       └── main.css.map
│       └── main.css
│ 
*
├── index.html              # Página principal (Home)
├── equipo.html             # Página del equipo médico
└── contacto.html           # Página de contacto

```

---

### Explicación 

Este proyecto implementa un sistema de validación interactiva para recolectar datos del usuario a través de ventanas emergentes (prompts). Los datos recopilados incluyen el **nombre**, el **correo electrónico** y el **número de teléfono**, que son validados mediante funciones específicas antes de procesarlos.

## 📋 Características principales
1. **Validación de los datos.**
2. **Recolección y validación dinámica.**
3. **Uso de un botón para iniciar el flujo.**
4. **Herramientas de depuración y manejo de errores.**

---

## 1. Validación de los datos

### Función `validarNombre(nombre)`
- **Propósito:** Verifica que el nombre ingresado sea válido.
- **Criterios:**
  - Solo permite letras (mayúsculas, minúsculas), tildes, la letra "ñ" y espacios.
  - No puede estar vacío (`nombre.trim() !== ""`).
  - Utiliza una expresión regular (regex) para validar el formato.

### Función `validarCorreo(correo)`
- **Propósito:** Valida que el correo contenga el carácter `@`.
- **Nota:** Es una validación básica que puede ser mejorada si es necesario.

### Función `validarTelefono(telefono)`
- **Propósito:** Asegura que el número de teléfono tenga el formato adecuado.
- **Criterios:**
  - Contiene solo dígitos (`\d`).
  - Tiene entre **7** y **15 caracteres**.

---

## 2. Recolección y validación con `pedirDato`

### Función `pedirDato(mensaje, funcionValidar)`
- **Descripción:** Solicita datos al usuario mediante un `prompt`, validando la entrada con una función específica.
- **Detalles:**
  - Usa una función de validación pasada como argumento (ejemplo: `validarNombre`).
  - Si el usuario presiona "Cancelar", la función devuelve `null` y se interrumpe el proceso.
  - Si el dato no es válido:
    - Se muestra un mensaje de error con `alert`.
    - Solicita nuevamente el dato hasta que sea correcto.

---

## 3. Uso del botón para iniciar el flujo

1. El botón con el ID `reserva` es seleccionado usando `document.getElementById`.
2. **Al hacer clic:**
   - Se solicita al usuario que ingrese su **nombre**, **correo**, y **teléfono**, en ese orden.
   - Si el usuario cancela en cualquier paso, el proceso se detiene.
   - Si todos los datos son válidos:
     - Se imprimen en la consola (`console.log`).
     - Se muestra un resumen en una ventana emergente (`alert`).

---

## 4. Herramientas y características importantes

### `debugger`
- Pausa la ejecución del código en navegadores con herramientas de desarrollo abiertas.
- Permite inspeccionar variables y el estado del programa.

### `try-catch`
- Captura y maneja errores inesperados durante la ejecución.
- Es útil para evitar fallos en el manejo del DOM o las funciones de validación.

### Mensajes dinámicos
- La función `pedirDato` reutiliza tanto el mensaje como la validación pasada como argumentos.
- **Ventaja:** Es flexible para diferentes tipos de datos.
