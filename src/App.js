import './App.css';

function ToDoItem(props) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={props.item.done} />
        {props.item.name}
      </label>
    </li>
  )
}

function TodoList(props) {
  return (
    <ul className='todo-list'>
      {props.items.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

function App(props) {
  const items = [
    {id:1, name: "リングフィットアドベンチャー", done: false},
    {id:2, name: "散歩", done: true},
    {id:3, name: "サイクリング", done: false},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todoモック</h1>
        <TodoList items={items} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
