import React, { Component } from "react";

class Alcott extends Component {
    render() {
        return (
            <div>
                <p>Taken from <i>Little Women</i> by Louisa May Alcott</p>
                <p>Word Count: {this.props.wc}</p>
                <hr/>
                <p id="alcott" className="content">Very few letters were written in those hard times that were not touching, 
                especially those which fathers sent home. In this one little was said of the hardships endured, 
                the dangers faced, or the homesickness conquered; it was a cheerful, hopeful letter, full of lively 
                descriptions of camp life, marches, and military news; and only at the end did the writer's heart 
                overflow with fatherly love and longing for the little girls at home.</p>
                <hr/>
                <p className="attribution">Quote found at <a href="https://www.gutenberg.org/files/37106/37106-h/37106-h.htm" title="Project Gutenberg">Project Gutenberg</a>.</p>
            </div>
        );
    }
}

export default Alcott;