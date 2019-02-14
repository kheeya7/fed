import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import UnifyProto01 from '../unify/unify-proto-01.png'
import UnifyProto02 from '../unify/unify-proto-02.png'
import UnifyProto03 from '../unify/unify-proto-03.png'

export default class UnifyHeaderImage extends React.Component {
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
                <col style={UnifyHeaderColStyle} xs={4} md={4}>
                    <Image style={UnifyHeaderImageStyle} src={UnifyProto01} />
                </col>
                <col style={UnifyHeaderColStyle} xs={4} md={4}>
                    <Image style={UnifyHeaderImageStyle} src={UnifyProto02} />
                </col>
                <col style={UnifyHeaderColStyle} xs={4} md={4}>
                    <Image style={UnifyHeaderImageStyle} src={UnifyProto03} />
                </col>
            </Row>
        )
    }
}