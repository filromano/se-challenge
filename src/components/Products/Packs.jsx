import React, { Component } from 'react';

class Packs extends Component {

  constructor(props){
    super(props)
    this.state = {
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
    const originalPrice = this.state.packs[this.state.selectedPack].original_price;
    const currentPrice = this.state.packs[this.state.selectedPack].current_price;
    const percentage = this.setPercentage(originalPrice, currentPrice);
    this.setState(state => ({
      selected: {
        ...state.selected,
        originalPrice,
        currentPrice,
        percentage
      }
    }));
  }

  setPercentage = (originalPrice, currentPrice) => {
    const difference = originalPrice - currentPrice;
    const discount = difference * 100 / originalPrice;
    return parseInt(discount);
  }

  selectPack = (index) => {
    this.setState({...this.state, selectedPack: index}, () => {
      this.setValues();
    });    
  }

  render() {

    const buttons = this.state.packs.map((pack, index) => {
      let number = [15, 30, 60];
      if(pack.status === 'ACTIVE'){
        return (
          <button key={index}
                  className={index === this.state.selectedPack ? 'active' : ''}
                  onClick={e => this.selectPack(index)}>
            {number[index]} unid.
          </button>
        )
      } else {
        return;
      }
    })

    return (
      <div>
        <div className="packs">
          <p>Escolha o seu pack</p>
          <div className="options">
            {buttons}
          </div>
        </div>
        <div className="prices">
          <span><strong>DESC.:</strong>
            <span className="discount"> {this.state.selected.percentage}%</span>
          </span>
          <span><strong>DE:</strong>
            <span className="original-price">
              R$ {this.state.selected.originalPrice.toString().replace('.', ',')}
            </span>
          </span>
          <span><strong>POR:</strong>
            <span className="final-price">
              R$ {this.state.selected.currentPrice.toString().replace('.', ',')}
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Packs;
