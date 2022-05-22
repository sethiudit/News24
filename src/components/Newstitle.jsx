import React, { Component } from 'react';


export default class Newstitle extends Component {
  
  render() {
    let {title, description, imageurled, newsurl } = this.props;
   
    return (
        <div className="card " style={{width: '18rem'}}>
            <img src={!imageurled?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTigY4Ptx8cwMIslSzTGPytMAue39DsnB05JBDT7mUpR6EC5fFan1m0Tamp845VlXTv6SQ&usqp=CAU":imageurled} className="card-img-top" alt="news/get" />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}....</p>
            <a href={newsurl} className="btn btn-primary">Read More</a>
            </div>
      </div>
    )
  }
}
