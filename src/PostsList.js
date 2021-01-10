import React from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PostsList = (props) => {
    return (
      <div style={{textAlign: "center"}} >
        <h1 style={{textAlign: "center"}} >POSTS LIST</h1>
        {props.posts.map(post => {
            return (
                <div key={post.title} >
                    <hr />
                    <h3>{post.title}</h3>
                    <i>Written by {post.author}</i>
                    <p>{post.minutes} minutes read</p>
                </div>
                )
        })}
        <hr />
        <div style={{marginTop: "30px"}} >
            <Link to="/create" style={{textDecoration: "none", border: "2px solid black", padding:"5px", color: "black", marginRight: "50px"}} >Create Post</Link>
            <Link to="/delete" style={{textDecoration: "none", border: "2px solid black", padding:"5px", color: "black"}} >Delete Post</Link>
        </div>
      </div>
    )
  }
  
const mapStateToProps = state => {
 return { posts: state.posts }
}
  
export default connect(mapStateToProps)(PostsList)