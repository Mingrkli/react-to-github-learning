// With the Simple React Snippets extension there is some cool shortcuts to generate code
// imrc shortcut
import React, { Component } from "react";

// cc shortcut
class Counter extends Component {
    // State is a special component for react and it's basically an object that includes any data that this component needs
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"],
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()}
            </React.Fragment>
        );
    }
}

export default Counter;
