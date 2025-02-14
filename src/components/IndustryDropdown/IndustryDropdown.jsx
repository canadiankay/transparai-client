import "./IndustryDropdown.scss";
import dropdown from "../../images/dropdown.svg";

export default function IndustryDropdown() {
  return (
    <>
      <div className="industry-dropdown">
        <h2 className="industry-dropdown__header">Select your industry</h2>
        <p className="industry-dropdown__copy">Any additional copy</p>
        <select className="industry-dropdown__field">
          <option value="">Choose your industry</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Financial Services">Financial Services</option>
          <option value="Retail">Retail</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Education">Education</option>
          <option value="Government">Government</option>
          <option value="Energy">Energy</option>
          <option value="Telecommunications">Telecommunications</option>
          <option value="Media and Communications">
            Media and Communications
          </option>
          <option value="Automotive">Automotive</option>
        </select>
      </div>
    </>
  );
}
