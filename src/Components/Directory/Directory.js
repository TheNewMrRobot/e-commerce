import React, { Component } from 'react'
import MenuItem from "../Menu-Item/Menu-Item"
import "./directory.scss"

 class Directory extends Component {
    
     constructor(props){
         super();
         this.state = {
             sections: [
                 {
                     title: "HATS",
                     id:1,
                     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                     linkUrl:'hats'
                },
                 {
                     title: "SNEAKERS",
                     id:2,
                     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                     linkUrl:''
                },
                 {
                     title: "JACKETS",
                     id:3,
                     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                     linkUrl:''
                    
                },
                 {
                     title: "MENS",
                     id:4,
                     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                     linkUrl:'',
                     size:"large"
                     
                },
                {
                    title: "WOMENS",
                    id:5,
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size:"large",
                    linkUrl:''
                    
                }
             ]
         }
         
     }
    render() {
        return (
            <div className="directory-menu ">
                {this.state.sections.map(({title,id,imageUrl,size,linkUrl})=> <MenuItem linkUrl={linkUrl} title={title} key={id} imageUrl={imageUrl} size={size}/>)}
            </div>
        )
    }
}


export default Directory;
