import React, { Component } from "react";
import "./history.css";
import Winner from "./winner/winner";
import Button from "@material-ui/core/Button";

class History extends Component {
  state = {};
  list = [1, 1];
  render() {
    return (
      <div className="container">
        <div className="col-md-12 mt-5">
          <a href="about-event">
            <div className="historyEventImg">
              <img
                className="historyEventComponent"
                alt="event"
                src={require("../../assets/event.png")}
              />
              <button className="historyDate">
                20 <span className="dateSpan">SEP</span>
              </button>

              <h3 className="historyEventTitle">Summer Four Cross</h3>
              <h5 className="historyEventDate">30 Septembrie | 08:00</h5>
            </div>
          </a>
          <div className="row">
            <div className="col-md-6">
              <h1 className="historyLeft">Timp in cursa</h1>
            </div>
            <div className="col-md-6">
              <h1 className="historyRight">97 minute</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h1 className="historyLeft">Castigatori:</h1>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              {this.list.map((item, index) => {
                return <Winner key={index} />;
              })}
            </div>
          </div>
        </div>
        <div className="row my-5 rowFinish">
          <Button
            variant="contained"
            color="primary"
            className="historySubmitFinish"
            data-toggle="modal"
            data-target="#finishModal"
          >
            FINALIZEAZA CURSA
          </Button>
          <div className="modal fade" id="finishModal" role="dialog">
            <div className="modal-dialog finishDialog">
              <div className="modal-content finishContent">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <p className="textModal">
                    Vei opri trackingul necesar pentru competitie. Esti sigur?
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="cancelModal"
                    data-dismiss="modal"
                  >
                    NU
                  </button>
                  <button
                    type="button"
                    className="finishCourseModal"
                    data-dismiss="modal"
                  >
                    DA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
