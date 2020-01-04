import React, { Component } from 'react';
import { findPlaceWithObject } from '../../utils/house-server';
import SearchResults from './search-results';

export default class SearchInput extends Component {  
    constructor(props) {
        super(props);
        this.state = ({ 
          searchTerm: '',
          foundRoom: '',
          foundArea: '',
        });
      }
    
    handleSearchTermSubmit = () => {
        const { searchTerm } = this.state;
        const { suggestionList: items } = this.props;
        console.log('items', items, searchTerm, items[searchTerm])
        
        this.setState({
          foundRoom: items[searchTerm] ? items[searchTerm].room : '',
          foundArea: items[searchTerm] ? items[searchTerm].subArea : '',
        });
    }

    handleSearchTermChange = (event) => {
        const searchTerm = event.target.value;
        this.setState({searchTerm});
      }
    
    render() {
        const { searchTerm } = this.props;
        return (
            <div>
                Enter name: <input type="text" value={searchTerm} onChange={this.handleSearchTermChange} placeholder="Search"/>
                <input type="submit" value="Submit" onClick={this.handleSearchTermSubmit}/>
                {this.state.foundRoom && 
                  <div>
                    <div>
                        {this.state.foundRoom}
                    </div>
                    <br/>
                    <div>
                        {this.state.foundArea}
                    </div>
                  </div>}
            </div>
        );
    }
}