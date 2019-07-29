import React from 'react';
import {sortableElement, sortableHandle} from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => <span>::</span>);

const SortableItem = props => {
  return (
    <div>{props.children}</div>
  );
};

SortableItem.propTypes = {};

SortableItem.defaultProps = {};

export default sortableElement(SortableItem);
