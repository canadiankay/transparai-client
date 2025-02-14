import "./ProductsList.scss";

export default function IndustryDropdown() {
  return (
    <>
      <div className="products-list">
        <h2 className="products-list__header">Test</h2>
        <p className="products-list__copy">Any additional copy</p>
        <form>
        <input type="checkbox" id="checkbox1" name="option1" value="value1" />
        <label for="checkbox1">Option 1</label>
        </form>
      </div>
    </>
  );
}