export default function setColor(current) {
  let style;
  switch (current) {
    case 'Вопрос открыт':
      style = 'red';
      break;
    case 'Разобрался':
      style = 'green';
      break;
    case 'Не очень':
      style = 'grey';
      break;
    default:
      style = 'grey';
  }
  return style;
}
