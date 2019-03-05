import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

export class UnifyHeaderImage extends React.Component {
    render() {
        const UnifyHeaderRowStyle = {
            paddingTop: "3em",
            backgroundColor: "rgb(250, 250, 250)",
        }
        const UnifyHeaderImageStyle = {
            maxWidth: "70%",
        }
        const UnifyHeaderColStyle = {
            textAlign: "center",
            overflow: "hidden",
            maxHeight: "300px",
            borderBottom: "1px solid #e8e8ea",
        }
        return (
            <Row style={UnifyHeaderRowStyle}>
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