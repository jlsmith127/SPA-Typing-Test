import React, { Component } from "react";

class Montgomery extends Component {
    render() {
        return (
            <div>
                <p>Taken from <i>Anne's House of Dreams</i> by L. M. Montgomery</p>
                <p>Word Count: {this.props.wc}</p>
                <hr/>
                <p id="montgomery" className="content">The house was a large, substantial affair, painted such a vivid green that the 
                landscape seemed quite faded by contrast. There was an orchard behind it, and a nicely kept lawn before 
                it, but, somehow, there was a certain bareness about it. Perhaps its neatness was responsible for this; 
                the whole establishment, house, barns, orchard, garden, lawn and lane, was so starkly neat.</p>
                <hr/>
                <p className="attribution">Quote found at <a href="https://www.gutenberg.org/files/544/544-h/544-h.htm" title="Project Gutenberg">Project Gutenberg</a>.</p>
            </div>
        );
    }
}

export default Montgomery;