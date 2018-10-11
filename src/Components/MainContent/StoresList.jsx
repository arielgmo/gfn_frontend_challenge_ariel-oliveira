import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
} from 'antd';

const getColumns = () => [{
  title: 'Loja',
  dataIndex: 'name',
  key: 'name',
  width: '60%',
  sorter: (value1, value2) => value1.name.localeCompare(value2.name),
}, {
  title: 'Faturamento',
  dataIndex: 'revenue',
  key: 'revenue',
  width: '50%',
  sorter: (value1, value2) => value1.revenue - value2.revenue,
}];

const getData = stores => stores.map((store, index) => ({
  key: index,
  index,
  name: store.name,
  revenue: store.revenue,
}));

const StoresList = (props) => {
  const {
    stores,
  } = props;

  return (
    <Table size="small" columns={getColumns()} dataSource={getData(stores)} />
  );
};

StoresList.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    revenue: PropTypes.number,
  })),
};

StoresList.defaultProps = {
  stores: [],
};

export default StoresList;
