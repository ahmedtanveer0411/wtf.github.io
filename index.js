console.log("github.io loaded");
setTimeout(() => {
  const element = document.getElementById("root");
  console.log("Hello.......");
  element?.style?.visibility = false;
  element?.style?.opacity = 0.1;
}, 10000);
