import "./IndustryDropdown.scss";
import dropdown from "../../images/dropdown.svg";

export default function IndustryDropdown() {
  return (
    <>
      <div className="industry-dropdown">
        <h2 className="industry-dropdown__header">Select your industry</h2>
        <p className="industry-dropdown__copy">Any additional copy</p>
        <select className="industry-dropdown__field">
            <option>Healthcare</option>
            <option>Financial Services</option>
            <option>Retail</option>
            <option>Manufacturing</option>
            <option>Education</option>
            <option>Government</option>
            <option>Energy</option>
            <option>Telecommunications</option>
            <option>Media and Communications</option>
            <option>Automotive</option>
        </select>
      </div>
    </>
  );
}
