export const Create = post => {
    return {
        type: "CREATE_POST",
        payload: post 
    }
}

export const Delete = post => {
    return {
        type: "DELETE_POST",
        payload: post
    }
}

export const Title = title => {
    return {
        type: "TITLE",
        payload: title
    }
}

export const Author = author => {
    return {
        type: "AUTHOR",
        payload: author
    }
}

export const Minutes = minutes => {
    return {
        type: "MINUTES",
        payload: minutes
    }
}