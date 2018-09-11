import React, { Component } from "react";
import 'flexboxgrid2'
import 'flexboxgrid2/flexboxgrid2.css'
import './Responsive.css'

class Responsive extends Component {
  render() {
    return (
      <div>
          <h1>Responsive</h1>
          <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-2">
                  <div className="normal-rect">Responsive</div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-10">
                  <div className="normal-rect">Responsive</div>
              </div>
          </div>
          <div className="divider" />
          <h1>Fluid</h1>
          <div className="row">
              <div className="col-xs-6">
                  <div className="normal-rect">Fluid</div>
              </div>
          </div>
          <div className="divider" />
          <h1>Offsets</h1>
          <div className="row">
              <div className="col-xs-offset-3 col-xs-9">
                  <div className="normal-rect">offset</div>
              </div>
          </div>
          <div className="divider" />
          <h1>Auto Width</h1>
          <div className="row">
              <div className="col-xs">
                  <div className="normal-rect">auto</div>
              </div>
          </div>
          <div className="divider" />
          <h1>Nested Grids</h1>
          <div className="row">
              <div className="col-xs-9">
                  <div className="nest-rect-big">
                      <div className="row">
                          <div className="col-xs-9">
                              <div className="nest-rect-normal">
                                  <div className="row">
                                      <div className="col-xs-6">
                                          <div className="normal-rect">element</div>
                                      </div>
                                      <div className="col-xs-6">
                                          <div className="normal-rect">element</div>
                                      </div>
                                  </div>
                                </div>
                          </div>
                          <div className="col-xs-3">
                              <div className="nest-rect-normal">
                                  <div className="row">
                                      <div className="col-xs-12">
                                          <div className="normal-rect">element</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }

}


export default Responsive;