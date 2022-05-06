import React, { Component } from "react";
import {
    Routes,
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Alcott from "./Alcott";
import Montgomery from "./Montgomery";
import Lutz from "./Lutz";
let interval = "";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wpm: 0,
            message: ""
        }
        this.countupTimer = this.countupTimer.bind(this);
        this.evaluator = this.evaluator.bind(this);
    }
   
    countupTimer(e) {
        if (this.props.secondsValue === 0) {
            interval = setInterval(this.props.countSeconds, 1000); 
        } else {
            e.stopPropagation();
        } 
    }

    evaluator() {
        var secNum = 0;
        var wNum = 0;
         var textArray = ["lutz", "montgomery", "alcott"];
         for (let i = 0; i <= textArray.length; i++)
         {
            if (document.getElementById(textArray[i]) !== null) { 
        if ((document.getElementById(textArray[i]).innerHTML) === (document.getElementById("textInput").value)) {
            console.log("correct");
            clearInterval(interval);
            secNum = this.props.secondsValue;
            wNum = document.getElementById(textArray[i]).innerHTML.split(" ").length;
            console.log(wNum);
            this.setState ({
                wpm: ((secNum / wNum) * 60).toFixed(1),
                message: "Great job. You've matched the selection perfectly!"
            });
            setTimeout(() => {
                console.log("Short delay!")
                window.location.reload(false);
            }, 20000);
            return this.state.message;
        } 
          else {
              if (this.state.message === "Please keep trying. You're almost there.") {
                return this.state.message;
            } else {
            this.setState ({
                message: "Please keep trying. You're almost there."
            });
            return this.state.message;
        }
    }
    }
}
    }

    render() {
        return (
            <HashRouter>
            <div>
                <h1>Typing Program</h1>
                    <ul className="header">
                        <li><NavLink to="/">Louisa May Alcott</NavLink></li>
                        <li><NavLink to="/Montgomery">L. M. Montgomery</NavLink></li>
                        <li><NavLink to="/Lutz">Alma Lutz</NavLink></li>
                    </ul>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Alcott wc="74"/>}/>
                        <Route path="/Montgomery" element={<Montgomery wc="63"/>}/>
                        <Route path="/Lutz" element={<Lutz wc="83"/>}/>
                    </Routes>
                    <div>
                        <p>Please type the selection between the lines above.</p>
                            <form>
                                <textarea onClick={this.countupTimer} onKeyUp={this.evaluator} size="100" cols="150" rows="5" id="textInput"></textarea>
                            </form>
                        <p>{this.state.message}</p>
                        <p>You have been typing for {this.props.secondsValue} seconds!</p>
                        <p>You Typed {this.state.wpm} Words Per Minute!</p>
                    </div>                
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;