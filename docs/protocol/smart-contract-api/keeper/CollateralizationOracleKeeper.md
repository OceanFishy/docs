# CollateralizationOracleKeeper

a FEI timed minter which only rewards when updating the collateralization oracle

## Functions

### constructor

```solidity
function constructor(
    address _core,
    uint256 _incentive,
    contract ICollateralizationOracleWrapper _collateralizationOracleWrapper
) public
```

constructor for CollateralizationOracleKeeper
        @param _core the Core address to reference
        @param _incentive the incentive amount for calling mint paid in FEI
        @param _collateralizationOracleWrapper the collateralizationOracleWrapper to incentivize updates only
        sets the target to this address and mint amount to 0, relying exclusively on the incentive payment to caller

#### Parameters

| Name | Type | Description |
| :--- | :--- | :---------- |
| `_core` | address |  |
| `_incentive` | uint256 |  |
| `_collateralizationOracleWrapper` | contract ICollateralizationOracleWrapper |  |

### _afterMint

```solidity
function _afterMint() internal
```

