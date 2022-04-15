# GaugeLens

a contract to read tokens held in a gauge

## Functions

### constructor

```solidity
function constructor(
    address _gaugeAddress,
    address _stakerAddress
) public
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_gaugeAddress` | address |  |
| `_stakerAddress` | address |  |

### balance

```solidity
function balance() public returns (uint256)
```

returns the amount of tokens staked by stakerAddress in
the gauge gaugeAddress.

### resistantBalanceAndFei

```solidity
function resistantBalanceAndFei() public returns (uint256, uint256)
```

returns the amount of tokens staked by stakerAddress in
the gauge gaugeAddress.
In the case where an LP token between XYZ and FEI is staked in
the gauge, this lens reports the amount of LP tokens staked, not the
underlying amounts of XYZ and FEI tokens held within the LP tokens.
This lens can be coupled with another lens in order to compute the
underlying amounts of FEI and XYZ held inside the LP tokens.

