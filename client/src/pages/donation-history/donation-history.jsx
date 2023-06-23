import React from 'react';
import Card from '../../components/card/card';
import ErrorMessage from '../../components/error-message/error-message';
import './DonationHistoryPage.css';

function DonationHistoryPage() {
  const donationData = [
    {
      id: 1,
      title: 'Donation 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://media.istockphoto.com/id/184030333/photo/save-money.jpg?s=2048x2048&w=is&k=20&c=sy2aoUqT0QSL50D3my5wvwqFB1xTBm04YqDsUqSYab8=',
      amount: 100,
      date: '2023-05-15',
    },
    {
      id: 2,
      title: 'Donation 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://media.istockphoto.com/id/1130578497/photo/moneybox-on-wooden-table.jpg?s=612x612&w=0&k=20&c=BAFOMd4sQGL2iY5I0eBh0iaAJ8svOrpLHOSPgYyCZ1E=',
      amount: 50,
      date: '2023-05-10',
    },
    {
      id: 3,
      title: 'Donation 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: 'https://media.istockphoto.com/id/1071757792/photo/money-in-glass-jar.jpg?s=2048x2048&w=is&k=20&c=weJaRniInb7sLZFt71nKBnvkqg2_u34BYNZ_GKr4rTc=',
      amount: 200,
      date: '2023-05-05',
    },
  ];

  return (
    <div className="donation-history-container">
      <h2 className="donation-history-title">Donation History</h2>
      {donationData.length > 0 ? (
        <div className="donation-history-list">
          {donationData.map((donation) => (
            <Card
              key={donation.id}
              title={donation.title}
              description={donation.description}
              image={donation.image}
              amount={donation.amount}
              date={donation.date}
            />
          ))}
        </div>
      ) : (
        <ErrorMessage message="No donation history found." />
      )}
    </div>
  );
}

export default DonationHistoryPage;
