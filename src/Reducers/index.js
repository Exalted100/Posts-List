import { combineReducers } from "redux";

const postsReducer = (posts=[{title: "How to Dance", author: "Someone", minutes: "12"},
{title: "How to Play the Flute", author: "Macklemore", minutes: "3"},
{title: "The Art of Wooing Women", author: "Big Daddy", minutes: "20"}], action) => {
    switch (action.type) {
        case "CREATE_POST":
            return [...posts, action.payload]

        case "DELETE_POST":
            return [...action.payload]

        default:
            return posts
}
}

const titleReducer = (title="", action) => {
    switch (action.type) {
        case "TITLE":
            return action.payload

        default:
            return title
    }
}

const authorReducer = (author="", action) => {
    switch (action.type) {
        case "AUTHOR":
            return action.payload

        default:
            return author
    }
}

const minutesReducer = (minutes="", action) => {
    switch (action.type) {
        case "MINUTES":
            return action.payload

        default:
            return minutes
    }
}

export default combineReducers({
    posts: postsReducer,
    title: titleReducer,
    author: authorReducer,
    minutes: minutesReducer
})
