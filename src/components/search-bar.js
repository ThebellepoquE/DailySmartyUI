import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log('[SearchBar] handleFormSubmit called with:', query);
        if (this.props.onSubmit) {
            this.props.onSubmit(query);
        } else {
            console.warn('[SearchBar] onSubmit prop is missing!');
        }
    }

    renderInput = (field) => {
        return <input type="text" placeholder="Search DailySmarty" {...field.input} />
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput}/>
            </form>
        )
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;
