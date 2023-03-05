import React from 'react'
import "./Experience.css"

const Experience = ({position1, position2}) => {
  return (
    <div className='Experience'>
        <h2>Experiences</h2>
        <h3 className='title'>{position2}</h3>
        <h5>at Nichima Precision Engineering Sdn. Bhd., Penang, Malysia</h5>
        <h4>* April 2016 - April 2022</h4>
        <p> I worked as “GOODWAY GCL2BL 2axis CNC Lathe” operator, machinist and programmer. I also worked as 3 axis CNC Milling CINCINNATI, AKIRA-SEIKI operator and machinist.
          I was in charge of a small team of 5-6 people.I learned a lot from that company. I have gained huge experience on industrial culture, how chain of discipline are operated, leadership, team work and mutual co-operation. I worked as “GOODWAY GCL2BL 2axis CNC Lathe” operator, machinist and programmer.I also worked as 3 axis CNC Milling CINCINNATI, AKIRA-SEIKI operator and machinist. I was in charge of a small team of 5-6 people. I learned a lot from that company. I have gained huge experience on industrial culture, how chain of discipline are operated, leadership, team work and mutual co-operation.</p>
        <strong>Skills: CNC Machine · Quality Assurance · Machining · Team Leadership · Lathe · Computer Numerical Control CNC · CNC Manufacturing · CNC Mill · CNC Operation</strong>

        <h3 className='title'>{position1}</h3>
        <h5>at Nichima Precision Engineering Sdn. Bhd., Penang, Malysia</h5>
        <h4>* March 2016 - April 2016</h4>
        <p>Assisted HR manager in preparing payroll and sales department to entry data in database.I also worked in QC department as a QC Inspector.Assisted HR manager in preparing payroll and sales department to entry data in database.I also worked in QC department as a QC Inspector.</p>
        <strong>Skills: Microsoft Word · Microsoft Excel · Data Entry · Computer Literacy · Assistants · Quality Control</strong>
    </div>
  );
}

export default Experience;