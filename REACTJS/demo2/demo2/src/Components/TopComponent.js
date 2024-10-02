import React, { Component } from "react";

class TopComponent extends Component {
  render() {
    //Nhận lại dữ liệu
    let v_dataFromAppToTopProps = this.props.dataFromAppToTopProps;
    console.log("v_dataFromAppToTopProps: ", v_dataFromAppToTopProps);

    return (
      <>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Component TOP</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button type="button" className="btn btn-danger">
                      Sent Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TopComponent;
