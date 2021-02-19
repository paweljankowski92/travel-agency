import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';


class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
  }
  render() {
    const {tripCost, options} = this.props;
    return (
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options} />
        </Col>
      </Row>
    );
  }
}


// const OrderForm =({tripCost, options})=>(
//   <Row>
//     <Col xs={12}>
//       <OrderSummary tripCost={tripCost} options={options}/>
//     </Col>
//   </Row>
// );
//
// OrderForm.propTypes ={
//   tripCost: PropTypes.string,
//   options: PropTypes.object,
// };


export default OrderForm;
