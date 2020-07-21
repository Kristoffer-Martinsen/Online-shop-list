import React from 'react';

function ListItem(props) {
  return (
    <div key={props}>
      <div className="my-3">
        <span>{props}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded mx-2" > {/* onClick={ () => handleDelete(item) } */}
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
