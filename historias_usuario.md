# Historias de Usuario – Proyecto: Control de Gastos Personales

A continuación, se presentan las historias de usuario definidas para el proyecto “Control de Gastos Personales”, que permite gestionar un presupuesto, registrar gastos y visualizar el dinero disponible de manera dinámica y persistente.

---

## HU01 – Registrar presupuesto inicial
**Como** usuario,  
**quiero** ingresar el dinero total con el que cuento,  
**para** poder organizar mis gastos a partir de un presupuesto claro.

**Criterios de aceptación:**
- Debe permitir valores numéricos con puntos: 140.000, 1.200.000, etc.
- Si el valor es inválido, debe mostrar un mensaje de error.
- El presupuesto debe guardarse en el almacenamiento local (localStorage).
- Debe mostrarse formateado en pesos colombianos (COP).

---

## HU02 – Registrar un gasto
**Como** usuario,  
**quiero** ingresar una descripción y un monto,  
**para** llevar el control de cada gasto realizado.

**Criterios de aceptación:**
- El sistema debe validar que los campos no estén vacíos.
- Debe permitir montos con separadores de miles (85.500, 12000, etc.).
- El gasto debe agregarse correctamente a la lista.
- Debe guardarse en localStorage.
- Debe actualizar el total gastado al instante.

---

## HU03 – Visualizar listado de gastos
**Como** usuario,  
**quiero** ver todos mis gastos registrados,  
**para** analizar en qué estoy gastando mi dinero.

**Criterios de aceptación:**
- Debe mostrar descripción y monto formateado en COP.
- La lista debe actualizarse cuando se agregan o eliminan gastos.
- La información debe mantenerse tras recargar la página (uso de localStorage).

---

## HU04 – Mostrar el total gastado
**Como** usuario,  
**quiero** ver el total acumulado de mis gastos,  
**para** tener claridad del consumo total realizado.

**Criterios de aceptación:**
- El total debe sumarse automáticamente con cada gasto.
- Debe mostrarse en formato monetario COP.
- Debe recalcularse al eliminar un gasto.

---

## HU05 – Ver el dinero disponible
**Como** usuario,  
**quiero** ver cuánto dinero me queda del presupuesto inicial,  
**para** evitar sobrepasar mi límite de gastos.

**Criterios de aceptación:**
- El sistema debe calcular:  
  **dinero disponible = presupuesto – total gastado**
- El saldo debe actualizarse automáticamente.
- Debe mostrarse en pesos colombianos (COP).

---

## HU06 – Eliminar un gasto
**Como** usuario,  
**quiero** eliminar un gasto específico,  
**para** corregir errores o actualizar mis registros.

**Criterios de aceptación:**
- Cada gasto debe incluir un botón para eliminarlo.
- Al eliminarlo, debe recalcularse el total gastado.
- Debe recalcularse el dinero disponible.
- La información debe actualizarse en localStorage.

---

# ✔ Estas historias representan todas las funcionalidades principales del sistema y sirven para estructurar el desarrollo, las ramas de Git y el seguimiento del proyecto.
