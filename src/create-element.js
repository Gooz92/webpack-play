const createElement = (tagName, text) => {
  const element = document.createElement(tagName);
  element.innerText = text;
  return element;
};

export default createElement;
