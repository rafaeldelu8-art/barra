/* =====================================================
   CONFIGURACIÓN DE WHATSAPP
===================================================== */

const WHATSAPP_NUMBER = "525655888329";

const whatsappMessage =
  "Hola, me interesaria obtener información sobre los paquetes disponibles. ";

/* =====================================================
   PRECIOS DE BARRA LIBRE
=====================================================

   Aquí puedes colocar el precio POR PERSONA
   dependiendo de las horas contratadas.

   Los precios de 2 horas son los actuales:

   Pitufo     = $139
   Coctelero  = $179
   Premium    = $219

   IMPORTANTE:
   Los demás precios son ejemplos y DEBES sustituirlos
   por los precios que quieras cobrar.
===================================================== */

const preciosBarraLibre = {
  pitufo: {
    2: 139,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  },

  coctelero: {
    2: 179,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  },

  premium: {
    2: 219,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  },
};

/* =====================================================
   ACTUALIZAR PRECIOS SEGÚN LAS HORAS
===================================================== */

function actualizarPreciosBarraLibre() {
  const selectorHoras = document.getElementById("horasBarra");

  if (!selectorHoras) {
    return;
  }

  const horas = selectorHoras.value;

  const precios = document.querySelectorAll(".price-value");

  precios.forEach((elemento) => {
    const paquete = elemento.dataset.package;

    const precio = preciosBarraLibre[paquete][horas];

    if (precio && precio > 0) {
      elemento.textContent = precio;
    } else {
      elemento.textContent = "Consultar";
    }
  });

  /* Actualizar texto de horas */

  const textosHoras = document.querySelectorAll(".hours-text");

  textosHoras.forEach((texto) => {
    texto.textContent = `Precio para ${horas} horas`;
  });
}

/* =====================================================
   CONFIGURAR WHATSAPP
===================================================== */

function configurarWhatsApp() {
  const buttons = document.querySelectorAll(".js-whatsapp");

  const encodedMessage = encodeURIComponent(whatsappMessage);

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  buttons.forEach((button) => {
    button.href = whatsappURL;

    button.target = "_blank";

    button.rel = "noopener noreferrer";
  });
}

/* =====================================================
   INICIALIZACIÓN
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  configurarWhatsApp();

  actualizarPreciosBarraLibre();

  const selectorHoras = document.getElementById("horasBarra");

  if (selectorHoras) {
    selectorHoras.addEventListener("change", actualizarPreciosBarraLibre);
  }
});
