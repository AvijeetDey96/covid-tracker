import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
const Home = () => {
    const [searchable, setSearchable] = useState("")
    const [responseData, setResponseData] = useState()
    const handleClick = (e) => {
        if (e.keyCode == 13) {
            console.log(searchable);
            getCovidData()
        }
    }
    const getCovidData = () => {
        var options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/country',
            params: { name: `${searchable}` },
            headers: {
                'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
                'x-rapidapi-key': 'a5f09c23e3mshbef91246228b851p132e37jsn7645aadf1ef6'
            }
        };
        axios.request(options).then(function (response) {
            // console.log('response.data',response.data);
            setResponseData(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }
    const returnResponseData = (data) => {
        if (data && data.length > 0) {
            return <p>{data[0].country}</p>
        }
        if (responseData && responseData.length == 0) {
            return <p>No Data Found</p>
        }

    }
    return (<>
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={2} xs={2}></Col>

                <Col xs={8}>
                    <Form.Control size="lg" value={searchable} placeholder="Search..." type="text" onKeyDown={(e) => handleClick(e)} onChange={(e) => setSearchable(e.target.value)} />
                    {
                        returnResponseData(responseData)
                    }
                    <br />

                </Col>
                <Col xs={2}></Col>
                {
                    responseData && responseData.length > 0 && <>
                        <Col>
                            <Card  >
                                <Card.Body>
                                    <Card.Title>Confirmed</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text className="mb-2 text-muted">
                                        {responseData[0].confirmed}
                                    </Card.Text>
                                    {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card  >
                                <Card.Body>
                                    <Card.Title>Critical</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> {responseData[0].critical}</Card.Subtitle>
                                    {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                                </Card.Body>
                            </Card></Col>
                        <Col>
                            <Card  >
                                <Card.Body>
                                    <Card.Title>Deaths</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> {responseData[0].deaths}</Card.Subtitle>
                                    {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                                </Card.Body>
                            </Card></Col>
                        <Col>
                            <Card  >
                                <Card.Body>
                                    <Card.Title>recovered</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{responseData[0].deaths}</Card.Subtitle>
                                    {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                                </Card.Body>
                            </Card></Col>
                    </>
                }

            </Row>

        </Container>

    </>);
}

export default Home;


// "country":"Italy"
// "code":"IT"
// "confirmed":219070
// "recovered":105186
// "critical":1027
// "deaths":30560
// "latitude":41.87194
// "longitude":12.56738
// "lastChange":"2020-05-10T18:12:02+02:00"
// "lastUpdate":"2020-05-11T04:00:03+02:00"