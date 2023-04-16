---
sidebar_position: 1
---

# Types and Data Structures

### ProposalId
```rust
pub type ProposalId = Hash;
```

### ProposalCore
```rust
pub struct ProposalCore {
    pub vote_start: Timestamp,
    pub vote_end: Timestamp,
    pub executed: bool,
    pub canceled: bool,
}
```

### OptionId
```rust
pub type OptionId = u8;
```

### Transaction
```rust
pub struct Transaction {
    /// The `AccountId` of the contract that is called in this transaction.
    pub callee: AccountId,
    /// The selector bytes that identifies the function of the callee that should be called.
    pub selector: [u8; 4],
    /// The SCALE encoded parameters that are passed to the called function.
    pub input: Vec<u8>,
    /// The amount of chain balance that is transferred to the callee.
    pub transferred_value: Balance,
    /// Gas limit for the execution of the call.
    pub gas_limit: u64,
}
```