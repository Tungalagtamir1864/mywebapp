import React, { Component } from "react";

class MultiButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: [],
      activeButtonIndex: null,
    };
  }

  addNewButton = () => {
    const { buttons } = this.state;
    const newButtonLabel = `Button ${buttons.length + 1}`;
    buttons.push(newButtonLabel);
    this.setState({ buttons });
  };

  toggleActiveButton = (index) => {
    this.setState({ activeButtonIndex: index });
  };

  render() {
    const { buttons, activeButtonIndex } = this.state;

    return (
      <div>
        <button onClick={this.addNewButton}>Add Button</button>
        <div>
          {buttons.map((buttonLabel, index) => (
            <button
              key={index}
              onClick={() => this.toggleActiveButton(index)}
              style={{
                marginBottom: "7px",
                backgroundColor: index === activeButtonIndex ? "tomato" : "",
              }}
            >
              {buttonLabel}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default MultiButton;
