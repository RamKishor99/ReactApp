import * as React from 'react';
import './style.css';
import Header from './components/Header';
import { AddTodos } from './components/AddTodos';
import Footer from './components/Footer';
import Todo from './components/Todo';

export default function App() {
  let sample = 454;
  const [todos, setTodos] = React.useState([
    {
      sno: 1,
      title: 'Go to The Market',
      desc: 'You are done',
    },
    {
      sno: 2,
      title: 'Go to The Market',
      desc: 'You are done',
    },
    {
      sno: 3,
      title: 'Go to The Market',
      desc: 'You are done',
    },
    {
      sno: 4,
      title: 'Go to The Market',
      desc: 'You are done',
    },
  ]);

  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno: any;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo, '===', todos);
  };

  const onDelete = (res) => {
    console.log('on deleted', res);
    if (res) {
      setTodos(
        todos.filter((e) => {
          return e.sno !== res;
        })
      );
    }
    console.log('after deleted', todos);
  };

  return (
    <div>
      <Header title="My Title" searchBar={false} />
      <AddTodos addTodo={addTodo} />
      <Todo props={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}
