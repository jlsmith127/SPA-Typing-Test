import React, { Component } from "react";

class Lutz extends Component {
    render() {
        return (
            <div>
                <p>Taken from <i>Susan B. Anthony</i> by Alma Lutz</p>
                <p>Word Count: {this.props.wc}</p>
                <hr/>
                <p id="lutz" className="content">Her father's cotton mill flourished. Regarded as one of the most promising, 
                successful young men of the district, he soon attracted the attention of Judge John McLean, a cotton 
                manufacturer of Battenville, New York, who, eager to enlarge his mills, saw in Daniel Anthony an able 
                manager. Daniel, always ready to take the next step ahead, accepted McLean's offer, and on a sunny July 
                day in 1826, Susan drove with her family through the hills forty-four miles to the new world of 
                Battenville.</p>
                <hr/>
                <p className="attribution">Quote found at <a href="https://www.gutenberg.org/files/20439/20439-h/20439-h.htm" title="Project Gutenberg">Project Gutenberg</a></p>
            </div>
        );
    }
}

export default Lutz;