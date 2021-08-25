import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import CustomCard from '../../components/Card/customCard.component';
import InputBox from '../../components/inputBox/inputBox.componenet';
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

const Home = () => {
    let history = useHistory();
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
            sessionStorage.setItem('covid-data',JSON.stringify(response.data))
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
                    <InputBox inputValue={searchable} keyDown={(e) => handleClick(e)} change={(e) => setSearchable(e.target.value)}  />
                    {
                        returnResponseData(responseData)
                    }
                    <br />

                </Col>
                <Col xs={2}></Col>
                {
                    responseData && responseData.length > 0 && <>
                        <Col>
                        <CustomCard variant="warning" Title="Confirmed" Data={responseData[0].confirmed} onClick={e=>history.push(`/description/${e.target.name}`)} />
                           
                        </Col>
                        <Col>
                        <CustomCard  variant="danger" Title="Critical" Data={responseData[0].critical} onClick={e=>history.push(`/description/${e.target.name}`)} />
                        </Col>
                        <Col>
                        <CustomCard variant="secondary" Title="Deaths" Data={responseData[0].deaths} onClick={e=>history.push(`/description/${e.target.name}`)}/>
                            </Col>
                        <Col>
                        <CustomCard  variant="success" Title="Recovered" Data={responseData[0].deaths} onClick={e=>history.push(`/description/${e.target.name}`)}/>
                            </Col>
                    </>
                }

            </Row>

        </Container>

    </>);
}

export default withRouter(Home);


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