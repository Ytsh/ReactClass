import React from 'react';

// class ChildComponent extends React.Component{
//     constructor (props){
//         super(props);
//     }

//  render(){
//     let val = this.props.message
//     return (
//         <p>{val}</p>
//     )
// }
// }

function PTag({message}){
    let val = message
    return (
        <>
        <p>{val}</p>
        </>
    )
}

export default PTag;