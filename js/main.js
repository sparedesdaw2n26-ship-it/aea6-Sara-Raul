/**
 * Comprova si un camp de text no està buit.
 * @param {string} valor - El text a comprovar.
 * @returns {boolean} true si té contingut, false si està buit.
 */
function campOmplert(valor) {
  return valor.trim().length > 0;
}

/**
 * Mostra un missatge diferent segons si un text té contingut o no.
 * @param {string} valor - El text a comprovar.
 */
function mostrarMissatge(valor) {
  alert(campOmplert(valor) ? "Gràcies!" : "Cal omplir el camp.");
}

// Revisat pel Col·laborador