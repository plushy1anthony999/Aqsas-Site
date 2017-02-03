import React from "react"
import ReactDOM from "react-dom"

class CommentBox extends React.Component {
    render() {
        return <div className="CommentBox">HELLO EVERYONE!</div>
    }
}

ReactDOM.render(
    <CommentBox />,
    document.getElementById('CommentBox')
)