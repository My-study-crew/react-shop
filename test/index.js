import React, { useState } from "react";

//* Statefull component
const Button = () => {
    const [name, setName] = useState("Hello world!");
    return (
        <div>
            <h1>{name} </h1>
        </div>
    );
};

//* Stateless component
const Presentation = ({ text }) => <Present text={text} />;

/**
 *
 * Most popular components: Statefull & Stateless
 *
 */

//* Previously used in older projects
class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
            </div>
        );
    }
}

//* Previously used in older projects
//* High Order Components or HOC
function ComponentWrapper(WrapperComponent) {
    class Wrapper extends Component {
        render() {
            return <WrapperComponent {...this.props} />;
        }
    }
}
