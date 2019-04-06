import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMovies } from '../../stores/actions';

import { FaSearch } from 'react-icons/fa';
import { Layout, Button, Icon } from '../../elements';
import { FormContainer } from './styles';



class SearchBar extends Component {

  state = {
    inputSearchText: ''
  }

  componentDidMount(){
    searchMovies('batman');
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { searchMovies } = this.props;

    if (!this.state.inputSearchText) {
      // this.props.store.moviesearchstore.clearSearch();
    }

    searchMovies(this.state.inputSearchText);
    // this.props.store.moviesearchstore.getMovies(this.state.inputSearchText);
  }

  render() {
    return (
      <Layout>
        <FormContainer>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.inputSearchText} onChange={(e) => this.setState({ inputSearchText: e.target.value })} placeholder="Find a movie" />
            <Button type="submit"><Icon><FaSearch /></Icon></Button>
          </form>
        </FormContainer>
      </Layout>

    );
  }
}

export default connect(null, { searchMovies })(SearchBar);
