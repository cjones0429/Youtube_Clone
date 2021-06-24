import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchQuery: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchForVideo(this.state.searchQuery)
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={() => this.handleSubmit()}>
                    <label>Search for Videos:</label>
                    <input type="text" name="name" value={this.searchQuery} onChange={() => this.handleChange()} />
                </form>
            </div>
        );
    }
}
 
export default SearchBar;