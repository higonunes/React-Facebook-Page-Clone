import React, { Component } from 'react';
import './styles.css'

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julia Alcantara",
          avatar: "data:image/jpeg;base64,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"
        },
        date: "04 Jan 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        comments: [
          {
            id: 1,
            author: {
              name: "Fábio Ferreiro",
              avatar: "https://br.jetss.com/wp-content/uploads/2018/01/3-40.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Vestibulum sed arcu non odio euismod lacinia at."
          },
          {
            id: 2,
            author: {
              name: "João Higo",
              avatar: "http://agbrands.com.br/wp-content/uploads/2017/01/perfil.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Higo Nunes",
          avatar: "data:image/jpeg;base64,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"
        },
        date: "05 Jan 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse?",
        comments: [
          
        ]
      },
      
    ],
  };

 render() {
   return (
     <ul>
      {this.state.posts.map(p => <li><Post key={p.id} data={p}/></li>)}
     </ul>
   )
 }
}

export default PostList;