import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Title, Author, Minutes, Create } from "./Actions"

const CreatePost = (props) => {
    const onTitleChange = (event) => {
        props.Title(event.target.value)
    }

    const onAuthorChange = (event) => {
        props.Author(event.target.value)
    }

    const onMinutesChange = (event) => {
        props.Minutes(event.target.value)
    }

    const createPost = () => {
        props.Create({title: props.state.title, author: props.state.author, minutes: props.state.minutes})
        props.Title("")
        props.Author("")
        props.Minutes("")
    }

    return (
      <div style={{textAlign: "center"}} >
        <h1>DELETE POST</h1>
        <hr />
        <form style={{marginBottom: "30px"}} >
            <div>
                <label style={{display: "block", marginTop: "20px", fontSize: "20px"}} >Title</label>
                <input 
                style={{width: "300px", height: "30px"}}
                type="text"
                onChange={onTitleChange}
                value={props.title}
                />
            </div>

            <div>
                <label style={{display: "block", marginTop: "20px", fontSize: "20px"}} >Author</label>
                <input 
                style={{width: "300px", height: "30px"}}
                type="text" 
                onChange={onAuthorChange}
                value={props.author}
                />
            </div>

            <div>
                <label style={{display: "block", marginTop: "20px", fontSize: "20px"}} >Minutes to Read</label>
                <input 
                style={{width: "300px", height: "30px"}}
                type="text"
                onChange={onMinutesChange}
                value={props.minutes}
                />
            </div>
        </form>

        <hr />

        <div style={{marginTop: "30px"}} >
            <Link to="/" onClick={createPost} style={{textDecoration: "none", border: "2px solid black", padding:"5px", color: "black", marginRight: "50px"}} >Create Post</Link>
            <Link to = "/" style={{textDecoration: "none", border: "2px solid black", padding:"5px", color: "black"}} >Posts</Link>
        </div>
      </div>
    )
  }

const mapStateToProps = state => {
 return { posts: state.posts, state:state }
}
  
export default connect(mapStateToProps, { Title, Author, Minutes, Create })(CreatePost)