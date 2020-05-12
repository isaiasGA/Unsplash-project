import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Using an aarrow function in our 'formSubmit' will allow us to allways link 'this' with our class component
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term); //Unlike functional components, in class components, we always want to use "this" in order to reference "props" to reference
  };

  //"this.onFormSubmit" inside "onSubmit" is called a CALLBACK Function because it is not being invoked() instantly, therefore, no () are used

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              //Value is going to have the "input value" that we have from our input
              //When our state is updated and our component is re-rendered, then "value" will be assigned to "term" from our state, that holds the value from our input
              // "this.state.term" is what the input is going to show because it is inside the "value" property
              //'value' will override whatever is inside of its{}
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
              //"Event" is considered an 'object' that will be passed on automatically this also known as an "event object". This object contains information about the EVENT that just occured

              //We want to call this method eachtime someone TYPES IN something in our INPUT

              //This property from 'event' will contain the text that the user typed in our input
            />
          </div>
        </form>
      </div>
    );
    //"onChange" a special input property that
    //"onInoutChange" is a callback function taken by "onChange", We DO NOT need to add () at the end of it because we dont want it to be called each time our 'SearchBar' component is RENDERED. * We only want to call it at some point in the future
  }
}

export default SearchBar;
