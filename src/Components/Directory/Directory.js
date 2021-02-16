import React from 'react'
import MenuItem from "../Menu-Item/Menu-Item"
import "./directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../Redux/Directory/selectDirectory';


 const Directory=({sections}) => {
        return (
            <div className="directory-menu ">
                {sections.map(({title,id,imageUrl,size,linkUrl})=> <MenuItem linkUrl={linkUrl} title={title} key={id} imageUrl={imageUrl} size={size}/>)}
            </div>
        )
    }


    const mapStateToProps = createStructuredSelector({
        sections: selectDirectorySections
    })

export default connect( mapStateToProps)(Directory);
