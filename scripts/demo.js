// reusable fucntion

fuonction calulateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}

// reusable fucntion input
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value ;
    const value = parseFloat(inputValueText);
    return value;

}

// reusable set span

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText =  area;
}






function calulateRectangleArea() {
    const widthField = document.getElementById("rectangle-width");
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
  
    const lengthField = document.getElementById("rectangle-length");
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
  
    const area = width * length;
    const rectangleAreaSpan = document.getElementById("rectangle-area");
    rectangleAreaSpan.innerText = area;
  }

  



  console.log("clicked");
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  const area = 0.5 * base * height;

  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;