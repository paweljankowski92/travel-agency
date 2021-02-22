import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import settings from '../../../data/settings';


const sendOrder = (options, tripCost, tripId, tripName, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm =({tripCost, options, tripId, tripName, tripCountry, setOrderOption}) => (
  <Row>
    {pricing.map(({...option}) => (
      <Col md={4} key={option.id}>
        <OrderOption setOrderOption={setOrderOption} currentValue={options[option.id]} {...option}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
      <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, tripCountry)}>Order now!</Button>
    </Col>
  </Row>
);

OrderForm.propTypes ={
  tripId: PropTypes.string,
  tripCountry: PropTypes.string,
  tripName: PropTypes.string,
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
