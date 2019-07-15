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
          <div className="row inputRow justify-content-center align-items-center">
            <div className="col-md-6">
              <Form>
                <Form.Group controlId="formBasicTitle">
                  <Form.Control
                    type="text"
                    placeholder="Enter moovie title"
                    required
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-6">
              <Form>
                <Form.Group controlId="formBasicTitle">
                  <Form.Control type="text" placeholder="Trailer URL" />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <Form>
                <Form.Group controlId="formBasicTitle">
                  <Form.Control type="text" placeholder="Original source" />
                </Form.Group>
              </Form>
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <Form>
                <Form.Group controlId="formBasicTitle">
                  <Form.Control type="text" placeholder="Cover URL" />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Text className="text-muted floatLeft">
                    Description
                  </Form.Text>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form>
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-md-7">
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select">
                    <option>Category</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
            <div className="col-md-5">
              <Form>
                <Form.Group controlId="formBasicTitle">
                  <Form.Control type="text" placeholder="IMDB Score" />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <Form>
                <Form.Group controlId="formBasicTitle">
                  <Form.Control type="text" placeholder="Release date" />
                </Form.Group>
              </Form>
            </div>
          </div>
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
