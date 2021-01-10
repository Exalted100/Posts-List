import React from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Delete } from "./Actions"

const DeletePost = (props) => {
    return (
      <div style={{textAlign: "center"}} >
        <h1>DELETE POST</h1>
        {props.posts.map((post, x) => {
            return (
                <div key={post.title} >
                    <hr />
                    <h3>{post.title}</h3>
                    <button onClick={() => props.Delete(props.posts.filter(post => post.title !== props.posts[x].title))} >DELETE</button>
                </div>
                )
        })}
        <hr />
        <div style={{marginTop: "30px"}} >
            <Link to = "/" style={{textDecoration: "none", border: "2px solid black", padding:"5px", color: "black"}} >Posts</Link>
        </div>
      </div>
    )
  }

const mapStateToProps = state => {
 return { posts: state.posts }
}
  
export default connect(mapStateToProps, { Delete })(DeletePost)