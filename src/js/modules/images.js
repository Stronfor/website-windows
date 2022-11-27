const images = () => {
  /* create modal */
  const imgPopup = document.createElement("div"),
    workSection = document.querySelector(".works"),
    bigImage = document.createElement("img");

  imgPopup.classList.add("popup");
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = "center";
  imgPopup.style.ilignItems = "center";
  imgPopup.style.bisplay = "none";

  imgPopup.appendChild(bigImage);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      document.body.style.overflow = "hidden";

      const path = target.parentNode.getAttribute("href"); // link big IMG

      bigImage.setAttribute("src", path);
      bigImage.style.margin = "auto";
      bigImage.style.maxHeight = 720 + "px";
    }
    /* click for wrapper = modal close */
    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default images;
