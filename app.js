let gastos = JSON.parse(localStorage.getItem("gastos")) || [];
let presupuesto = Number(localStorage.getItem("presupuesto")) || 0;

// Función para formatear en pesos colombianos
function formatearCOP(valor) {
    return valor.toLocaleString("es-CO");
}

function guardarPresupuesto() {
    let inputPresupuesto = document.getElementById("presupuesto").value;

    // Eliminar los puntos de miles antes de convertir
    inputPresupuesto = inputPresupuesto.replace(/\./g, "");

    const valor = Number(inputPresupuesto);

    if (valor <= 0) {
        alert("Debes ingresar un presupuesto válido.");
        return;
    }

    presupuesto = valor;
    localStorage.setItem("presupuesto", presupuesto);
    mostrarDatos();
}

function mostrarDatos() {
    document.getElementById("presupuestoTotal").innerText = formatearCOP(presupuesto);

    const lista = document.getElementById("listaGastos");
    lista.innerHTML = "";

    let total = 0;

    gastos.forEach((gasto, index) => {
        total += gasto.monto;

        const li = document.createElement("li");
        li.innerHTML = `
            ${gasto.descripcion} - $${formatearCOP(gasto.monto)}
            <button onclick="eliminarGasto(${index})">X</button>
        `;
        lista.appendChild(li);
    });

    document.getElementById("total").innerText = formatearCOP(total);
    document.getElementById("disponible").innerText = formatearCOP(presupuesto - total);
}

function agregarGasto() {
    let descripcion = document.getElementById("descripcion").value;
    let montoInput = document.getElementById("monto").value;

    // Eliminar puntos
    montoInput = montoInput.replace(/\./g, "");
    const monto = Number(montoInput);

    if (descripcion === "" || monto <= 0) {
        alert("Debes ingresar una descripción y un monto válido.");
        return;
    }

    gastos.push({ descripcion, monto });
    localStorage.setItem("gastos", JSON.stringify(gastos));

    mostrarDatos();

    document.getElementById("descripcion").value = "";
    document.getElementById("monto").value = "";
}

function eliminarGasto(index) {
    // HU06 – Eliminar un gasto según su posición en la lista y actualizar los totales

    gastos.splice(index, 1);
    localStorage.setItem("gastos", JSON.stringify(gastos));
    mostrarDatos();
}

mostrarDatos();
