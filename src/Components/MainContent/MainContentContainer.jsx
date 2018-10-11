import React, { Component } from 'react';
import {
  Row,
  Col,
  Input,
  InputNumber,
} from 'antd';
import StoresList from './StoresList';
import StoresMap from './StoresMap';
import 'antd/dist/antd.css';
import './MainContentContainer.css';

const SearchInput = Input.Search;

export default class MainContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      minimunValue: 15000,
    };
  }

  render() {
    const {
      minimunValue,
    } = this.state;
    return (
      <div className="content-container">
        <Row gutter={32}>
          <Col span={12} />
          <Col span={12}>
            <p>Faturamento mínimo esperado</p>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <SearchInput
              placeholder="Pesquisa"
              onSearch={value => console.log(value)}
              style={{ width: '100%' }}
              enterButton
            />
          </Col>
          <Col span={12}>
            <InputNumber
              defaultValue={minimunValue}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={value => console.log(value)}
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <StoresList />
          </Col>
          <Col span={12}>
            <StoresMap />
          </Col>
        </Row>
      </div>
    );
  }
}
