console.log(
  "Parece que el codigo descuento20% hace lo que su nombre indica..."
);

const btnCalculator = document.querySelector(".btn");
const factura = document.getElementById("factura");
const propina = document.getElementById("propina");
const resultados = document.getElementById("resultados");
const gracias = document.getElementById("footer");
const discount = document.getElementById("discount");
let precioPropina = 0;
let precioFinal = 0;
let descuento = 0;

btnCalculator.addEventListener("click", () => {
  if (propina.value < 5) {
    window.alert("La propina mínima es del 5%");
  } else {
    precioPropina = (factura.value * propina.value) / 100;

    if (discount.value === "descuento20%") {
      descuento = (factura.value * 20) / 100;
      precioFinal =
        Number(factura.value) + Number(precioPropina) - Number(descuento);
    } else {
      precioFinal = Number(factura.value) + Number(precioPropina);
    }

    resultados.innerHTML = `<div class="p-3 m-3 btn btn-secondary text-center">
                        <h5>TICKET:</h5>
                        <div>
                            <p>Factura: ${factura.value}€</p>
                            <p>Propina: (${
                              propina.value
                            }%): ${precioPropina.toFixed(2)}€</p>
                            <p>Descuento: ${descuento.toFixed(2)}€</p>
                            <h3 class="fw-bold text-uppercase"><u>total: ${precioFinal.toFixed(
                              2
                            )}€</u></h3>
                        </div>
                    </div>`;

    gracias.innerHTML = `<p>Gracias por usar la calculadora!</p>`;
    window.alert(`Siendo tu factura de ${factura.value}€ y tu propina del ${
      propina.value
    }%, el precio total a pagar es de:

         ${precioFinal.toFixed(2)}€
    
    ¡Haz click en "Aceptar" para ver tu ticket!`);
  }
});
