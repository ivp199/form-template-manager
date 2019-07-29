import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {sortableHandle} from 'react-sortable-hoc';

const DragHandle = props => {
  return (
    <div>
      <FontAwesomeIcon icon={['fas', 'bars']} title="Drag to change position"/>
    </div>
  );
};

DragHandle.propTypes = {};

DragHandle.defaultProps = {};

export default sortableHandle(DragHandle);
