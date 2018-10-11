import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Input,
  InputNumber,
} from 'antd';
import { connect } from 'react-redux';
import StoresList from './StoresList';
import StoresMap from './StoresMap';
import 'antd/dist/antd.css';
import './MainContentContainer.css';

const SearchInput = Input.Search;

class MainContentContainer extends Component {
  static propTypes = {
    storeReducer: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      revenue: PropTypes.number,
    })),
  }

  static defaultProps = {
    storeReducer: [],
  }

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      minimunValue: 15000,
    };
  }

  onChangeSearchValue = (value) => {
    this.setState(prevState => ({
      ...prevState,
      searchValue: value,
    }));
  }

  onChangeMinimunValue = (value) => {
    this.setState(prevState => ({
      ...prevState,
      minimunValue: value,
    }));
  }

  filterStores = () => {
    const {
      searchValue,
    } = this.state;
    const {
      storeReducer,
    } = this.props;
    if (searchValue !== '' && searchValue !== null) {
      return storeReducer.filter((store) => {
        if (store.name.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
        return false;
      });
    }
    return storeReducer;
  }

  render() {
    const {
      minimunValue,
    } = this.state;
    const {
      storeReducer,
    } = this.props;
    return (
      <div className="content-container">
        <Row gutter={32}>
          <Col span={12} />
          <Col span={12}>
            <p>Faturamento mínimo esperado</p>
          </Col>
        </Row>
        <Row gutter={32} className="content-input-row">
          <Col span={12}>
            <SearchInput
              placeholder="Pesquisa"
              onSearch={value => this.onChangeSearchValue(value)}
              style={{ width: '100%' }}
              enterButton
            />
          </Col>
          <Col span={12}>
            <InputNumber
              defaultValue={minimunValue}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={value => this.onChangeMinimunValue(value)}
              style={{ width: '100%' }}
            />
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={12}>
            <StoresList stores={this.filterStores(storeReducer)} />
          </Col>
          <Col span={12}>
            <StoresMap stores={this.filterStores(storeReducer)} minimunValue={minimunValue} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  ({ storeReducer }) => ({
    storeReducer,
  }),
)(MainContentContainer);
