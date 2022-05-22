import React, { Component } from 'react'
import Newstitle from './Newstitle';



export default class News extends Component {
    articles=[
        {
            "source": {
            "id": null,
            "name": "Cricbuzz"
            },
            "author": null,
            "title": "Madhevere steers Zimbabwe cricket to emphatic win; hosts take 2-1 lead | Cricbuzz.com - Cricbuzz - Cricbuzz",
            "description": "Zimbabwe bounced back from a heavy defeat at the hands of Namibia on Thursday to deliver an equally emphatic trouncing in the third T20I",
            "url": "https://www.cricbuzz.com/cricket-news/122321/madhevere-steers-zimbabwe-cricket-to-emphatic-win-hosts-take-2-1-lead-cricbuzzcom",
            "urlToImage": "//m.cricbuzz.com/a/img/v1/600x400/i1/c234510/wessley-madhevere-struck-a-career-best-73-not-out-file-photo.jpg",
            "publishedAt": "2022-05-21T18:56:38Z",
            "content": "Zimbabwe bounced back from a heavy defeat at the hands of Namibia on Thursday to deliver an equally emphatic trouncing in the third T20I to once again pull ahead in the five-match series. Wessley Mad… [+1588 chars]"
        },
        {
            "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
            },
            "author": "PTI",
            "title": "IPL 2022, Mumbai Indians vs Delhi Capitals Highlights: RCB seal last playoff berth after MI beat DC by fi - Times of India",
            "description": "Cricket News: Royal Challengers Bangalore sneaked into the play-offs after Mumbai Indians broke Delhi Capitals' heart with a five-wicket win in their last IPL match",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2022-mumbai-indians-vs-delhi-capitals-highlights-rcb-seal-last-playoff-berth-after-mi-beat-dc-by-five-wickets/articleshow/91714866.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-91714864,width-1070,height-580,imgsize-53960,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2022-05-21T18:32:00Z",
            "content": ".@mipaltan win @RCBTweets reach the Playoffs! #MIvDC @faf1307 &amp; Co. join @gujarat_titans, @rajasthanroyals https://t.co/MOlyMr8tev\r\n— IndianPremierLeague (@IPL) 1653156625000"
        },
    ]
    constructor(){
        super();
        this.state={
            articles: this.articles,
            loader:false,
        }
    }
    render(){  
    return (
        
                <div className="container my-3 ">
                    <div className="row">
                        <h2 >NewsZilla- Top Headlines</h2>
                    </div>
                    <div className='row'>
                        {this.state.articles.map((element)=>{
                            return(
                                <div className=' col-md-4' key={element.url}>
                                    <Newstitle title={element.title.slice(0,45)} description={element.description.slice(0,85)} image={element.urlToImage} newsurl={element.url}/>
                                </div>
                            )
                        
                        })}
                    </div>
            </div>
     
    )
  }
}
