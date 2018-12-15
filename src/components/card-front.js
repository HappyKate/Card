import React, { Component } from 'react';

export default class CardFront extends Component{
    render(){
        return(
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-xs-6">
                            <img src="https://pp.userapi.com/c846522/v846522888/156a46/9YYMROZGInA.jpg"/>
                        </div>
                        <div className="col-xs-6 side-front-content">
                            <h2>Hello</h2>
                            <p>I'm Katerina. I am a novice developer of Ruby ​​on Reals, React.js, html / css.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}