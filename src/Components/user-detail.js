import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function UserDetail({record}) {
	return (
			<div class="container">
				<div class="row">
					<div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
						<div class="well profile">
							<div class="col-sm-12">
								<div class="col-xs-12 col-sm-8">
									<h2>{record.name}</h2>
									<p><strong>About: </strong> {record.about} </p>
									<p><strong>Hobbies: </strong> {record.hobby} </p>
									<p> 
										<strong>Skills: </strong>
										{record.skills ? record.skills.map((skill,id) => <span key={id} className="tags"> {skill}</span>) : ''}
									</p>
								</div>
								<div class="col-xs-12 col-sm-4 text-center">
									<figure>
										<img src="logo192.png" alt="" class="img-circle img-responsive"/>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}


