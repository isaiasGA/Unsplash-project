import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    //unsplash is imported from our unsplash file.
    const response = await unsplash.get("/search/photos", {
      //this 'query' inside "params" has the term that the user will type and will be added at the end of the 'https' link when searching for a specific photo example: 'query=term'
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
