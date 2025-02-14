import "./ProductsList.scss";

export default function IndustryDropdown() {
  return (
    <>
      <div className="products-list">
        <h2 className="products-list__header">Are you using any of Microsoft Products?</h2>
        <p className="products-list__copy">Choose from the list</p>
        <div className="products-list__options-container">
          <div className="products-list__option">
            <input
              type="checkbox"
              id="checkbox1"
              name="option1"
              value="Microsoft 365"
            />
            <label for="checkbox1">Microsoft 365 </label>
          </div>
          <div className="products-list__option">
            <input
              type="checkbox"
              id="checkbox2"
              name="option2"
              value="Microsoft Teams"
            />
            <label for="checkbox2">Microsoft Teams</label>
          </div>
          <div className="products-list__option">
            <input
              type="checkbox"
              id="checkbox3"
              name="option3"
              value="Dynamics 365 Business Central"
            />
            <label for="checkbox3">Dynamics 365 Business Central</label>
          </div>
          <div className="products-list__option">
            <input
              type="checkbox"
              id="checkbox4"
              name="option4"
              value="Dynamics 365 Sales"
            />
            <label for="checkbox4">Dynamics 365 Sales</label>
          </div>
          <div className="products-list__option">
            <input
              type="checkbox"
              id="checkbox5"
              name="option5"
              value="Microsoft Power Platform"
            />
            <label for="checkbox5">Microsoft Power Platform</label>
          </div>
          <div className="products-list__option">
            <input
              type="checkbox"
              id="checkbox6"
              name="option6"
              value="Surface for Business Devices"
            />
            <label for="checkbox6">Surface for Business Devices</label>
          </div>
        </div>
      </div>
    </>
  );
}
