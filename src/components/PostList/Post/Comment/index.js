import React  from 'react';
import './styles.css'

function Comment({data}) {
  return( 
    <>
    <div class="comment">
      <img src={data.author.avatar} alt="avatar"/>
      <p><span>{data.author.name}</span> {data.content}</p>
    </div>
    </>
  );
}

export default Comment;