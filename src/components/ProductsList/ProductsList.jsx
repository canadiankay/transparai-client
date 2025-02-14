import React from 'react';
import './ProductsList.scss';

const ProductsList = ({ selectedTools, onChange, error }) => {
  const products = [
    { id: 'microsoft365', label: 'Microsoft 365', value: 'Microsoft 365' },
    { id: 'teams', label: 'Microsoft Teams', value: 'Microsoft Teams' },
    { id: 'businessCentral', label: 'Dynamics 365 Business Central', value: 'Dynamics 365 Business Central' },
    { id: 'sales', label: 'Dynamics 365 Sales', value: 'Dynamics 365 Sales' },
    { id: 'powerPlatform', label: 'Microsoft Power Platform', value: 'Microsoft Power Platform' },
    { id: 'surface', label: 'Surface for Business Devices', value: 'Surface for Business Devices' }
  ];
  const handleCheckboxChange = (value) => {
    const updatedTools = selectedTools.includes(value)
      ? selectedTools.filter(tool => tool !== value)
      : [...selectedTools, value];
    onChange(updatedTools);
  };
  return (
    <div className="products-list">
      <h2 className="products-list__header">Are you using any of Microsoft Products?</h2>
      <p className="products-list__copy">Select all that apply</p>
      <div className="products-list__options-container">
        {products.map(product => (
          <div key={product.id} className="products-list__option">
            <input
              type="checkbox"
              id={product.id}
              checked={selectedTools.includes(product.value) || false}
              onChange={() => handleCheckboxChange(product.value)}
              className={error ? 'products-list__checkbox--error' : ''}
            />
            <label htmlFor={product.id}>{product.label}</label>
          </div>
        ))}
      </div>
      {error && <div className="products-list__error">{error}</div>}
    </div>
  );
};
export default ProductsList;