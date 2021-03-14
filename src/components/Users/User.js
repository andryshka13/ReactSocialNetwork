import React from 'react';
import style from './User.module.css';
import userPhoto from '../../assets/images/users.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={style.usersList}>
            <span>
                <NavLink to={'/Profile/' + user.id}>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.usersPhoto} />
                    </div>
                </NavLink>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>
                            unFollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>
                            Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.Status}</div>
                </span>
                <span>
                    <div>{'u.location.Country'}</div>
                    <div>{'u.location.City'}</div>
                </span>
            </span>


        </div>);
}
export default User;