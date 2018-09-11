import React, { Component } from "react";
import 'flexboxgrid2'
import 'flexboxgrid2/flexboxgrid2.css'
import './Alignment.css'

class Alignment extends Component {
  render() {
    return (
        <div>
            <h1>Alignment</h1>
            <div className="row start-xs">
                <div className="col-xs-6">
                    <div className="align-rect">
                        start
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="row center-xs">
                <div className="col-xs-6">
                    <div className="align-rect">
                        center
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="row end-xs">
                <div className="col-xs-6">
                    <div className="align-rect">
                        end
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="row center-xs end-sm start-lg">
                <div className="col-xs-6">
                    <div className="align-rect">
                        All together now
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="row top-xs">
                <div className="col-xs-6">
                    <div className="align-rect-big">
                        top
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="align-rect">
                        top
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="row middle-xs">
                <div className="col-xs-6">
                    <div className="align-rect-big">
                        middle
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="align-rect">
                        middle
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="row bottom-xs">
                <div className="col-xs-6">
                    <div className="align-rect-big">
                        bottom
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="align-rect">
                        bottom
                    </div>
                </div>
            </div>
            <div className="divider" />
            <h1>Distribution</h1>
            <div className="row around-xs">
                <div className="col-xs-2">
                    <div className="align-rect">
                        around
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="align-rect">
                        around
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="align-rect">
                        around
                    </div>
                </div>
            </div>    
            <div className="divider" />
            <div className="row between-xs">
                <div className="col-xs-2">
                    <div className="align-rect">
                        between
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="align-rect">
                        between
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="align-rect">
                        between
                    </div>
                </div>
            </div>                    
      </div>
    );
  }

}


export default Alignment;