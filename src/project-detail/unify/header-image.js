import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

export class UnifyHeaderImage extends React.Component {
    render() {
        const UnifyHeaderImageStyle = {
            maxWidth: "70%",
        }
        const UnifyHeaderColStyle = {
            textAlign: "center",
            overflow: "hidden",
            height: "238px",
            borderBottom: "1px solid #e8e8ea",
        }
        return (
            <Row>
                <Col style={UnifyHeaderColStyle} xs={4} md={4}>
                    <Image style={UnifyHeaderImageStyle} src="/images/unify-proto-01.png" />
                </Col>
                <Col style={UnifyHeaderColStyle} xs={4} md={4}>
                    <Image style={UnifyHeaderImageStyle} src="/images/unify-proto-02.png" />
                </Col>
                <Col style={UnifyHeaderColStyle} xs={4} md={4}>
                    <Image style={UnifyHeaderImageStyle} src="/images/unify-proto-03.png" />
                </Col>
            </Row>
        )
    }
}