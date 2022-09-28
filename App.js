import React from 'react';
import AccountContainer from './AccountContainer';

function App() {
  function handleOnSearch(search, setTransaction) {
    setTransaction((transactions) => {
      transactions.filter((transaction) =>
        transaction.description.includes(search)
      );
    });
  }

  return (
    <div className='ui raised segment'>
      <div className='ui segment violet inverted'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      {/* <AddTransactionForm onSubmission={updateOnSubmission} /> */}
      <AccountContainer handleSearch={handleOnSearch} />
    </div>
  );
}

export default App;
