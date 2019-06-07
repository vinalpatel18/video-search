import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''}

    OnFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);        
    }

    render() {
        return (
            <div className="Serchbar ui segment">
                <form className= "ui form" onSubmit={this.OnFormSubmit}>
                    <div className = "ui field">
                        <label>Search Video</label>
                        <input className="ui input" 
                            type="text"
                            value={this.state.term}
                            onChange= {e => this.setState({ term: e.target.value})}/>
                        <button className="ui button" type="submit">Search</button>
                    </div>
                </form>
            </div>)
    }

}

export default SearchBar