import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { FaSearch } from 'react-icons/fa';
import { Layout, Button, Icon } from '../../elements';
import { FormContainer } from './styles';



class SearchBar extends Component {

  state = {
    searchInput: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.searchInput) {
      this.props.store.moviesearchstore.clearSearch();
    }
    this.props.store.moviesearchstore.getMovies(this.state.searchInput);
  }

  render() {
    return (
      <Layout>
        <FormContainer>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.searchInput} onChange={(e) => this.setState({ searchInput: e.target.value })} placeholder="Find a movie" />
            <Button type="submit"><Icon><FaSearch /></Icon></Button>
          </form>
        </FormContainer>
      </Layout>

    );
  }

}
export default inject('store')(observer(SearchBar));
