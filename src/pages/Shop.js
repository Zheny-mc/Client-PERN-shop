import React from "react";
import { Col, Row } from "react-bootstrap";
import { TypeBar } from "../components/TypeBar";
import { BrandBar } from "../components/BrandBar";
import { DeviceList } from "../components/DeviceList";

const Shop = () => {
    return (
        <div className="container">
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </div>
    )
}

export default Shop;