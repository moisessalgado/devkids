var panel = document.getElementById("panel");

document.addEventListener("click", getClickElement, false);

function enterValueOnDisplay(value) {
  panel.value = panel.value + value;
}

function getClickElement(event) {
  var target = event.target;
  if (target.type == "submit") {
    if (target.value == "clear") {
      panel.value = "";
      return;
    }
    if (target.value != "=") {
      enterValueOnDisplay(target.value);
    } else {
      try {
        panel.value = eval(panel.value);
      } catch {
        window.alert("Erro no cálculo");
      }
    }
  }
}
