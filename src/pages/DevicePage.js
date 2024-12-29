import React, { useContext } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import {Context} from '../index';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const {device} = useContext(Context);
    const {img, name, price, rating} = device.devices[0];
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12 мп'},
        {id: 3, title: 'Процессор', description: 'Пентиум 3'},
        {id: 4, title: 'Кол-во ядер', description: '2'},
        {id: 5, title: 'Акумулятор', description: '4000'},
    ]

    return (
        <Container>
            <Row className="mt-5">
                <Col md={4}>
                    <Image width={300} height={300} src={img}/>
                </Col>
                
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, 
                                    width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {rating}
                        </div>
                    </Row>
                </Col>
                
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    > 
                        <h3>{price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map( (info, index) => 
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    )
}

export default DevicePage;