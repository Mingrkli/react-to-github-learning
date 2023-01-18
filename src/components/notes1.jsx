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

    // //  style={this.styles}
    // styles = {
    //     fontSize: "1rem",
    //     fontWeight: "bold",
    // };

    render() {
        // JSX expression which then later gets compiled to call React.createElement
        // JSX expression must have a parent so "<h1>Hello World</h1><button>Increment</button>" won't work because we will be compiling it in React.createElement which has an argument of the element
        // We have a parentheses here, and without it, js would think you have nothing in front of return
        return (
            // incase you don't want a div element that dose nothing, you can replace the following <div> to <React.Fragment>. So for this example, instead of creating a new div with the contents inside it, we will put the contents inside into the <div id="root"> in the index.html instead
            <React.Fragment>
                {/* Just think of this as ${} in ``. Or, basically any Javascript expressions that produces a value*/}
                {/* in html it's class but for jsx it's className because class is a reserved keyword in javascript */}
                {/* Recommended to use className as it's for performance and maintainability but you might need to break the rules if you know what your doing, for example styling a single element */}
                {/* You can style elements like this "<span style={{ fontSize: "1rem" }}>", or with an property like "style={this.styles}" which you can see in the comments above the render method */}
                <span className={this.getBadgeClasses()}>
                    {this.formantCount()}
                </span>

                <button className="btn btn-secondary btn-sm">Increment</button>

                <ul>
                    {/* For each tag in tags list, we create a <li> element */}
                    {this.state.tags.map((tag) => (
                        // With lists, they should also come with a key which is unique to that list. This is because when changes are made in the DOM, react needs to quickly see which element is being change in the virtual DOM and change it quickly to be in synced with the virtual DOM
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }

    // Create a new method so that our code in "render()" doesn't get bloated
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";

        return classes;
    }

    formantCount() {
        // "this.state.count" is repeated so we will create the following code
        // This is called object destructuring and what we did is that we are picking the count property and storing it in a separate constant called count
        const { count } = this.state;

        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
