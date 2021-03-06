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

  render() {

    const {
      total,
      limit = 10,
      pageCount = 3,
      currentPage = 1,
      handlePageChange
    } = this.props;

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
                        onPageChange: handlePageChange
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
                      onPageChange: handlePageChange
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
                      border: `3px solid ${colors.dark}` 
                    };
                  }
                  return (
                    <ButtonPagination
                      {...getPageItemProps({
                        pageValue: page,
                        key: page,
                        style: activePage,
                        onPageChange: handlePageChange
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
                      onPageChange: handlePageChange
                    })}
                  >
                    <FaChevronRight />
                  </ButtonPagination>
                )}
                {total > 0 && (
                  <ButtonPagination
                    {...getPageItemProps({
                      pageValue: totalPages,
                      onPageChange: handlePageChange
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

export default Paginate;
