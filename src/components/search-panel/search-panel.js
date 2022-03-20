
import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    }
  }

  valueChange = (e) => {
    const searchString = e.target.value
    this.setState({searchString})
    this.props.onUpdateSearch(searchString)
  }



  render() {
    return (
      <input 
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        onChange={this.valueChange}
        value={this.state.searchString}/>
    );
  }
}

export default SearchPanel;