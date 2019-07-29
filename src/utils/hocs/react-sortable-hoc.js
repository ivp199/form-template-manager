import React, { Component } from 'react';
import { sortableContainer } from 'react-sortable-hoc';

const SortableContainer = sortableContainer(({children}) => {
  return <div>{children}</div>;
});

class ReactSortableHoc extends Component {
  render() {
    return (
      <SortableContainer onSortEnd={this.props.onSortEnd} useDragHandle>
        {this.props.children}
      </SortableContainer>
    );
  }
}

export default ReactSortableHoc;