import React, { Component } from 'react';

import axios from 'axios';

import css from './AppWithRequests.module.css';
import Loader from 'components/Loader';

// {
//    "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//}
//============coments================
// {
//   "postId": 1,
//   "id": 1,
//   "name": "id labore ex et quam laborum",
//   "email": "Eliseo@gardner.biz",
//   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// },

export default class AppWithRequests extends Component {
  state = {
    posts: null,
    comments:null,
    selectedPostId: null,
    isLoading: false,
    error: null,
    
  };
  fetchPosts = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      this.setState({
        posts: data,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };
  //========For coments==================
  fetchPostComments = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/comments?postId=${this.state.selectedPostId}'
      );
      this.setState({
        comments: data,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchPosts();
  }
  render() {
    return (
      <div className={css.container}>
        <h1>HTTP-request</h1>
        {this.state.error !== null && (
          <p className={css.errorBage}>
            Oops,some error occured... Error message: {this.state.error}
          </p>
        )}
        {this.state.isLoading && <Loader />}
        <div className={css.listWrapper}>
          <ul className={css.postList}>
          {this.state.posts !== null &&
            this.state.posts.map(post => {
              return (
                <li key={post.id} className={css.postListItem}>
                  <h2 className={css.itemTitle}>{post.title}</h2>
                  <p className={css.itemBody}>
                    <b>Body</b> {post.body}
                  </p>
                </li>
              );
            })}
        </ul>
        <ul className={css.comentsList}>
          <li className={css.comentsListItem}>
            <h2 className={css.comentsItemTitle}>Coments Titel</h2>
            <h3 className={css.comentsItemEmail}></h3>
            <p className={css.comentsitemBody}>
              <b>Body</b> comments text
            </p>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}
