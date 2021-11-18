import React, {  Fragment } from "react";
import { connect } from 'react-redux';
import {del_friend} from '../actions/friends'
// import { update_user_profile } from "../actions/profile";
// import { delete_account } from "../actions/auth";
import FriendCard from "./FriendCard";
const Friends = (props) => {

    console.log(typeof(props.friendlist))

    return (
        <Fragment>
            <div className="card-group">
                {props.friendlist === undefined ? <>
                    <div class="card">
                        <div class="card-header">
                            ChatApp
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <h1>No Friends !</h1>
                                <footer class="blockquote-footer"> <cite title="Source Title">ADD FRIENDS</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </> :
                    props.friendlist.map(
                        (myfriend) => {
                            return (
                                <FriendCard title={myfriend} />
                            )
                        }
                    )
                }
            </div>
        </Fragment>
    );

};

const mapStateToProps = state => ({
    friendlist_global: state.friends,
    groups_global: state.groups,
    //these are the variables passed as props globally tomaintain state of application
})

export default Friends;
/*
/* export default connect(mapStateToProps, { del_friend })(Friends);**/

