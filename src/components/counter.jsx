import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    imgURL: "https://picsum.photos/200", // random 200x200 picture
    tags: ["t1", "t2", "t3"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <img src={this.state.imgURL} />
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button style={ {fontSize: 30} } className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

}

export default Counter;
