(function () {
  "use strict";

  function showWelcomeAlert() {
    try {
      window.alert("ようこそ神山まるごと高専のホームページへ！！");
    } catch (error) {
      // alert が抑制される環境でも後続処理は続行する
    }
  }

  function initVisitCounter() {
    var counterElement = document.getElementById("visit-counter");
    if (!counterElement) {
      return;
    }

    var count = 1;

    try {
      var stored = window.localStorage.getItem("kmc_visit_count");
      var parsed = Number.parseInt(stored || "0", 10);
      count = Number.isFinite(parsed) && parsed > 0 ? parsed + 1 : 1;
      window.localStorage.setItem("kmc_visit_count", String(count));
    } catch (error) {
      count = 1;
    }

    counterElement.textContent = String(count).padStart(7, "0");
  }

  function attachSparkleTrail() {
    var lastCreatedAt = 0;

    document.addEventListener("mousemove", function (event) {
      var now = Date.now();
      if (now - lastCreatedAt < 45) {
        return;
      }

      lastCreatedAt = now;

      var sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      sparkle.textContent = "✨";
      sparkle.style.left = String(event.clientX + (Math.random() * 10 - 5)) + "px";
      sparkle.style.top = String(event.clientY + (Math.random() * 10 - 5)) + "px";
      sparkle.style.fontSize = String(12 + Math.random() * 10) + "px";

      document.body.appendChild(sparkle);

      window.requestAnimationFrame(function () {
        sparkle.classList.add("fade");
      });

      window.setTimeout(function () {
        sparkle.remove();
      }, 760);
    });
  }

  function polyfillMarquee() {
    if ("HTMLMarqueeElement" in window) {
      return;
    }

    var marquee = document.getElementById("welcome-marquee");
    if (!marquee) {
      return;
    }

    var fallback = document.createElement("div");
    fallback.className = "marquee-fallback";

    var inner = document.createElement("span");
    inner.textContent = marquee.textContent || "";
    fallback.appendChild(inner);

    marquee.replaceWith(fallback);
  }

  function startTitleBlink() {
    var original = document.title;
    var alternate = "★神山まるごと高専★";
    var isOriginal = true;

    window.setInterval(function () {
      document.title = isOriginal ? alternate : original;
      isOriginal = !isOriginal;
    }, 1000);
  }

  document.addEventListener("DOMContentLoaded", function () {
    showWelcomeAlert();
    initVisitCounter();
    attachSparkleTrail();
    polyfillMarquee();
    startTitleBlink();
  });
})();
