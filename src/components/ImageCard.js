import React from "react";

//We decided to create this 'imageCard' component in order to facilitate styling each of the images. This is done in order to make the images fit the desired grid
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    //setting up our 'ref' in orther to reference our '<img>' tag inside of our constructor
    //We need to get each individual image from the DOM by using a ref system
    // console.log('this image card',this)
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  //When the image fully LOADS, then we want to run the function 'setSpans' which becomes a callback function inside of othe eventListener

  setSpans = () => {
    //we create an arrow function because we want 'this.setSpan'(callback) in the event listener to be binded to our app and not undefined
    const height = this.imageRef.current.clientHeight;
    //Math.ceil will make the value round up to a whole number, and the "+ 1" will make sure that if we have a portion of a row that we need, then it would be provided
    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans: spans });
  };
  // 'load' is an event listener that will will trigger the 'height' 'ref' only after the images have been 'loaded' this will prevent from having a height of 0 because the 'imageRef' loaded way too early
  render() {
    //We destructured the inside of "map" in order to aovid repeating  'image' prop in 'key', 'src', 'alt'
    const { urls, alt_description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
