// Datos de las personas para las cards
const personas = [
    {
        nombre: "Dr. Yoda Jedi",
        especialidad: "Otorrinolaringología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--yoda.png",
        experiencia: "3 años de experiencia"
    },
    {
        nombre: "Dr. César Tapia",
        especialidad: "Dermatología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--c3po.png",
        experiencia: "3 años de experiencia"
    },
    {
        nombre: "Dr. Chew Bacca",
        especialidad: "Cardiología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--chewie.png",
        experiencia: "5 años de experiencia"
    },
    {
        nombre: "Dr. Darth Vader",
        especialidad: "Cirujía General",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--vader.png",
        experiencia: "3 años de experiencia"
    }
];

// Filtrar los profesionales según una condición
function filtrarProfesionales(condicion) {
    return personas.filter(profesional => condicion(profesional));
}

// Mostrar profesionales
function mostrarProfesionales(profesionales) {
    const contenedor = document.querySelector(".cards__container--equipo");
    if (!contenedor) {
        console.error("Contenedor de tarjetas no encontrado.");
        return;
    }
    
    // Limpiar el contenedor antes de agregar las nuevas tarjetas
    contenedor.innerHTML = "";

    // Generar y agregar las tarjetas
    profesionales.forEach(profesional => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${profesional.foto}" class="card__img" alt="Foto de ${profesional.nombre}">
            <ul>
                <li class="card__text--nombre">${profesional.nombre}</li>
                <li class="card__text--especialidad">${profesional.especialidad}</li>
                <li class="card__text--resena">${profesional.resena}</li>
            </ul>
        `;

        contenedor.appendChild(card);
    });
}

// Mostrar todos los profesionales al inicio
mostrarProfesionales(personas);

// Asociar eventos a los botones
document.getElementById("btn-cardiologos").addEventListener("click", () => {
    const cardiologos = filtrarProfesionales(profesional => profesional.especialidad === "Cardiología");
    mostrarProfesionales(cardiologos);
});

document.getElementById("btn-dermatologos").addEventListener("click", () => {
    const dermatologos = filtrarProfesionales(profesional => profesional.especialidad === "Dermatología");
    mostrarProfesionales(dermatologos);
});

document.getElementById("btn-todos").addEventListener("click", () => {
    mostrarProfesionales(personas); // Mostrar todos los profesionales
});