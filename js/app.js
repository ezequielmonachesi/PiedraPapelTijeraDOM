let formulario = document.querySelector('form');
let valorIngresado = document.querySelector('input');
let mensaje = document.getElementById('mensaje')

formulario.addEventListener('submit', jugar);

function jugar(e){
    e.preventDefault();
    switch(valorIngresado.value){
        case '1':
        case 'piedra':
        case 'Piedra':
        case 'PIEDRA': piedra(1);
        break;
        case '2':
        case 'papel':
        case 'Papel':
        case 'PAPEL': papel(2);
        break;
        case '3':
        case 'tijera':
        case 'Tijera':
        case 'TIJERA': tijera(3);
        break;
        default: alert('Ingrese un valor valido para poder jugar');
    }
}

function piedra(valor) {
    let tijera = 2;
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === valor) {
        mensaje.removeChild(mensaje.children[0]);
        let parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu elegiste Piedra y yo elegí Piedra ||| Empatamos! <i class="bi bi-emoji-smile-upside-down fs-5"></i>`
        mensaje.appendChild(parrafo);
    } else if (random === tijera) {
        mensaje.removeChild(mensaje.children[0]);
        let parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu elegiste Piedra y yo elegí Tijera ||| Me Ganaste! <i class="bi bi-emoji-smile fs-5 text-success"></i>`
        mensaje.appendChild(parrafo);
    } else {
        mensaje.removeChild(mensaje.children[0]);
        let parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu elegiste Piedra y yo elegí Papel ||| Te Gané! <i class="bi bi-emoji-laughing fs-5 text-danger"></i>`
        mensaje.appendChild(parrafo);
    }
  }
  function papel(valor) {
    let tijera = 1;
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === valor) {
        mensaje.removeChild(mensaje.children[0]);
        let parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu elegiste Papel y yo elegí Papel ||| Empatamos! <i class="bi bi-emoji-smile-upside-down fs-5"></i>`
        mensaje.appendChild(parrafo);
    } else if (random === tijera) {
        mensaje.removeChild(mensaje.children[0]);
        let parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu elegiste Papel y yo elegí Tijera ||| Te Gané! <i class="bi bi-emoji-laughing fs-5 text-danger"></i>`
        mensaje.appendChild(parrafo);
    } else {
        mensaje.removeChild(mensaje.children[0]);
        let parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu elegiste Papel y yo elegí Piedra ||| Me Ganaste! <i class="bi bi-emoji-smile fs-5 text-success"></i>`
        mensaje.appendChild(parrafo);
    }
  }

  function tijera(valor) {
    let papel = 2;
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === valor) {
        mensaje.removeChild(mensaje.children[0]);
        let parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu elegiste Tijera y yo elegí Tijera ||| Empatamos! <i class="bi bi-emoji-smile-upside-down fs-5"></i>`
        mensaje.appendChild(parrafo);
    } else if (random === papel) {
        mensaje.removeChild(mensaje.children[0]);
        let parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu elegiste Tijera y yo elegí Papel ||| Me Ganaste! <i class="bi bi-emoji-smile fs-5 text-success"></i>`
        mensaje.appendChild(parrafo);
    } else {
        mensaje.removeChild(mensaje.children[0]);
        let parrafo = document.createElement('p');
        parrafo.innerHTML = `Tu elegiste Tijera y yo elegí Piedra ||| Te Gané! <i class="bi bi-emoji-laughing fs-5 text-danger"></i>`
        mensaje.appendChild(parrafo);
    }
  }