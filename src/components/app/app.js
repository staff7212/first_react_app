
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Mark W.', salary: 800, id: 1,},
        {name: 'John B.', salary: 2000, id: 2,},
        {name: 'Patrick S.', salary: 1400, id: 3,},
      ]
    }
    this.maxId = 3;
  }

  // удаление элемента
  onDelete = (id) => {
    this.maxId--
    this.setState(({data}) => {
      
      // вариант 1
      // const index = data.findIndex(elem => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newData = [...before, ...after]
      
      // вариант 2
      // const index = data.findIndex(elem => elem.id === id);
      // const newData = data.slice();
      // newData.splice(index, 1)

      // вариант 3 можно сразу возращать, 
      // т.к filter возвращает новый объект
      const newData = data.filter(elem => elem.id !== id)
      return {
        data: newData
      };
    })
  }

  onAdd = (name, salary) => {
    if (!name || !salary) return
    this.maxId++
    this.setState(({data}) => {
      const newObj = {name, salary, id: this.maxId}

      // const newData = data.slice();
      // newData.push(newObj)

      const newData = [...data, newObj]
      return {
        data: newData
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo/>
        
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList 
          data={this.state.data}
          onDelete={this.onDelete}/>

        <EmployeesAddForm onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;