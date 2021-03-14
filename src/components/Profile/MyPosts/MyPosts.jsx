import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';


const maxLength10 = maxLengthCreator(10)
let addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Write your post'} component={Textarea} name={'newPostText'} validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const MyPosts = (props) => {
  console.log('Render');
  let postElement = props.posts.map(p => <Post key={p.id} name={p.post} id={p.id} like={p.likesCount} />);



  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }


  const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(addNewPostForm);

  return (
    <div>
      <div className={style.postsBlocks}>
        <h3>My posts</h3>
        <AddNewPostReduxForm onSubmit={onAddPost} />
        <div className={style.posts}>
          {postElement}
        </div>
      </div>
    </div>
  );
}

export default MyPosts;