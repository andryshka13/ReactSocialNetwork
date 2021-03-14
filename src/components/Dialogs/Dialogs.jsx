import React from 'react';
import style from './Dialog.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';



const Dialogs = (props) => {

    let state = props.pageDialogs;

    let dialogsItems = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesItems = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)
    //let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    const maxLength50 = maxLengthCreator (50);
    const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter your message'} name={'newMessageBody'} component={Textarea} validate={[required, maxLength50]}/>
                </div>
                <div>
                    <button>send message</button>
                </div>
            </form>
        )
    }

    const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={style.messages}>
                <div>{messagesItems}</div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>

    );
}



export default Dialogs;