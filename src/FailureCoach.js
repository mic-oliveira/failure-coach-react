import {WisdomQuote as _WisdomQuote} from "./wisdom-quote/WisdomQuote";
import React from "react";

class FailureCoach extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {quote: 'Sem messagem'}
        this.generateQuote = this.generateQuote.bind(this)
        this.generateQuote();
    }

    generateQuote() {
        const quote = new _WisdomQuote();
        this.setState({
            quote: quote.loadQuotes()
        })
    }

    componentDidMount() {
        this.generateQuote();
    }

    render() {

        return (
            <div className="failure-coach">
                <div className="h-screen content-center bg-gray-400 grid grid-cols-1">
                    <div className="w-2/3 place-self-center text-center">
                        <span className="text-6xl">{this.state.quote}</span>
                    </div>
                    <div className="place-self-center m-4">
                        Aperte espaço ou
                        <button className="ml-2 outline outline-1 outline-offset-1 outline-white rounded" onClick={this.generateQuote}>clique aqui</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FailureCoach;
