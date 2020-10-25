import React from "react";
class Countries extends React.Component {
  render() {
    const { mycountry } = this.props;
    return (
      <tr>
        <td>{mycountry.Country}</td>
        <td>{mycountry.NewConfirmed}</td>
        <td>{mycountry.TotalRecovered}</td>
        <td>{mycountry.TotalDeaths}</td>
      </tr>
    );
  }
}
export default Countries;
