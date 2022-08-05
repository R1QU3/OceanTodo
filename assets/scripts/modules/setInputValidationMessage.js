export default function setInputValidationMessage(target, CustomMessage) {
  const targetSibling = target.nextElementSibling;
  if(!CustomMessage) {
    target.classList.add('invalid');
    targetSibling.textContent = target.validationMessage;
  } else {
    target.classList.add('invalid');
    targetSibling.textContent = CustomMessage.toString();
  }
}