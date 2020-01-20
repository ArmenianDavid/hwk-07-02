import React from "react";
// Components
import Header from "./Components/Header";
import Inputs from "./Components/Inputs";
import TextPart from "./Components/TextPart";
import PoweredBy from "./Components/PoweredBy/PoweredBy";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            inputColor: localStorage.getItem("inputColor")
                ? localStorage.getItem("inputColor")
                : "",
            inputBgColor: localStorage.getItem("inputBgColor")
                ? localStorage.getItem("inputBgColor")
                : ""
        };
    }

    handleInput = (id, input) => {
        if (id === "inputColor") {
            localStorage.setItem("inputColor", input);
            this.setState({ inputColor: input });
        } else if (id === "inputBgColor") {
            localStorage.setItem("inputBgColor", input);
            this.setState({ inputBgColor: input });
        }
    };

    render() {
        const { inputColor, inputBgColor, isValid } = this.state;
        console.log(isValid);
        return (
            <>
                <Header title="color changing page!!" />
                <Inputs handleInput={this.handleInput} />
                <TextPart color={inputColor} bgColor={inputBgColor} />
                <PoweredBy text="Powered By" name="Davit Sahakyan" />
            </>
        );
    }
}

export default App;
