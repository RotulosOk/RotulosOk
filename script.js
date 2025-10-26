document.addEventListener('DOMContentLoaded', () => {
  // --- Menú hamburguesa ---
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('activo'));
  }

  // --- Botón de compra (WhatsApp) ---
  function comprar(producto) {
    const telefono = "34652018096";
    const mensaje = `Hola! Estoy interesado en ${producto}. ¿Podrías darme más información?`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }

  // --- Lightbox ---
  const imgs = Array.from(document.querySelectorAll('.galeria img'));
  const lb = document.getElementById('lightbox');
  const closeBtn = document.querySelector('.lb-close');
  const prevBtn = document.querySelector('.lb-prev');
  const nextBtn = document.querySelector('.lb-next');
  let idx = 0;

  function showLight(index) {
    if (!lb) return; // Evita error si no hay lightbox en esta página
    idx = index;
    lb.querySelector('img').src = imgs[idx].src;
    lb.classList.add('mostrar');
    lb.setAttribute('aria-hidden', 'false');
  }

  imgs.forEach((el, i) => el.addEventListener('click', () => showLight(i)));

  if (closeBtn) closeBtn.addEventListener('click', () => lb.classList.remove('mostrar'));
  if (lb) lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('mostrar'); });
  if (prevBtn) prevBtn.addEventListener('click', () => {
    idx = (idx - 1 + imgs.length) % imgs.length;
    lb.querySelector('img').src = imgs[idx].src;
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    idx = (idx + 1) % imgs.length;
    lb.querySelector('img').src = imgs[idx].src;
  });

  // --- Botones de productos ---
  document.querySelectorAll('.producto button').forEach(b => {
    b.addEventListener('click', e => {
      const producto = e.currentTarget.closest('.producto').querySelector('h3').innerText;
      const telefono = '34652018096';
      const msg = `Hola! Estoy interesado en ${producto}. ¿Me podéis dar más info?`;
      window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  });
});
