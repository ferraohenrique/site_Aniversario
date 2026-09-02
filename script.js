// Registra o plugin de scroll do GSAP
gsap.registerPlugin(ScrollTrigger);

// ===================== ANIMAÇÃO DE ENTRADA (o "momento de assinatura") =====================
// O nome dela aparece com um fade + leve subida, uma única vez, ao carregar a página.
gsap.to("#nome1", {
  opacity: 1,
  y: -10,
  duration: 1.4,
  ease: "power2.out",
  delay: 0.3
});

// ===================== ANIMAÇÕES DAS FOTOS AO ROLAR =====================
// Cada foto aparece (fade + leve zoom) quando entra na tela ao descer,
// e desaparece de novo quando você sobe e ela sai da tela — isso é o que
// "toggleActions: play reverse play reverse" faz: toca a animação nos dois sentidos.
document.querySelectorAll(".photo-scene").forEach((scene) => {
  const foto = scene.querySelector(".photo-placeholder, img");

  gsap.to(foto, {
    scrollTrigger: {
      trigger: scene,
      start: "top 75%",   // começa a aparecer quando o topo da cena chega a 75% da tela
      end: "bottom 25%",  // começa a desaparecer quando a base da cena passa de 25% da tela
      toggleActions: "play reverse play reverse"
    },
    opacity: 1,
    scale: 1,
    duration: 0.9,
    ease: "power2.out"
  });
});

// ===================== BOTÃO DE MÚSICA =====================
// Navegadores bloqueiam áudio com som automático, por isso precisamos de um clique.
const musica = document.getElementById("musica");
const botaoMusica = document.getElementById("botao-musica");

botaoMusica.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    botaoMusica.textContent = "⏸";
    botaoMusica.classList.add("tocando");
  } else {
    musica.pause();
    botaoMusica.textContent = "♪";
    botaoMusica.classList.remove("tocando");
  }
});