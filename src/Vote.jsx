import React, { useState } from 'react';

export default function Vote() {
  const [contestantName, setContestantName] = useState('');
  const [voteCount, setVoteCount] = useState(1);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // $10 per vote pricing rule
  const PRICE_PER_VOTE = 10;
  const totalAmount = voteCount * PRICE_PER_VOTE;

  // Replace these with your actual tags
  const CASH_APP_TAG = '@RichardProulx427';
  const PAYPAL_TAG = 'dickproulx@hotmail.com';

  const handleOpenPayment = (e) => {
    e.preventDefault();
    setError('');

    if (!contestantName.trim()) {
      setError('Please enter a contestant name.');
      return;
    }
    if (voteCount < 1) {
      setError('You must cast at least 1 vote ($10 minimum).');
      return;
    }

    setIsModalOpen(true);
  };

  const handleConfirmPayment = () => {
    alert(`Thank you! Your vote submission for ${contestantName} (${voteCount} vote(s)) has been logged. We will verify your payment of $${totalAmount}.`);
    setIsModalOpen(false);
    setContestantName('');
    setVoteCount(1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-8">
        
        <h2 className="text-2xl font-bold mb-1 text-center">Pageant Voting Portal</h2>
        <p className="text-gray-400 text-xs text-center mb-6">
          Rate: <span className="text-emerald-400 font-semibold">$10 USD</span> per vote
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleOpenPayment} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Contestant Name
            </label>
            <input
              type="text"
              value={contestantName}
              onChange={(e) => setContestantName(e.target.value)}
              placeholder="e.g., Chris"
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-sm text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Number of Votes <span className="text-gray-500 text-xs">(Min: 1 = $10)</span>
            </label>
            <input
              type="number"
              min="1"
              value={voteCount}
              onChange={(e) => setVoteCount(Math.max(1, parseInt(e.target.value) || 0))}
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-sm text-white"
            />
          </div>

          <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700/60 flex items-center justify-between">
            <span className="text-sm text-gray-400">Total Amount:</span>
            <span className="text-xl font-bold text-emerald-400">${totalAmount}.00 USD</span>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-emerald-600/20 text-sm"
          >
            Proceed to Payment Info
          </button>
        </form>

        {/* Payment Modal with Cash App & PayPal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl max-w-sm w-full p-6 shadow-2xl relative">
              <h3 className="text-lg font-bold mb-1">Send Payment</h3>
              <p className="text-gray-400 text-xs mb-4">
                You are voting for <strong className="text-white">{contestantName}</strong> ({voteCount} vote(s)).
              </p>

              <div className="bg-gray-900 p-4 rounded-xl mb-4 border border-gray-700 text-center">
                <span className="text-gray-400 text-xs block mb-1">Amount to Send</span>
                <span className="text-2xl font-bold text-emerald-400">${totalAmount}.00 USD</span>
              </div>

              {/* Payment Tags Info Box */}
              <div className="space-y-3 mb-6 bg-gray-900/80 p-4 rounded-xl border border-gray-700 text-xs">
                <div>
                  <span className="text-gray-400 block mb-0.5 font-medium">💚 Cash App Tag:</span>
                  <span className="text-white font-mono bg-gray-800 px-2 py-1 rounded block select-all border border-gray-700">
                    {CASH_APP_TAG}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-0.5 font-medium">💙 PayPal Tag / Email:</span>
                  <span className="text-white font-mono bg-gray-800 px-2 py-1 rounded block select-all border border-gray-700">
                    {PAYPAL_TAG}
                  </span>
                </div>
                <p className="text-gray-500 text-[11px] italic mt-2">
                  * Please include the contestant's name in your transfer note, then click confirm below.
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 bg-gray-700 hover:bg-gray-600 text-xs font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmPayment}
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold rounded-lg transition-colors shadow"
                >
                  I Have Paid
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
