import React from "react";
function Image(props){
    return (
        <div >

        <img src={props.src} className="imgsearch" alt=""/ >
        {/* <button></button> */}
        </div>
    )
}

// class Image extends React.Component{
//     render(){
//         return (
//             <img src={this.props.src}/>
//         )
//     }
// }

export default Image;