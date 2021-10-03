const element = document.getElementById("root");
console.log("github.io loaded");
setTimeout(() => {
  console.log("Hello.......");
  //   element?.style?.visibility = false;
  if (element && element.style) {
    element.style.opacity = 0.2;
  }
}, 10000);
