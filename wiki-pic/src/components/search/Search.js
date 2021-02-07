import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import { MenuItem } from "material-ui";

class Search extends React.Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api/",
    key: "20178801-8068d6e491faf4b9d023d3112",
    images: [],
  };

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for Images"
          fillWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          floatingLabelText="Amount"
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>

        <br />
      </div>
    );
  }
}

export default Search;
