import React from "react";
// Components
import Header from "./Components/Header";
import Inputs from "./Components/Inputs";
import TextPart from "./Components/TextPart";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            inputColor: "",
            inputBgColor: "",
            isValid : '',
        };
    }

    handleInputChange = event => {
        let isOk = /^#([0-9A-F]{3}){1,2}$/i.test(event.target.value);
        this.setState({ isValid : isOk})
        if(isOk === false){return ''}

        if (event.target.id === "inputColor") {
            this.setState({
                inputColor: event.target.value
            });
        } else if (event.target.id === "inputBgColor") {
            this.setState({
                inputBgColor: event.target.value
            });
        }
    };

    render() {
        const { inputColor, inputBgColor , isValid } = this.state;
        console.log(isValid)
        return (
            <>
                <Header title="color changing page!!" />
                <Inputs handleInputChange={this.handleInputChange} isValid={isValid} />
                <TextPart color={inputColor} bgColor={inputBgColor}  />
            </>
        );
    }
}

export default App;
