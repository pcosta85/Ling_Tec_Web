// Menu móvel sem dependências externas (jQuery/ScrollReveal).
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('mobile_btn');
  const menu = document.getElementById('mobile_menu');
  if (!botao || !menu) return;
  botao.addEventListener('click', () => {
    const aberto = menu.classList.toggle('active');
    botao.setAttribute('aria-expanded', String(aberto));
    botao.textContent = aberto ? '✕' : '☰';
  });
  document.querySelectorAll('#mobile_nav_list a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      botao.setAttribute('aria-expanded', 'false');
      botao.textContent = '☰';
    });
  });
});
