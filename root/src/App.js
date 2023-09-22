import {
  Component
} from "react";

const date1 = new Date(2021, 7, 19, 14, 5);
const date2 = new Date(2021, 7, 19, 15, 23);

const initialData = [{
  title: 'Изучить React',
  desc: 'Да поскорее',
  image: '',
  done: true,
  createAt: date1.toLocaleString(),
  key: date1.getDate()
},
{
  title: 'Написать первое',
  desc: 'Да поскорее',
  image: '',
  done: true,
  createAt: date2.toLocaleString(),
  key: date2.getDate()
}
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.data = initialData;
  }

  render() {
    return (
      <div>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <span className="navbar-item is-uppercase">
              Todos
            </span>
          </div>
        </nav>
        <main className="content px-6 mt-6">
          <h1>Todos</h1>
        </main>
      </div >
    );
  }
}