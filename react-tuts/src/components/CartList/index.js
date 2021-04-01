import React, { Component } from 'react'
import { connect } from'react-redux'
import { increment,decrement,decrementAysnc } from '../../actions/cart'
class CartList extends Component {
    render() {
        return (
            <table>
              <thead>
                  <tr>
                      <th>商品id</th>
                      <th>商品名称</th>
                      <th>商品价格</th>
                      <th>商品数量</th>
                  </tr>
              </thead>  
              <tbody>
                  {
                      this.props.cartList.map(item =>{
                          return <tr key={item.id}>
                                    <td>{ item.id }</td>
                                    <td>{ item.title }</td>
                                    <td>{ item.price }</td>
                                    <td>
                                        <button onClick={this.props.increment.bind(this,item.id)}>+</button>
                                         <span>{ item.num }</span>
                                        <button onClick={this.props.decrement.bind(this,item.id)}>-</button>
                                        <button onClick={this.props.decrementAysnc.bind(this,item.id)}>等一会</button>
                                    </td>
                                </tr>
                      })
                  }
                  
              </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        cartList: state.cart
    }
}
export default connect(mapStateToProps,{ increment,decrement,decrementAysnc })(CartList)