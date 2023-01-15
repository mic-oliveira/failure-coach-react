import {WisdomQuote as _WisdomQuote} from "./wisdom-quote/WisdomQuote";
import React from "react";


class FailureCoach extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {quote: 'Teste'}
        this.test = this.test.bind(this)
    }

    test() {
        const quote = new _WisdomQuote();
        this.setState({
            quote: quote.loadQuotes()
        })
    }

    render() {
        return (
            <div className="failure-coach">
                <div className="flex items-center justify-center w-100 h-screen content-center bg-gray-400">
                    <div className="w-1/2 text-center">
                        <span className="text-6xl">{this.state.quote}</span>
                        <button onClick={this.test}>dsadsa</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FailureCoach;
