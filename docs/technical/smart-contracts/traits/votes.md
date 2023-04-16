---
sidebar_position: 1
---

# Votes

The `Votes` trait is the interface for "what" is the voting power in a DAO.

## Methods
---
### get_votes
 ```rust
 get_votes(&self, account: AccountId, timestamp: Option<Timestamp>) -> Balance;
 ```

Returns the voting power of a given `account` at specified `timestamp` (if applicable).

 <details>
  <summary>Arguments</summary>
  <div>
    <ul>
  <li><b>account</b> - Address of the account for which we query the voting power.</li>
  <li><b>timestamp</b> - Optional Timestamp in miliseconds at which we query the voting power.</li>
</ul>
  </div>
</details>

---
### delegate
 ```rust
 fn delegate(&mut self, delegatee: AccountId) -> Result<(), VotesError>;
 ```
Delegates the voting power of the caller to `delegatee`.

 <details>
  <summary>Arguments</summary>
  <div>
    <ul>
  <li><b>delegatee</b> - Address of the account for which we delegate the voting power.</li>
</ul>
  </div>
</details>

---
### delegates
 ```rust
 fn delegates(&mut self, delegator: AccountId) -> Option<AccountId>;
 ```
Returns the address of of the delegatee of the `delegator`.

<details>
 <summary>Arguments</summary>
 <div>
   <ul>
 <li><b>delegator</b> - Address of the account for which we query the address of the delegatee.</li>
</ul>
  </div>
</details>

---


