"use client";

import { useEffect } from "react";

const WHATSAPP_NUMBER = "5545999656388";

export default function ClientEffects() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    const toggle = document.querySelector(".menu-toggle");
    const mobile = document.getElementById("mobile-nav");
    const year = document.getElementById("current-year");
    const form = document.getElementById("whatsapp-form");
    const error = document.getElementById("form-error");
    const floating = document.querySelector(".floating-whatsapp");
    const cleanups = [];
    let previousFocus = null;

    if (year) year.textContent = String(new Date().getFullYear());

    const syncHeader = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", syncHeader));

    const setMenu = (isOpen, restoreFocus = true) => {
      if (!toggle || !mobile) return;

      if (isOpen) previousFocus = document.activeElement;
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      mobile.classList.toggle("is-open", isOpen);
      mobile.setAttribute("aria-hidden", String(!isOpen));
      mobile.inert = !isOpen;
      document.body.classList.toggle("menu-is-open", isOpen);

      if (isOpen) {
        mobile.querySelector("a")?.focus({ preventScroll: true });
      } else if (restoreFocus && previousFocus instanceof HTMLElement) {
        previousFocus.focus({ preventScroll: true });
        previousFocus = null;
      }
    };

    if (toggle && mobile && header) {
      const mobileLinks = [...mobile.querySelectorAll("a")];
      const handleToggle = () => {
        setMenu(toggle.getAttribute("aria-expanded") !== "true");
      };
      const handleLink = () => setMenu(false);
      const handleKeydown = (event) => {
        if (toggle.getAttribute("aria-expanded") !== "true") return;

        if (event.key === "Escape") {
          event.preventDefault();
          setMenu(false);
          return;
        }

        if (event.key === "Tab") {
          const focusable = [toggle, ...mobileLinks];
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      };
      const handlePointerDown = (event) => {
        if (
          toggle.getAttribute("aria-expanded") === "true" &&
          !header.contains(event.target)
        ) {
          setMenu(false);
        }
      };
      const wideScreen = window.matchMedia("(min-width: 981px)");
      const handleWideScreen = (event) => {
        if (event.matches) setMenu(false);
      };

      toggle.addEventListener("click", handleToggle);
      mobileLinks.forEach((link) => link.addEventListener("click", handleLink));
      document.addEventListener("keydown", handleKeydown);
      document.addEventListener("pointerdown", handlePointerDown);
      wideScreen.addEventListener("change", handleWideScreen);

      cleanups.push(() => {
        toggle.removeEventListener("click", handleToggle);
        mobileLinks.forEach((link) => link.removeEventListener("click", handleLink));
        document.removeEventListener("keydown", handleKeydown);
        document.removeEventListener("pointerdown", handlePointerDown);
        wideScreen.removeEventListener("change", handleWideScreen);
        setMenu(false, false);
      });
    }

    if (floating && "IntersectionObserver" in window) {
      const visibleRegions = new Set();
      const floatingObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) visibleRegions.add(entry.target);
            else visibleRegions.delete(entry.target);
          });

          const isSuppressed = visibleRegions.size > 0;
          floating.classList.toggle("is-suppressed", isSuppressed);
          floating.setAttribute("aria-hidden", String(isSuppressed));
          floating.tabIndex = isSuppressed ? -1 : 0;
        },
        { threshold: 0.015 },
      );

      ["#contato", ".footer"].forEach((selector) => {
        const target = document.querySelector(selector);
        if (target) floatingObserver.observe(target);
      });

      cleanups.push(() => floatingObserver.disconnect());
    }

    if (form) {
      const nameInput = form.querySelector("#contact-name");
      const typeInput = form.querySelector("#contact-type");
      const messageInput = form.querySelector("#contact-message");
      const handleInput = () => {
        nameInput?.removeAttribute("aria-invalid");
        if (error) error.hidden = true;
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameInput?.value.trim() || "";

        if (!name) {
          if (error) error.hidden = false;
          nameInput?.setAttribute("aria-invalid", "true");
          nameInput?.focus();
          return;
        }

        if (error) error.hidden = true;
        const project = typeInput?.value || "um projeto de comunicação visual";
        const details = messageInput?.value.trim() || "";
        const message = `Olá, Smart Mídia! Meu nome é ${name} e gostaria de conversar sobre ${project}.${
          details ? `\n\nMinha ideia: ${details}` : ""
        }`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        const opened = window.open(url, "_blank", "noopener,noreferrer");

        if (!opened) window.location.assign(url);
      };

      nameInput?.addEventListener("input", handleInput);
      form.addEventListener("submit", handleSubmit);
      cleanups.push(() => {
        nameInput?.removeEventListener("input", handleInput);
        form.removeEventListener("submit", handleSubmit);
      });
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = [...document.querySelectorAll("[data-reveal]")];
    let revealObserver;

    const disableReveals = () => {
      document.documentElement.classList.remove("motion-ready");
      revealObserver?.disconnect();
    };

    if (!reducedMotion.matches && "IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.095, rootMargin: "0px 0px -28px 0px" },
      );

      document.documentElement.classList.add("motion-ready");
      revealItems.forEach((element, index) => {
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index % 3, 2) * 70}ms`,
        );
        revealObserver.observe(element);
      });
    }

    const handleMotionPreference = (event) => {
      if (event.matches) disableReveals();
    };
    reducedMotion.addEventListener("change", handleMotionPreference);
    cleanups.push(() => {
      reducedMotion.removeEventListener("change", handleMotionPreference);
      disableReveals();
      revealItems.forEach((element) => {
        element.classList.remove("is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    });

    return () => {
      cleanups.reverse().forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
