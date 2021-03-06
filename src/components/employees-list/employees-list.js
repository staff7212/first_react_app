
import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProps, changeSalary}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <EmployeesListItem 
        key={id} 
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProps={(e) => onToggleProps(id, e.currentTarget.dataset.toggle)}
        changeSalary={(numSalary) => changeSalary(id, numSalary)}/>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default EmployeesList;