(() => {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -6% 0px"
    }
  );

  items.forEach((item, index) => {
    const delay = Math.min(index % 6, 5) * 70;
    item.style.setProperty("--reveal-delay", `${delay}ms`);
    observer.observe(item);
  });
})();
