---
sidebar_position: 2
---

# Governor

The `Governor` trait is the core abstraction for the basic governance in a DAO. `Governor` extends `Votes` and `openbrush::contracts::access_control::AccessControl`traits.

## Methods
---
### hash_proposal
 ```rust
 fn hash_proposal(
        &self,
        description: String,
        transactions: Vec<Transaction>,
        salt: [u8; 32],
    ) -> ProposalId;
 ```
Returns a unique hash of a proposal.

<details>
  <summary>Arguments</summary>
  <div>
    <ul>
  <li><b>description</b> - Description of the proposal.</li>
  <li><b>transactions</b> - List of transactions to be executed if the proposal is successful.</li>
  <li><b>salt</b> - Random bytes used as a salt for hashing algorithm.</li>
</ul>
  </div>
</details>


---
### propose

 ```rust
fn propose(
        &mut self,
        voting_options: u8,
        description: String,
        transactions: Vec<Transaction>,
        salt: [u8; 32],
    ) -> Result<ProposalId, GovernorError>;
 ```
Creates a new proposal.

<details>
  <summary>Arguments</summary>
  <div>
    <ul>
  <li><b>voting_options</b> - Number of voting options (must be at least 1).</li>
  <li><b>description</b> - Description of the proposal.</li>
  <li><b>transactions</b> - List of transactions to be executed if the proposal is successful.</li>
  <li><b>salt</b> - Random bytes used as a salt for hashing algorithm.</li>
</ul>
  </div>
</details>

---
### cast_vote
 ```rust
fn cast_vote(&mut self, propsal_id: ProposalId, option: u8) -> Result<(),GovernorError>;
 ```
Casts a vote on a specified proposal.

<details>
  <summary>Arguments</summary>
  <div>
    <ul>
  <li><b>propsal_id</b> - Unique proposal id (hash).</li>
  <li><b>option</b> - Index of the voting option.</li>
</ul>
  </div>
</details>

---
### execute
 ```rust
fn execute(
        &mut self,
        description_hash: Hash,
        transactions: Vec<Transaction>,
        salt: [u8;32]
    ) -> Result<(), GovernorError>;
 ```
Executes Transactions of a successful proposal.

<details>
  <summary>Arguments</summary>
  <div>
    <ul>
  <li><b>description_hash</b> - Hash of the description of the proposal.</li>
  <li><b>transactions</b> - List of transactions to be executed if the proposal is successful.</li>
  <li><b>salt</b> - Random bytes used as a salt for hashing algorithm.</li>
</ul>
  </div>
</details>

---


