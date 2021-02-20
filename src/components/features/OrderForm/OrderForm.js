import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm =({tripCost, options, setOrderOption}) => (
  <Row>
    {pricing.map(({...option}) => (
      <Col md={4} key={option.id}>
        <OrderOption setOrderOption={setOrderOption} currentValue={options[option.id]} {...option}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes ={
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};


// class OrderForm extends React.Component {
//   static propTypes = {
//     tripCost: PropTypes.string,
//     options: PropTypes.object,
//   }
//   render() {
//     const {tripCost, options} = this.props;
//     return (
//       <Row>
//         <Col xs={12}>
//           <OrderSummary tripCost={tripCost} options={options} />
//         </Col>
//       </Row>
//     );
//   }
// }



export default OrderForm;
