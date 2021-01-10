import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostsList from "./PostsList"
import CreatePost from "./CreatePost"
import DeletePost from "./DeletePost"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PostsList} />
        <Route path="/create" component={CreatePost} />
        <Route path="/delete" exact component={DeletePost} />
      </BrowserRouter>
    </div>
  )
}

export default App;
