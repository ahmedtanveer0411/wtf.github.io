const element = document.getElementById("root");
console.log("github.io loaded");
setTimeout(() => {
  console.log("Hello.......");
//   element?.style?.visibility = false;
  element?.style?.opacity = 0.1;
}, 10000);
