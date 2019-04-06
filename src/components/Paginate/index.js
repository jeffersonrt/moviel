import React, { Component } from 'react';
import Pagination from 'react-paginating';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { colors } from '../../styles';

import {
  ButtonPagination,
  ButtonsContainer,
  PaginationContainer
} from './styles';

class Paginate extends Component {

  
  handlePageChange = (page, e) => {

    // this.props.store.moviesearchstore.changePage(page)
  };

  render() {

    const { total, limit, pageCount, currentPage } = this.props;

    return (
      <PaginationContainer>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
              <ButtonsContainer>
                {
                  total > 0 && (
                    <ButtonPagination
                      {...getPageItemProps({
                        pageValue: 1,
                        onPageChange: this.handlePageChange
                      })}
                    >
                      First
                    </ButtonPagination>
                  )
                }

                {hasPreviousPage && (
                  <ButtonPagination
                    {...getPageItemProps({
                      pageValue: previousPage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    <FaChevronLeft />
                  </ButtonPagination>
                )}

                {pages.map(page => {
                  let activePage = null;
                  if (currentPage === page) {
                    activePage = {
                      fontWeight: 'bold',
                      color: colors.dark,
                      borderRadius: 30,
                      backgroundColor: colors.primary,
                    };
                  }
                  return (
                    <ButtonPagination
                      {...getPageItemProps({
                        pageValue: page,
                        key: page,
                        style: activePage,
                        onPageChange: this.handlePageChange
                      })}
                    >
                      {page}
                    </ButtonPagination>
                  );
                })}

                {hasNextPage && (
                  <ButtonPagination
                    {...getPageItemProps({
                      pageValue: nextPage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    <FaChevronRight />
                  </ButtonPagination>
                )}
                {total > 0 && (
                  <ButtonPagination
                    {...getPageItemProps({
                      pageValue: totalPages,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    Last
                  </ButtonPagination>
                )}
              </ButtonsContainer>
            )}
        </Pagination>
      </PaginationContainer>
    );
  }

};


// export default Paginate;
export default Paginate;
