import { useState, useEffect } from 'react';

const Posts = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => { // res is an object
        // res obj
        return res.json(); // res.json() is a fn -- it is a promise
      })
      .then((resInJson) => { // resInJson is an obj
        setPostList(resInJson);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('It is over!');
      });
  }, []);
  return (
    <div className="row">
      <h3>Posts</h3>
      {postList.map((post) => {
        return (
          <div className="col-md-6" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Post #{post.id}
                </h6>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
