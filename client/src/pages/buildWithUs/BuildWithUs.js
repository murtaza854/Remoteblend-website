import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { Heading3, LinkButton, ParaText2 } from '../../components';
import './BuildWithUs.scss';

function BuildWithUs(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [mission, setMission] = useState([
        {
            text: 'Web Development',
            class: ''
        },
        {
            text: 'Mobile Development',
            class: ''
        },
        {
            text: 'Data Engineering',
            class: ''
        },
        {
            text: 'Software Integration',
            class: ''
        },
        {
            text: 'DevOps & Infrastructure',
            class: ''
        },
        {
            text: 'Machine Learning',
            class: ''
        },
        {
            text: 'Other',
            class: ''
        }
    ]);

    const [skills, setSkills] = useState([
        {
            text: 'React JS',
            class: ''
        },
        {
            text: 'Angular JS',
            class: ''
        },
        {
            text: 'Node JS',
            class: ''
        },
        {
            text: 'SQL',
            class: ''
        },
        {
            text: 'NoSQL',
            class: ''
        },
        {
            text: 'AWS',
            class: ''
        },
        {
            text: 'C#',
            class: ''
        },
    ]);

    const [numberOfPeople, setNumberOfPeople] = useState([
        {
            text: '2',
            class: ''
        },
        {
            text: '3',
            class: ''
        },
        {
            text: '4',
            class: ''
        },
        {
            text: '5',
            class: ''
        },
        {
            text: '6',
            class: ''
        },
        {
            text: '7',
            class: ''
        },
        {
            text: 'I don\'t know',
            class: ''
        }
    ]);

    const [company, setCompany] = useState('');
    const [industry, setIndustry] = useState('');
    const [location, setLocation] = useState('');
    const [noOfEmployees, setNoOfEmployees] = useState('');
    const [noOfSoftwareEngineers, setNoOfSoftwareEngineers] = useState('');

    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleMission = (e, index) => {
        const newMissions = [...mission];
        if (newMissions[index].class === '') {
            newMissions[index].class = 'active-gray-back';
        } else {
            newMissions[index].class = '';
        }
        setMission(newMissions);
    };

    const handleSkills = (e, index) => {
        const newSkills = [...skills];
        if (newSkills[index].class === '') {
            newSkills[index].class = 'active-gray-back';
        } else {
            newSkills[index].class = '';
        }
        setSkills(newSkills);
    };

    const handlePeople = (e, index) => {
        const newPeople = [...numberOfPeople];
        newPeople.forEach(item => {
            item.class = '';
        });
        newPeople[index].class = 'active-gray-back';
        setNumberOfPeople(newPeople);
    };

    const handleCompany = (e) => {
        setCompany(e.target.value);
    };

    const handleIndustry = (e) => {
        setIndustry(e.target.value);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    };

    const handleNoOfEmployees = (e) => {
        setNoOfEmployees(e.target.value);
    };

    const handleNoOfSoftwareEngineers = (e) => {
        setNoOfSoftwareEngineers(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleDesignation = (e) => {
        setDesignation(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    return (
        <Container className='build-with-us'>
            <div className='margin-global-top-8' />
            <Row>
                <img className='build-with-us-img center-horizontal-relative' src='/Illustrations/RB_007.png' alt='Build with us' />
            </Row>
            <div className='margin-global-top-4' />
            <Form>
                <Row>
                    <Col>
                        <Heading3
                            firstLine='What can we help you with?'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ParaText2
                            firstLine='Please select an option'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='form-row-choose'>
                        {mission.map((item, index) => (
                            <div className={`gray-back ${item.class}`} onClick={_ => handleMission(_, index)} key={index}>
                                {item.text}
                            </div>
                        ))}
                    </Col>
                </Row>
                <div className='margin-global-top-4' />
                <Row>
                    <Col>
                        <Heading3
                            firstLine='What skills are you looking for?'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ParaText2
                            firstLine='Please select an option'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='form-row-choose'>
                        {skills.map((item, index) => (
                            <div className={`gray-back ${item.class}`} onClick={_ => handleSkills(_, index)} key={index}>
                                {item.text}
                            </div>
                        ))}
                    </Col>
                </Row>
                <div className='margin-global-top-4' />
                <Row>
                    <Col>
                        <Heading3
                            firstLine='How big of a team are you looking for?'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ParaText2
                            firstLine='A team can be as small as 2 people or as big as 7 people'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='form-row-choose'>
                        {numberOfPeople.map((item, index) => (
                            <div className={`gray-back ${item.class}`} onClick={_ => handlePeople(_, index)} key={index}>
                                {item.text}
                            </div>
                        ))}
                    </Col>
                </Row>
                <div className='margin-global-top-4' />
                <Row>
                    <Col>
                        <Heading3
                            firstLine='Tell us about your company'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ParaText2
                            firstLine='Please enter all the details'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Form.Group as={Col} md={8} controlId="formGridCompany">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" value={company} onChange={handleCompany} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md={4} controlId="formGridIndustry">
                        <Form.Label>Industry</Form.Label>
                        <Form.Control type="text" value={industry} onChange={handleIndustry} />
                    </Form.Group>
                    <Form.Group as={Col} md={4} controlId="formGridLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" value={location} onChange={handleLocation} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md={4} controlId="formGridNoOfEmployees">
                        <Form.Label>No. of Employees</Form.Label>
                        <Form.Select value={noOfEmployees} onChange={handleNoOfEmployees}>
                            <option>-</option>
                            <option value="1 - 9">1 - 9</option>
                            <option value="10 - 49">10 - 49</option>
                            <option value="50 - 99">50 - 99</option>
                            <option value="100 - 249">100 - 249</option>
                            <option value="250 or more">250 or more</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md={4} controlId="formGridNoOfSoftwareEngineers">
                        <Form.Label>No. of Software Engineers</Form.Label>
                        <Form.Select value={noOfSoftwareEngineers} onChange={handleNoOfSoftwareEngineers}>
                            <option>-</option>
                            <option value="1 - 9">1 - 9</option>
                            <option value="10 - 49">10 - 49</option>
                            <option value="50 - 99">50 - 99</option>
                            <option value="100 - 249">100 - 249</option>
                            <option value="250 or more">250 or more</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <div className='margin-global-top-4' />
                <Row>
                    <Col>
                        <Heading3
                            firstLine='Tell us about yourself'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ParaText2
                            firstLine='Please enter all the details'
                            seconeLine=''
                            thirdLine=''
                            fourthLine=''
                            className=""
                        />
                    </Col>
                </Row>
                <Row>
                    <Form.Group as={Col} md={4} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleName} />
                    </Form.Group>
                    <Form.Group as={Col} md={4} controlId="formGridDesignation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" value={designation} onChange={handleDesignation} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md={4} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleEmail} />
                    </Form.Group>
                    <Form.Group as={Col} md={4} controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" value={phone} onChange={handlePhone} />
                    </Form.Group>
                </Row>
                <Row className='margin-global-top-2'>
                    <Col>
                        <LinkButton to="/" text="Submit" className="gradient-btn" />
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default BuildWithUs;