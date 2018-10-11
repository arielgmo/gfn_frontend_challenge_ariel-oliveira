import React from 'react';
import {
  Row,
  Col,
} from 'antd';
import 'antd/dist/antd.css';
import './HeaderMenu.css';

const headerMenu = () => (
  <Row>
    <Col>
      <p className="header-menu-col">
        Desempenho das Lojas
      </p>
    </Col>
  </Row>
);

export default headerMenu;
