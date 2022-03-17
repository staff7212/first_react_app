
import { Component } from 'react'

import './employees-list-item.css'

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    }
  }

  // onIncrease = () => {
  //   this.setState(({increase}) => ({
  //     increase: !increase
  //   }));
  // }
  // onLike = () => {
  //   this.setState(({like}) => ({
  //     like: !like
  //   }));
  // }
  // одним методом заменил два 
  onToggle = (param) => {
    this.setState((state) => ({
      [param]: !state[param]
    }));
  }

  render() {
    const {name, salary, onDelete} = this.props;
    const {increase, like} = this.state;
    // несколько вариантов
    // const promotion = like ? ' like' : '';
    // const premium = increase ? ' increase' : '';
    let classNames = "list-group-item d-flex justify-content-between"
    increase && (classNames += ' increase')
    like && (classNames += ' like')

    return (
      // несколько вариантов
     // <li className={"list-group-item d-flex justify-content-between" + premium + promotion}>
      <li className={classNames}>
          <span className="list-group-item-label" onClick={() => this.onToggle('like')}>{name}</span>
          <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
          <div className='d-flex justify-content-center align-items-center'>
              <button type="button"
                  className="btn-cookie btn-sm " 
                  onClick={() => this.onToggle('increase')}>
                  <i className="fas fa-cookie"></i>
              </button>
  
              <button type="button"
                      className="btn-trash btn-sm"
                      onClick={onDelete}>
                  <i className="fas fa-trash"></i>
              </button>
              <i className="fas fa-star"></i>
          </div>
      </li>
    );
  }
}


export default EmployeesListItem;