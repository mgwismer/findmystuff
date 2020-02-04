import React, { Component } from 'react';
import { findPlaceWithObject } from '../../utils/house-server';
import SearchResults from './search-results';
import Select from 'react-select';
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 10,
    width: 200,
  }),
  menu: styles => ({
    width: 200,
    backgroundColor: 'ivory',
  }),
  control: styles => ({
    ...styles,
    // none of react-select's styles are passed to <Control />
    backgroundColor: 'ivory',
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}
export default class SearchInput extends Component {  
    constructor(props) {
        super(props);
        this.state = ({ 
          options: [],
          searchTerm: {},
          foundRoom: '',
          foundArea: '',
        });
      }

    handleSearchTermSubmit = (e) => {
        const { suggestionList: items } = this.props;
        const { searchTerm } = this.state;
        console.log('select items', e.key, e.value, searchTerm.value)
        
        this.setState({
          foundRoom: searchTerm.value && items[searchTerm.value] ? items[searchTerm.value].room : '',
          foundArea: searchTerm.value && items[searchTerm.value] ? items[searchTerm.value].subArea : '',
        });
    }

    handleSearchTermChange = (searchTerm) => {
        console.log('on change', searchTerm);
        this.setState({searchTerm});
      }
    
    render() {
        const { suggestionList } = this.props;
        const { searchTerm } = this.state;
        
        const options = Object.keys(suggestionList).map(item => ({ value: item, label: item }));
        return (
          <Select 
            value={searchTerm}
            options={options}
            styles={customStyles}
            onChange={this.handleSearchTermChange}
            onKeyDown={this.handleSearchTermSubmit}
          />
        );
    }
}