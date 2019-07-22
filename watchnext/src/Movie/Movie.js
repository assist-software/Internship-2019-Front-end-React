import React from 'react';
import '../Movie/movie.css';


class Movie extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return (
          <div id="moovie">
              <div id="containermov">
                  <div id="left">
                        <img id="imgmov" alt="imgmov" src={require('./image.png')}/>
                        <img id="playbut" alt="" src={require('./playbut.png')}/>
                        <a href="#" id="playt">Play Trailer</a>
                        <div id="source">
                            <a href="imdb.com" id="p">See orginal content</a>
                        </div>
                  </div>
                  <div id="right"> 
                         <div id="title">
                            <h1>The Hustle <img id="imdb" alt="imdb" src={require('./imdb.png')}/></h1>
                            
                          </div>
                          <div id="genmov"><p>Comedy • Crime • 1h 33min</p></div>
                          <div id="descr">
                              <p>Josephine Chesterfield is a glamorous, seductive British woman who has a penchant for defrauding gullible men out of their money.</p>
                              <p> Into her well-ordered, meticulous world comes Penny Rust, a cunning and fun-loving Australian woman who lives to swindle unsuspecting marks. Despite their different methods, the two grifters soon join forces for the ultimate score -- a young and naive tech billionaire in the South of France.</p></div>
                          <div><button id="addwatchmov" >Add to watchlist</button></div>
                            <div id="bott">
                                <div id="staff">
                                    <div>
                                         <p id="st">Directors</p>
                                         <p id="dr">Chris Addison</p>
                                    </div>
                                    <div>
                                         <p id="stw">Writers</p>
                                         <p id="drw">Stanley Shapiro (screenplay by), Paul Henning (screenplay by) <span>•</span> <a id="stafff" href="">5 more credits</a></p>
                                    </div>
                                    <div>
                                         <p id="sts">Stars</p>
                                         <p id="drs">Anne Hathaway, Rebel Wilson, Alex Sharp, Timothy Simons <span>•</span> <a id="stafff" href="">See full cast & crew</a></p>
                                    </div>
                                   
                                  
                                </div>
                            </div>
                 </div>
                 </div>
                    <div id="containerfoto">
                        <div id="fotto">
                            <h1>Photos</h1>
                            <div id="poze">
                                <div id="poza1"><img id="img1" alt="imgmov" src={require('./image1.png')}/></div>
                                <div id="poza2"><img id="img2" alt="imgmov" src={require('./image2.png')}/></div>
                                <div id="poza3"><img id="img3" alt="imgmov" src={require('./image3.png')}/></div>
                                <div id="poza4"><img id="img4" alt="imgmov" src={require('./image4.png')}/></div>
                                <div id="poza5"><img id="img5" alt="imgmov" src={require('./image5.png')}/></div>
                                <div id="poza6"><img id="img6" alt="imgmov" src={require('./image6.png')}/></div>
                            </div>
                        </div>
                    </div>
                 </div>
        )    
    }
}

export default Movie
