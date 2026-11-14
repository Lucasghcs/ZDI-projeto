// Em telas de toque, mostra a cor da caixa antes de navegar.
// Em computadores, os links funcionam normalmente com o mouse e o teclado.
const dispositivoToque = window.matchMedia('(hover: none), (pointer: coarse)');
document.querySelectorAll('.box[href]').forEach((caixa) => {
  caixa.addEventListener('click', (evento) => {
    if (!dispositivoToque.matches || evento.defaultPrevented || evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.altKey) return;
    evento.preventDefault();
    caixa.classList.add('ativado');
    const destino = caixa.href;
    window.setTimeout(() => { window.location.href = destino; }, 260);
  });
});
