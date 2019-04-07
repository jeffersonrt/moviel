import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchRequest, searchClear } from '../../stores/actions';

import { FaSearch } from 'react-icons/fa';
import { Wrapper, Button, Icon } from '../../elements';
import { FormContainer, SearchContainer } from './styles';



class SearchBar extends Component {

  static propTypes = {
    searchRequest: PropTypes.func.isRequired,
    searchClear: PropTypes.func.isRequired,
  }

  state = {
    inputSearchText: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { searchRequest, searchClear } = this.props;
    if (!this.state.inputSearchText) { 
      return searchClear(); 
    }
    searchRequest(this.state.inputSearchText);
  }

  render() {
    return (
      <SearchContainer>
        <Wrapper>
          <FormContainer>
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.inputSearchText} onChange={(e) => this.setState({ inputSearchText: e.target.value })} placeholder="Find a movie" />
              <Button type="submit"><Icon><FaSearch /></Icon></Button>
            </form>
          </FormContainer>
        </Wrapper>
      </SearchContainer>

    );
  }
}

export default connect(null, { searchRequest, searchClear })(SearchBar);
