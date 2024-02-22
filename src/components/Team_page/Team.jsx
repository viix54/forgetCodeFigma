import React from 'react';

import './team.scss';
import { crew_data } from './crew_data';

const crewMember = (member, index) => {
  return (
    <section key={member + index}>
      <img src={`../../src/assets/crew_members/${member.photo}`} alt={`Crew member ${index + 1}`} />
      <h1>{member.firstName + ' ' + member.secondName}</h1>
      <span>{member.work_position}</span>
      <div className="linksToMember">
        {member.links.map((link) => (
          <div key={member.firstName + ' ' + member.secondName + ' ' + link}>{link}</div>
        ))}
      </div>
    </section>
  );
};

export const Team = () => {
  return (
    <div className="team_container">
      <article>
        <header>
          <h1>Startup Crew</h1>
          <p>
            The most important part of the Startup Framework is the samples. The samples form a set
            of 25 usable pages you can use as is or you can add new blocks from UI Kit.
          </p>
        </header>
        <section className="crew_member_container">
          {crew_data.map((member, index) => crewMember(member, index))}
        </section>
      </article>
    </div>
  );
};
