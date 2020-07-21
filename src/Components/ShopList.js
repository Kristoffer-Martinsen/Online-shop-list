import React, { useState } from 'react';

function ShopList() {
  
  const [value, setValue] = useState('');

  const [listOfItems, setList] = useState([
      {text: 'Milk'},
      {text: 'Cereal'},
      {text: 'Meat'}
    ]
  );

  /* On form submit */
  const handleSubmit = (mouseClick) => {
    mouseClick.preventDefault();
    addListItem(value);
    setValue('')
  };

  /* Add Item to list */
  const addListItem = (text) => {
    if (text !== "") {
      const updatedShoplist = [...listOfItems, { text }];
      setList(updatedShoplist);
    }
  };

  /* Remove Item from list */
  const handleDelete = (item) => {
    const filteredShopList = (listOfItems.filter(currentListItemValue => (currentListItemValue !== item)));
    setList(filteredShopList);
  }

  return (
    <div>
      {/* Input field (Replaced with component later?)*/}
      <form onSubmit={handleSubmit}>
        <div className="py-3">
          <div className="flex items-center">
            <input className="bg-white focus:outline-none focus:shadow-outline border 
                          border-gray-300 rounded-lg py-2 px-4 block w-auto appearance-none 
                          leading-normal" placeholder="Item to add..." value={ value } onChange={ (event) => setValue(event.target.value) }/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" type='submit'>
              Add
            </button>
          </div> 
        </div>
      </form>

      {/*List if items ( Items as components?)*/}
      <div className='listOfItems'>
        {
          listOfItems.map((item, index) => (
            <div key={index}>
              <div className="flex content-center my-3">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 mx-2 text-gray-600" unchecked="true"/>
                </label>
                <span className="inline-flex items-center mx-2">{item.text}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded mx-2" onClick={ () => handleDelete(item) }>
                  Delete
                </button>
                <input className="bg-white focus:outline-none focus:shadow-outline border 
                          border-gray-300 rounded-lg py-2 px-4 block w-auto appearance-none 
                          leading-normal"/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ShopList;
