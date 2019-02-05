import React from 'react';
import './PaginationBar.scss';
import { Pagination, Icon } from 'semantic-ui-react'

const PaginationBar = () => {
  return (
    <div className="pagination-bar">
      <Pagination
      defaultActivePage={1}
      ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
      firstItem={null}
      lastItem={null}
      prevItem={{ content: 'poprzednia' }}
      nextItem={{ content: 'następna' }}
      totalPages={10}
      />
  </div>
  )
}

export default PaginationBar;
