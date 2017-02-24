import React from 'react';

const List = ({ component, items, className }) => (
    <ul className={className || "list-wrapper"}>
      {
        items.map((item, index) =>
          component({key: `item-${index}`, item: item})
        )
      }
    </ul>
);

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array.isRequired,
  className: React.PropTypes.string,
};

export default List;
