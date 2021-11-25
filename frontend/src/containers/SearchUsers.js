import React, { Fragment ,useState,useEffect} from "react";
import { get_searched_user_list } from '../actions/auth';
import { connect } from 'react-redux';
import { del_friend } from '../actions/friends'
// import { update_user_profile } from "../actions/profile";
// import { delete_account } from "../actions/auth";
import '../styles/friends.css'
import FriendCard from "./FriendCard";

const SearchUsers = ({get_searched_user_list,searchedUser,friendlist}) => {

    console.log("Searched User : ",searchedUser)


    const [searchItem, setSearchItem] = useState("")
    const [searchList, setsearchList] = useState([])
    const onChange = e => setSearchItem(e.target.value)

    useEffect(()=>{
        setsearchList(searchedUser)
    },[searchedUser]);
    

    const onClick = (e) => {
        // Check in friend list
        if(friendlist.length != 0){
             // Check in friend list
                setsearchList(friendlist.filter(checkUsername));   
                     
        }
        if(searchList.length == 0 && searchedUser.length != 0 ) {
            setsearchList(searchedUser.filter(checkUsername))
        }
        //Check all
        if(searchList.length == 0){
           get_searched_user_list(searchItem)   
        }        
    }
    const checkUsername = (user)=>{
       return user.username.startsWith(searchItem)        
    }

    return (
        <Fragment>

            <div className="navbar navbar-expand-sm w-100">
            <form action="">
                <div class="input-group input-group-sm m-2  float-start">
                    <input type="text" onKeyUp={e=>onChange(e)} id="searchbar" className="form-control " placeholder="Enter username" aria-label="Recipient's username" aria-describedby="searchbtn"/>
                    <button class="btn btn-outline-secondary btn-sm" onClick={e => onClick(e)} type="button" id="searchbtn">Search</button>
                </div>
            </form>
            
            </div>

            <div className="card-group">
                {searchedUser === undefined ? <>
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
                    searchedUser.map(
                        (myfriend) => {
                            console.log("in card iteration")
                            return (
                                <FriendCard friend={myfriend} />
                            )
                        }
                    )
                }
            </div>
        </Fragment>
    );

};

const mapStateToProps = state => {console.log(state.profile);

    console.log(
        "Auth : ",state.auth
    )
    
    console.log("=> ",state.friends)
    // console.log(state.friends[0])    
    return {
    friendlist_global: state.friends,
    groups_global: state.groups,
    searchedUser:state.friends.searchedUser,
    friendlist:state.friends.friendlist,
    // username:state.profile.username,
    //these are the variables passed as props globally tomaintain state of application
}}
export default connect(mapStateToProps,{get_searched_user_list,})(SearchUsers);
// export default Friends;
/*
/* export default connect(mapStateToProps, { del_friend })(Friends);**/

