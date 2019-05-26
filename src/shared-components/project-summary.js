import React from 'react';
import PropTypes from 'prop-types';
import { Image, Row, Col } from 'react-bootstrap';

function ProjectSummaryItem(props) {
  return (
    <div className="project-summary-item">
      <Image src={props.imagePath}></Image>
      <div className="project-summary-title">{props.title}</div>
      <div className="project-summary-text">{props.description}</div>
    </div>
  );
}

export function ProjectSummary(props) {
  return (
    <Row>
      {
        props.summaryData.map(summaryItemData => (
          <ProjectSummaryItem
            imagePath={summaryItemData.imagePath}
            title={summaryItemData.title}
            description={summaryItemData.description}
            key={summaryItemData.title}
          />
        ))
      }
    </Row>
  );
}

ProjectSummary.propTypes = {
  summaryData: PropTypes.array,
};
ProjectSummary.defaultProps = {
  summaryData: [],
};
