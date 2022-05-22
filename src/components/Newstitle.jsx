import React, { Component } from 'react';


export default class Newstitle extends Component {
  render() {

    
    let {title, description, image, newsurl } = this.props;
    return (
        <div className="card my-3" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt="news/image" />
            <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
            <a href={newsurl} className="btn btn-primary">Read More</a>
            </div>
      </div>
    )
  }
}
