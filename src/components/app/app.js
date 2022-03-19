
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
        {name: 'Mark W.', salary: 800, increase: false, rise: false, id: 1,},
        {name: 'John B.', salary: 2000, increase: false, rise: false, id: 2,},
        {name: 'Patrick S.', salary: 1400, increase: false, rise: false, id: 3,},
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
    if (name.length < 3 || !salary) return
    this.maxId++
    this.setState(({data}) => {
      const newObj = {name, salary, increase: false, rise: false, id: this.maxId}

      // const newData = data.slice();
      // newData.push(newObj)

      const newData = [...data, newObj]
      return {
        data: newData
      }
    })
  }

  // смена состояний на других уровнях
  onToggleProps = (id, props) => {
    this.setState(({data}) => ({
      data: data.map(elem => {
        if (elem.id !== id) return elem;
        return {...elem, [props]: !elem[props]}
      })
    }))
  }

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(elem => elem.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList 
          data={this.state.data}
          onDelete={this.onDelete}
          onToggleProps={this.onToggleProps}/>

        <EmployeesAddForm onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;
