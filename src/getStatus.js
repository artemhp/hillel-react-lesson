export default function getStatus(status) {
  let st;
  if (status === 'Вопрос открыт') {
    st = 'Разобрался';
  } else if (status === 'Разобрался') {
    st = 'Не очень';
  } else {
    st = 'Вопрос открыт';
  }
  return st;
}
