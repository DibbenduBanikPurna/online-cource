import React from 'react';
import {Card} from 'react-bootstrap'
const Cources = (props) => {
    const {name,price}=props.cource
    return (
        <div>
            {
                <Card className="mb-4">
                <Card.Header className="bg-success text-light">Cource-Name: {name}</Card.Header>
                <Card.Body className="bg-dark">
                  <blockquote className="blockquote mb-0">
                    <p className="text-muted">
                     Cource-Fee: ${price}
                    </p>
                    <footer className="blockquote-footer">
                      <button onClick={()=>props.handleAddCource(props.cource)} className="btn btn-warning">Enroll-Now</button>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            }
        </div>
    );
};

export default Cources;