import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
} from 'antd';

const getColumns = () => [{
  title: 'Loja',
  dataIndex: 'name',
  key: 'name',
  align: 'left',
}, {
  title: 'Faturamento',
  dataIndex: 'revenue',
  key: 'revenue',
  align: 'right',
}];

const getData = stores => stores.map((store, index) => ({
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
