import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './CommentBox'
//im not sure what service worker does
import registerServiceWorker from './registerServiceWorker';
import './index.css'

ReactDOM.render(
  <CommentBox />,
  document.getElementById('root')
);
registerServiceWorker();
