"use strict";

const modals = () => {
  /* MODAL popup */

  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      scroll = calcScroll();

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        windows.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";

        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });

      modal.style.display = "none";
      document.body.style.overflow = "";

      document.body.style.marginRight = `0px`;
    });

    // close => click for empty place

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";

        document.body.style.marginRight = `0px`;
      }
    });
    // --> close
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "flex";
      document.body.style.overflow = "";
    }, time);
  }

  /* fix bug for jump window when open modal */
  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflow = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );

  bindModal(".phone_link", ".popup", ".popup_content .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );

  //showModalByTime(".popup", 60000);
};

export default modals;
