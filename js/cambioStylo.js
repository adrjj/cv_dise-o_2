  function cambiarEstilo() {
     let estilo = document.getElementById("estilo-css");
      if (estilo.href.endsWith("stylo.css")) {
          estilo.href = "./css/stylorecluted.css"; // Cambia a tu segundo archivo CSS
      } else {
           estilo.href = "./css/stylo.css"; // Cambia de regreso a tu primer archivo CSS
      }
 }


document.getElementById('videoPerfilUno').play(); 




