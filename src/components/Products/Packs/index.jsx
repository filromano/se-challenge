import './Packs.scss';

import React, { Component } from 'react';

import CartBox from '../CartBox/';

import { setPercentage } from '../../../js/utils';

class Packs extends Component {

  constructor(props){
    super(props)
    this.state = {
      productId: props.productId,
      packs: props.packs,
      selectedPack: 0,
      selected: {
        id: null,
        originalPrice: '',
        currentPrice: '',
        percentage: ''
      }
    }
  }

  componentDidMount() {
    this.setValues();
  }

  setValues = () => {
    const id = this.state.packs[this.state.selectedPack].id;
    const originalPrice = this.state.packs[this.state.selectedPack].original_price;
    const currentPrice = this.state.packs[this.state.selectedPack].current_price;
    const percentage = setPercentage(originalPrice, currentPrice);
    this.setState(state => ({
      selected: {
        ...state.selected,
        id,
        originalPrice,
        currentPrice,
        percentage
      }
    }));
  }
  
  selectPack = (index) => {
    this.setState({...this.state, selectedPack: index}, () => {
      this.setValues();
    });    
  }

  render() {

    const { productId, packs, selectedPack, selected } = this.state;

    const buttons = packs.map((pack, index) => {
      if(pack.status === 'ACTIVE'){
        return (
          <button key={index}
                  className={index === selectedPack ? 'active' : ''}
                  onClick={e => this.selectPack(index)}>
            {pack.unities} unid.
          </button>
        )
      } else {
        return;
      }
    })

    return (
      <div className="packs">
        <div className="box">
          <p>Escolha o seu pack:</p>
          <div className="options">
            {buttons}
          </div>
        </div>
        <div className="prices">
          <span><strong>DESC.:</strong>
            <span className="discount"> {selected.percentage}%</span>
          </span>
          <span><strong>DE:</strong>
            <span className="original-price">
              R$ {selected.originalPrice.toString().replace('.', ',')}
            </span>
          </span>
          <span><strong>POR:</strong>
            <span className="final-price">
              R$ {selected.currentPrice.toString().replace('.', ',')}
            </span>
          </span>
        </div>
        <CartBox productId={productId}
                 packId={selected.id}/>
      </div>
    );
  }
}

export default Packs;
