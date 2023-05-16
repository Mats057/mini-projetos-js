const segundos = document.querySelector("#segundos");
const minutos = document.querySelector("#minutos");
const horas = document.querySelector("#horas");
const dias = document.querySelector("#dias");

const contar = (tempo) => {
  let i = tempo;
  const intervalo = setInterval(() => {
    atualizarTempo(i);
    i--;
    if (i < 0) {
      clearInterval(intervalo);
    }
  }, 1000);
};

const formatDigito = (digito) => {
  return digito < 10 ? "0" + digito : digito;
};

const atualizarTempo = (tempo) => {

        const dia = Math.floor(tempo / 86400);
        const hora = Math.floor((tempo % 86400) / 3600);
        const min = Math.floor((tempo % 3600) / 60);
        const seg = tempo % 60;
        dias.innerHTML = formatDigito(dia);
        horas.innerHTML = formatDigito(hora);
        minutos.innerHTML = formatDigito(min);
        segundos.innerHTML = formatDigito(seg);

};
contar(6564562);
