import React from "react";
import {render } from "react-dom"
class App extends React.Component {
    
    render(){
        return (
            <div>
                <header>
                    <div className="header-brand">
                        <p>Hello World</p>
                    </div>
                   

                </header>
            </div>
        )
    }
}
render(<App />, document.getElementById('root'));
