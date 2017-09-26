import React , { Component } from 'react';

class SearchBar extends Component{

    constructor( props ){
        super( props );

        this.state = {term:""};
    }

    checkEnter(e){
        if (e.keyCode == 13) {
            this.props.onSearchTermChange(e.target.value )
        }
    }

    render(){
        return (
            <div className="search-bar">
                <input type="text" onKeyUp={ this.checkEnter.bind(this) } placeholder="Search" />
            </div>
        )
    }
}

export default SearchBar;