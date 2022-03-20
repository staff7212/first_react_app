
import './app-filter.css'

const AppFilter = (props) => {

  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'Сотрудники на повышение'},
    {name: 'salary', label: 'З/п больше 1000'},
  ];

  // если не динамически и добавлен дата атрибут
  // const onGetTrigger = (e) => {
  //   const trigger = e.currentTarget.dataset.trigger;
  //   props.onUpdateFilter(trigger)
  // }

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.trigger === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light'
    return (
      <button 
        type="button"
        className={`btn ${clazz}`}
        onClick={() => props.onUpdateFilter(name)}
        key={name}>
          {label}
      </button>
    )
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default AppFilter;