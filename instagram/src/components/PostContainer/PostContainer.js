import React from 'react';
//  import CommentSection from './CommentSection/'

function PostContainer(props){
    return(
        <div>
         {props.dummyData.map((data) => {
             return(
                <div>{data.username}</div>

                
                
                
                
             );
         })}   

        </div>
    );
}









export default PostContainer;