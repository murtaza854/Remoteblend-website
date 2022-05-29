import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { LinkButton } from '../../components';
import './Careers.scss';

function Careers(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleFile = (e) => {
        setFile(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    return (
        <div className='careers'>
            <Container>
            <div className='margin-global-top-8' />
            <Row>
                <img className='build-with-us-img center-horizontal-relative' src='/Illustrations/RB_008.png' alt='Build with us' />
            </Row>
            <div className='margin-global-top-4' />
            <Form>
                <Row className='justify-content-center'>
                    <Form.Group as={Col} md={4} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleName} />
                    </Form.Group>
                    <Form.Group as={Col} md={4} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={email} onChange={handleEmail} />
                    </Form.Group>
                </Row>
                <Row className='justify-content-center'>
                    <Form.Group as={Col} md={8} controlId="formGridFile">
                        <Form.Label>Upload CV</Form.Label>
                        <Form.Control type="file" value={file} onChange={handleFile} />
                    </Form.Group>
                </Row>
                <Row className='justify-content-center'>
                    <Form.Group as={Col} md={8} controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        placeholder='Tell us about yourself and why you want to work with us'
                        as="textarea" rows="10" value={description} onChange={handleDescription} />
                    </Form.Group>
                </Row>
                <Row className='margin-global-top-2'>
                    <Col>
                        <LinkButton to="/" text="Submit" className="gradient-btn" />
                    </Col>
                </Row>
            </Form>
            </Container>
        </div>
    );
}

export default Careers;