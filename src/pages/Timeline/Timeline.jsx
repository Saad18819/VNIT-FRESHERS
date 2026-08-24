import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Timeline.css';

const Timeline = () => {
  const events = [
    {
      id: 1,
      date: '26th August 2026',
      title: 'Onam',
      description: 'Festival celebration.'
    },
    {
      id: 2,
      date: '29th August 2026',
      title: 'Cultnite',
      description: 'Welcome event for new students with performances and introductions.'
    },
    {
      id: 3,
      date: '14th - 25th September 2026',
      title: 'Ganesh Chaturthi',
      description: 'Ganesh Chaturthi festival celebrations.'
    },
    {
      id: 4,
      date: '15th September 2026',
      title: 'Convocation',
      description: 'Annual convocation ceremony for graduating students.'
    },
    {
      id: 5,
      date: '1st Oct - 10th Oct 2026',
      title: 'Mid Semester Examinations',
      description: 'First major exams of the semester - prepare well!'
    },
    {
      id: 6,
      date: '18th October 2026',
      title: 'Freshers Event',
      description: 'Set of events and performances for freshers.'
    },
    {
      id: 7,
      date: 'October',
      title: 'Aarohi-26',
      description: 'The Official Cultural festival of VNIT Nagpur.'
    },
    {
      id: 8,
      date: '8th November 2026',
      title: 'Diwali (Holiday)',
      description: 'Festival of lights holiday break.'
    },
    {
      id: 9,
      date: '7th Dec - 15th Dec 2026',
      title: 'End Semester Examinations',
      description: 'Final exams for the semester - study hard!'
    },
    {
      id: 10,
      date: '16th December 2026',
      title: 'Winter Holiday',
      description: 'Winter holiday break.'
    },
    {
      id: 11,
      date: 'January 2027',
      title: 'Department Gathering',
      description: 'Department-specific events and networking opportunities.'
    },
    {
      id: 12,
      date: '19th February 2027',
      title: 'Shiv Jayanti',
      description: 'Chhatrapati Shivaji Maharaj Jayanti celebration.'
    }
  ];

  return (
    <div className="timeline-page">
      <section className="timeline-section">
        <div className="container">
          <SectionTitle 
            title="Academic Calendar 2026-27" 
            subtitle="Major Events and Holidays" 
          />
          <div className="timeline-container">
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                data-aos="fade-up"
              >
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;