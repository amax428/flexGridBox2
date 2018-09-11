import React, { Component } from "react";
import 'flexboxgrid2'
import 'flexboxgrid2/flexboxgrid2.css'
import './Reodering.css'

class Reodering extends Component {
  render() {
    return (
        <div>
            <h1>Reodering</h1>
            <div className="row">
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        1
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        2
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        3
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        4
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        5
                    </div>
                </div>                                                
                <div className="col-xs-2 first-xs">
                    <div className="reodering-rect-focus">
                        6
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="row">
                <div className="col-xs-2  last-xs">
                    <div className="reodering-rect-focus">
                        1
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        2
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        3
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        4
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        5
                    </div>
                </div>                                                
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        6
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="row">
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        1
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        2
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        3
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        4
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        5
                    </div>
                </div>                                                
                <div className="col-xs-2 first-xs initial-order-sm">
                    <div className="reodering-rect-focus">
                        6
                    </div>
                </div>
            </div>
            <div className="divider" />
            <h1>Reversing</h1>
            <div className="row reverse">
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        1
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        2
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        3
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        4
                    </div>
                </div>
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        5
                    </div>
                </div>                                                
                <div className="col-xs-2">
                    <div className="reodering-rect">
                        6
                    </div>
                </div>
            </div>
            <h1>Hiding</h1>
            <div className="row">
                <div className="col-xs">
                    <div className="hidden-xs">
                        <div className="reodering-rect">
                            xs
                        </div>
                    </div>
                </div>
                <div className="col-xs">
                    <div className="hidden-sm">
                        <div className="reodering-rect">
                            sm
                        </div>
                    </div>
                </div>
                <div className="col-xs">
                    <div className="hidden-md">
                        <div className="reodering-rect">
                            md
                        </div>
                    </div>
                </div>
                <div className="col-xs">
                    <div className="hidden-lg">
                        <div className="reodering-rect">
                            lg
                        </div>
                    </div>
                </div>
                <div className="col-xs">
                    <div className="hidden-xl">
                         <div className="reodering-rect">
                            xl
                        </div>
                    </div>
                </div>
            </div>
                                        
      </div>
    );
  }

}


export default Reodering;