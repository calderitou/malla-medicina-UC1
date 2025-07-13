const courses = [
  { id: "MED107A", nombre: "Bases y Fund. Medicina I", creditos: 10, semestre: "I", requisitos: [] },
  { id: "MED108A", nombre: "Bases y Fund. Medicina II", creditos: 10, semestre: "II", requisitos: ["MED107A"] },
  { id: "MED111A", nombre: "Morfología I", creditos: 5, semestre: "II", requisitos: ["MED107A"] },
  { id: "MED110A", nombre: "Razonamiento Clínico", creditos: 5, semestre: "II", requisitos: ["MED103A", "MED107A"] },
  { id: "MED208A", nombre: "Inmunología", creditos: 5, semestre: "III", requisitos: ["BIO238M", "BIO239M"] },
  { id: "MED212A", nombre: "Morfología II", creditos: 15, semestre: "III", requisitos: ["MED111A"] },
  // … aquí irían todos los demás
];

const estadoCursos = {};

function crearCaja(curso) {
  const div = document.createElement("div");
  div.className = `course locked`;
  div.id = curso.id;
  div.innerHTML = `<strong>${curso.nombre}</strong><br>${curso.id}<br>${curso.creditos} créditos`;
  div.onclick = () => marcarCurso(curso);
  return div;
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const porSemestre = {};
  courses.forEach(c => {
    if (!porSemestre[c.semestre]) porSemestre[c.semestre] = [];
    porSemestre[c.semestre].push(c);
    estadoCursos[c.id] = c.requisitos.length === 0 ? "available" : "locked";
  });

  Object.entries(porSemestre).forEach(([sem, lista]) => {
    const titulo = document.createElement("div");
    titulo.className = "semester-title";
    titulo.textContent = `Semestre ${sem}`;
    contenedor.appendChild(titulo);
    lista.forEach(curso => {
      const div = crearCaja(curso);
      div.className = `course ${estadoCursos[curso.id]}`;
      contenedor.appendChild(div);
    });
  });
}

function marcarCurso(curso) {
  if (estadoCursos[curso.id] !== "available") return;
  estadoCursos[curso.id] = "done";
  document.getElementById(curso.id).className = "course done";

  courses.forEach(c => {
    if (estadoCursos[c.id] === "locked") {
      if (c.requisitos.every(r => estadoCursos[r] === "done")) {
        estadoCursos[c.id] = "available";
        const div = document.getElementById(c.id);
        if (div) div.className = "course available";
      }
    }
  });
}

function resetCourses() {
  renderMalla();
}

renderMalla();
