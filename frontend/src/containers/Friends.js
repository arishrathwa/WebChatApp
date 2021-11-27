import React, { Fragment ,useState,useEffect} from "react";
import { get_searched_user_list } from '../actions/auth';
import { connect } from 'react-redux';
import { get_friend_list } from "../actions/friends";
import { del_friend } from '../actions/friends'
// import { update_user_profile } from "../actions/profile";
// import { delete_account } from "../actions/auth";
import '../styles/friends.css'
import FriendCard from "./FriendCard";

const Friends = ({get_searched_user_list,get_friend_list,searchedUser,friendlist,user_name}) => {

    console.log("Searched User : ",searchedUser)


    const [searchItem, setSearchItem] = useState("")
    const [searchList, setsearchList] = useState(friendlist)
    const onChange = e => setSearchItem(e.target.value)

    useEffect(()=>{
        get_friend_list()   
    },[]);
    
    useEffect(()=>{
        setsearchList(friendlist)
        friendTag()
        console.log("DRUGS")
    },[friendlist])
    
    useEffect(()=>{
        deleteCommonElements(friendlist,searchedUser);    
    },[searchedUser])

    
    console.log("SearchList : ",searchList)
    console.log("FriendList : ",friendlist)

    const onClick = (e) => {
        // Check in friend list
        let flag = 0;
        if(friendlist.length != 0){
             // Check in friend list
                let list = friendlist.filter(checkUsername)
                if(list.length != 0){    
                    setsearchList(list); 
                    flag = 1;
                }           
                 
        }
        // Check in searched users list
        if(searchedUser.length != 0 && flag === 0) {
            let list = searchedUser.filter(checkUsername);
            if(list.length != 0){    
                setsearchList(list)
                flag = 1;
            }
           
        }
        //Check all
        if(flag == 0){
           get_searched_user_list(searchItem)   
        }        
    }
    const checkUsername = (user)=>{
       return user.username.includes(searchItem)        
    }

    const deleteCommonElements = (friendlist,searchedUser) =>{
            
        searchedUser.map((elem)=>{
            friendlist.map(friend=>{
                if(friend["username"] !== elem["username"]){
                    elem["tag"] = "not friend"
                }
                else {
                    elem["tag"] = "friend"
                }

            })
        })

        searchedUser = searchedUser.filter((elem)=>{
            return elem["tag"] !== "friend"
        })
        
            setsearchList(friendlist.concat(searchedUser))
                 
    }
      

    const friendTag = ()=> {
        friendlist.map((friend)=>{
            friend["tag"] = "friend"
        })
        setsearchList(friendlist)
        console.log("FEDN ls:",friendlist)
    }
    

    return (
        <Fragment>

            <div className="navbar navbar-expand-sm w-100">
            <form action="">
                <div class="input-group input-group-sm m-2  float-start">
                    <input type="text" onChange={e=>onChange(e)} id="searchbar" className="form-control " placeholder="Enter username" aria-label="Recipient's username" aria-describedby="searchbtn"/>
                    <button class="btn btn-outline-secondary btn-sm" onClick={e => onClick(e)} type="button" id="searchbtn">Search</button>
                </div>
                
            </form>
            
            </div>

            <div className="card-group" >
                {searchList === undefined ? <>
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
                     searchItem == "" ?
                        friendlist.map(
                            (myfriend) => {
                                console.log("in card iteration")
                                return (
                                    <FriendCard tag={{"tag":"friend"}} friend={myfriend} />
                                )
                            }
                        )
                        :
                        searchList.map(
                            (myfriend) => {
                                console.log("in card iteration")
                                return (
                                    <FriendCard tag={{"tag":"mixed"}} friend={myfriend} />
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
    user_name:state.profile.username
    // username:state.profile.username,
    //these are the variables passed as props globally tomaintain state of application
}}
export default connect(mapStateToProps,{get_searched_user_list,get_friend_list})(Friends);
// export default Friends;
/*
/* export default connect(mapStateToProps, { del_friend })(Friends);**/

