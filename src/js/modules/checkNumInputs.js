const checkNumInputs = (selector) => {
  const numInputs = document.querySelectorAll(selector);

  //check number
  numInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });
};

export default checkNumInputs;
