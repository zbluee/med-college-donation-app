import React from "react";
import LoadingSpinner from "../../components/loading-spinner/spinner";
import Card from "../../components/card/card";
import './VolunteerOpportunitiesPage.css';


function VolunteerOpportunitiesPage() {
  const volunteerOpportunities = [
    {
        id: 1,
        title: 'Church Volunteer',
        description: 'Join our church volunteer program to serve the community and spread love and kindness.',
        image: 'https://cdn.pixabay.com/photo/2015/10/09/07/12/religious-978837_640.jpg',
        date: 'July 15, 2023',
        location: 'Selam Argiew Mariyam',
      },
    {
      id: 2,
      title: 'Health Education Seminar',
      description: 'Participate in our health education seminar to raise awareness about preventive healthcare.',
      image: 'https://cdn.pixabay.com/photo/2015/01/16/16/50/volunteers-601662_640.jpg', // Replace with the actual image URL
      date: 'August 5, 2023',
      location: 'University Auditorium',
    },
    // Add more volunteer opportunities as needed
  ];

  return (
    <div className="volunteer-opportunities-container">
      <h1 className="volunteer-opportunities-title">Volunteer Opportunities</h1>
      <div className="volunteer-opportunities-list">
        {volunteerOpportunities.length === 0 ? (
          <LoadingSpinner />
        ) : (
          volunteerOpportunities.map(opportunity => (
            <Card
              key={opportunity.id}
              title={opportunity.title}
              description={opportunity.description}
              image={opportunity.image}
              location={opportunity.location}
              date={opportunity.date}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default VolunteerOpportunitiesPage;
