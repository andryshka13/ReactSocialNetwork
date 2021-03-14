import React from 'react';
import { createMyField, Input, Textarea } from './../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form';
import style from './../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({handleSubmit, profile, error }) => {
    return <form  onSubmit={ handleSubmit }>
        <div>
            <div><button>save</button></div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full name</b>: {createMyField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createMyField('', 'lookingForAJob', [], Input, {type: 'checkbox'} )}
            </div>
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
                {createMyField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
                {createMyField('About Me', 'aboutMe', [], Textarea)}
            </div>
            {<div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={style.contact}>
                        <b>{key}: {createMyField(key, 'contacts.' + key, [], Input)}</b>
                    </div> 
                    })}
            </div>}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;