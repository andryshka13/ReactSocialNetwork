import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/users.png'
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  }

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={style.mainPhoto} />
        <div className={style.changePhoto}>
          {props.isOwner && <input type={'file'} id="file" className={style.inputFile} onChange={onMainPhotoSelected} />}
          {<label for="file">Choose a file</label>}
        </div>

        {editMode
          ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }}
            profile={props.profile} isOwner={props.isOwner} />}

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <b>Full name: {profile.fullName}</b>
    </div>
    <div>
      <b>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</b>
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skills: {profile.lookingForAJob}</b>
      </div>
    }
    <div>
      <b>About me: {profile.aboutMe}</b>
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} ContactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}



const Contact = ({ contactTitle, ContactValue }) => {
  return <div className={style.contact}><b>{contactTitle}</b>: {ContactValue}</div>
}

export default ProfileInfo;