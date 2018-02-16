/* TODO: change to presentational SFC */
import React from 'react';

// import  SubmitForm from '../../containers/SubmitForm';
import PatientForm from '../../components/PatientForm';

import PropTypes from 'prop-types';


const Jumbo = ({patientName, loading, currentTime, updatePatient, updateTime}) => 
  <div class="options-wthree">
    <div class="container">
		<ul>
			<li>
			<a href=".html" class="opt-grids">
				<div class="icon-agileits-w3layouts">
					<i class="fa fa-calendar-check" aria-hidden="true"></i>
				</div>
				<div class="opt-text-w3layouts">
					<h6>Reporting</h6>
				</div>
			</a>
			</li>
			<li>
			<a href="doctors.html" class="opt-grids">
				<div class="icon-agileits-w3layouts">
					<i class="fa fa-chart-line" aria-hidden="true"></i>
				</div>
				<div class="opt-text-w3layouts">
					<h6>My Progress</h6>
				</div>
			</a>
			</li>
    </ul>
    </div>
  </div>


export default Jumbo;