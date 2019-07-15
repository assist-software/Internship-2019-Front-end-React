import React, { Component } from "react";
import "./addmoovie.css";
import { Form, Button } from "react-bootstrap";

class AddMoovie extends Component {
  state = {};
  render() {
    return (
      <div className="container addMovieContainer">
        <div className="col-md-12">
          <div className="row titleRow justify-content-center align-items-center">
            <h1 class="addTitle">Add Moovie</h1>
          </div>
          <Form>
            <div className="row inputRow justify-content-center align-items-center">
              <div className="col-md-6">
                <Form.Group controlId="formBasicTitle">
                  <Form.Text className="text-muted floatLeft">
                    Moovie title
                  </Form.Text>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="formBasicTitle">
                  <Form.Text className="text-muted floatLeft">
                    Trailer URL
                  </Form.Text>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="formBasicTitle">
                  <Form.Text className="text-muted floatLeft">
                    Original source
                  </Form.Text>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="formBasicTitle">
                  <Form.Text className="text-muted floatLeft">
                    Cover URL
                  </Form.Text>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Text className="text-muted floatLeft">
                    Description
                  </Form.Text>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-7">
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Text className="text-muted floatLeft">
                    Category
                  </Form.Text>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-5">
                <Form.Group controlId="formBasicTitle">
                  <Form.Text className="text-muted floatLeft">
                    IMDB Score
                  </Form.Text>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="formBasicTitle">
                  <Form.Text className="text-muted floatLeft">
                    Release date
                  </Form.Text>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
            </div>
          </Form>
          <div className="row titleRow justify-content-center align-items-center">
            <button className="modalAddMoovie">Add moovie</button>
          </div>
          <div className="row justify-content-center align-items-center mt-2">
            <button className="modalCancelAdd">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMoovie;
