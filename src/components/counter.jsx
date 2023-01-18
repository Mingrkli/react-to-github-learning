import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

    /*
        Old Way


        constructor() {
            super();
            // With the bind method, we can set the value of "this" in which will return a new instance of the handleIncrement function and that new functions "this" will be referencing the current object
            // Then with "this.handleIncrement =" we can reset the function to the function that is returned from the bind method
            this.handleIncrement = this.handleIncrement.bind(this);
        }
    */

    // Events naming convention would have "handle" at the front
    // By converting the following function into an arrow function, they will inherit the "this" keyword. Therefore, this is a much cleaner way than the typing code in the above comment which is the old way
    handleIncrement = () => {
        // "this.state.count++" won't work with react because it is incrementing however, React is not aware of that so, we would have to use a method we inherit from the base Component in React
        // The "setState()" method is basically telling React that the state of this component is going to change. Therefore, React will schedule a call to the render() method sometime in the future (we don't know when, maybe 5 or 10 milliseconds later)
        this.setState({ count: this.state.count + 1 });

        /*
            How "this" works:
            -If from "obj.method()", It will return a reference with an object
            -If from "function()", It will return a window object (undefined if strict mode is enabled)
        */
    };

    // When this method would be called again in the future, it will return a new React element
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formantCount()}
                </span>

                <button
                    // Notice that we can not calling this method but passing a reference to it since handleIncrement doesn't have a "()" at the end of it
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";

        return classes;
    }

    formantCount() {
        const { count } = this.state;

        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
