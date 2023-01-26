import './CurrencyInput.scss';

import { useState } from 'react';
import NumberFormat from 'react-number-format';

import CarrotIcon from '../assets/images/carrot.svg';
import CheckMarkIcon from '../assets/images/check-mark.svg';
import DIYImg from '../assets/images/DIY.png';
import ETHImg from '../assets/images/ETH.svg';
import { Asset } from '../constants/contracts';
// var NumberFormat = require('react-number-format');

const coins: { [key in Asset]?: { icon: string } } = {
  DIY: {
    icon: DIYImg,
  },
  ETH: {
    icon: ETHImg,
  },
};

const CurrencyInput = ({
  maxValue,
  onAssetChange,
  onChange,
  selectedAsset,
  value,
}: {
  value: string;
  selectedAsset: Asset;
  maxValue?: number;
  onChange: (value: string) => void;
  onAssetChange: (asset: Asset) => void;
}) => {
  const [visibleSelector, setVisibleSelector] = useState(false);

  const selectCoin = (coin: Asset) => {
    if (coin) {
      onAssetChange(coin);
      setVisibleSelector(false);
    }
  };

  return (
    <div className="currency-input">
      <NumberFormat
        fixedDecimalScale
        isNumericString
        allowNegative={false}
        isAllowed={({ floatValue }) =>
          floatValue && maxValue ? floatValue <= maxValue : true
        }
        placeholder="0.00"
        thousandSeparator={true}
        value={value}
        onValueChange={({ value }) => onChange(value)}
      />
      <div
        className="currency-input-symbol"
        onClick={() => setVisibleSelector(true)}
      >
        <img
          alt={selectedAsset}
          className="coin-image"
          src={coins[selectedAsset]?.icon}
        />
        <span>{selectedAsset}</span>
        <img alt="Carrot" className="carrot-icon" src={CarrotIcon} />
      </div>
      {visibleSelector ? (
        <>
          <div
            className="coin-selector-backdrop"
            onClick={() => setVisibleSelector(false)}
          />
          <div className="coin-selector">
            {Object.keys(coins).map((asset, index) => (
              <div
                key={index}
                className={`coin-selector-item ${
                  asset === selectedAsset ? 'selected' : ''
                }`}
                onClick={() => selectCoin(asset as Asset)}
              >
                <img
                  alt={asset}
                  className="coin-image"
                  src={coins[asset as Asset]?.icon}
                />
                <span>{asset}</span>
                <img
                  alt="check mark"
                  className="check-mark"
                  src={CheckMarkIcon}
                />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CurrencyInput;
