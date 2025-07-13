// script.js completo con todos los ramos de Medicina UC con sus prerequisitos y créditos
const courses = [
  { id: "MED107A", nombre: "Bases y Fund. Medicina I", creditos: 10, semestre: "I", requisitos: [] },
  { id: "MED108A", nombre: "Bases y Fund. Medicina II", creditos: 10, semestre: "II", requisitos: ["MED107A"] },
  { id: "MED111A", nombre: "Morfología I", creditos: 5, semestre: "II", requisitos: ["MED107A"] },
  { id: "MED110A", nombre: "Razonamiento Clínico", creditos: 5, semestre: "II", requisitos: ["MED103A", "MED107A"] },
  { id: "BIO239M", nombre: "Biología Molecular de la Célula", creditos: 15, semestre: "II", requisitos: ["MED104A", "QIM201"] },
  { id: "MAT1033", nombre: "Matemáticas", creditos: 10, semestre: "I", requisitos: [] },
  { id: "MED208A", nombre: "Inmunología", creditos: 5, semestre: "III", requisitos: ["BIO238M", "BIO239M"] },
  { id: "MED212A", nombre: "Morfología II", creditos: 15, semestre: "III", requisitos: ["MED111A"] },
  { id: "MED207A", nombre: "Ética Médica", creditos: 10, semestre: "III", requisitos: ["MED105A", "MED108A", "MED105B"] },
  { id: "MED206A", nombre: "Salud Pública", creditos: 5, semestre: "III", requisitos: ["MED104A", "MED104B"] },
  { id: "MED209A", nombre: "Neurociencias", creditos: 5, semestre: "III", requisitos: ["MED110A"] },
  { id: "MED213A", nombre: "Morfología III", creditos: 15, semestre: "IV", requisitos: ["MED212A"] },
  { id: "MED214A", nombre: "Microbiología", creditos: 30, semestre: "IV", requisitos: ["MED212A", "MED208A", "BIO239M"] },
  { id: "MED210A", nombre: "Farmacología", creditos: 5, semestre: "IV", requisitos: ["MED209A", "MED212A"] },
  { id: "MED308A", nombre: "Clínica I", creditos: 15, semestre: "V", requisitos: ["MED206A", "MED207A", "MED208A", "MED213A", "MED214A"] },
  { id: "MED306B", nombre: "Antropología Médica", creditos: 5, semestre: "V", requisitos: ["BIO238M", "MED208A"] },
  { id: "MED307B", nombre: "Bases de la Práctica Profesional", creditos: 5, semestre: "V", requisitos: ["MED214A"] },
  { id: "MED310B", nombre: "Neuropsiquiatría", creditos: 15, semestre: "V", requisitos: ["MED214A", "MED213A"] },
  { id: "MED311A", nombre: "Clínica II", creditos: 5, semestre: "V", requisitos: ["MED210A", "MED213A"] },
  { id: "MED309A", nombre: "Clínica III", creditos: 40, semestre: "VI", requisitos: ["MED306B", "MED307B", "MED308A", "MED310B"] },
  { id: "MED312A", nombre: "Clínica Integrada", creditos: 5, semestre: "VI", requisitos: ["MED311A", "MED308A"] },
  { id: "MED404A", nombre: "Clínica IV", creditos: 40, semestre: "VII", requisitos: ["MED309A"] },
  { id: "MED405A", nombre: "Clínica V", creditos: 5, semestre: "VII", requisitos: ["MED312A", "MED309A"] },
  { id: "MED407A", nombre: "Clínica VI", creditos: 15, semestre: "VIII", requisitos: ["MED404A"] },
  { id: "MED409A", nombre: "Clínica VII", creditos: 15, semestre: "VIII", requisitos: ["MED404A"] },
  { id: "MED408A", nombre: "Clínica VIII", creditos: 15, semestre: "VIII", requisitos: ["MED404A", "MED109A"] },
  { id: "MED406A", nombre: "Clínica IX", creditos: 5, semestre: "VIII", requisitos: ["MED405A", "MED404A"] },
  { id: "MED504B", nombre: "Internado Medicina Interna", creditos: 15, semestre: "IX", requisitos: ["MED404A", "MED405A"] },
  { id: "MED505B", nombre: "Internado Gineco-Obstetricia", creditos: 15, semestre: "IX", requisitos: ["MED404A", "MED405A"] },
  { id: "MED508A", nombre: "Internado Cirugía", creditos: 10, semestre: "IX", requisitos: ["MED407A", "MED408A", "MED409A"] },
  { id: "MED509A", nombre: "Internado Pediatría", creditos: 5, semestre: "IX", requisitos: ["MED406A"] },
  { id: "MED601B", nombre: "Internado Urgencias", creditos: 25, semestre: "X", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED602B", nombre: "Internado Dermatología", creditos: 25, semestre: "X", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED606A", nombre: "Internado Otorrino", creditos: 15, semestre: "X", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED603B", nombre: "Internado Obstetricia", creditos: 25, semestre: "XI", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED604B", nombre: "Internado Oftalmología", creditos: 25, semestre: "XI", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED611A", nombre: "Internado Profundización", creditos: 5, semestre: "XI", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED607A", nombre: "Internado Otorrino-Laringología", creditos: 5, semestre: "XI", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED605A", nombre: "Internado Neuropsiquiatría", creditos: 20, semestre: "XII", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED608A", nombre: "Internado Dermatología", creditos: 20, semestre: "XII", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED609A", nombre: "Internado Oftalmología", creditos: 5, semestre: "XII", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED612A", nombre: "Internado Profundización II", creditos: 5, semestre: "XII", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] },
  { id: "MED610A", nombre: "Electivo", creditos: 5, semestre: "XII", requisitos: ["MED406A", "MED407A", "MED408A", "MED409A", "MED504B", "MED505B", "MED508A", "MED509A"] }
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
