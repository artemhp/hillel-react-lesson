import './App.css';
import getListWithFetch from './getData';
import setColor from './setColor';
import { useState, useEffect } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getListWithFetch('http://localhost:80', 'list', 'GET').then((data) => {
      setQuestions(data);
    });
  }, []);

  const changeStatus = (id, status) => () => {
    getListWithFetch('http://localhost:80', 'status', 'PATCH', {
      status: status,
      identificator: id,
    }).then((data) => {
      getListWithFetch('http://localhost:80', 'list', 'GET').then((data) => {
        setQuestions(data);
      });
    });
  };

  return (
    <main>
      <h1>Interview Questions</h1>
      <ul>
        {questions.map((el) => (
          <li style={{ color: setColor(el.status) }}>
            {el.question}
            <button onClick={changeStatus(el._id, 'Разобрался')}>
              Разобрался
            </button>
            <button onClick={changeStatus(el._id, 'Не очень')}>Не очень</button>
            <button onClick={changeStatus(el._id, 'Вопрос открыт')}>
              Вопрос открыт
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
