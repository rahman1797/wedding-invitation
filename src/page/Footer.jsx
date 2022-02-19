import React from 'react';
import { Component } from 'react';

export default class Footer extends Component {

	render(){

		return (
			<footer className="footer mt-5">
				<div className='container'>
					<div className='text-center text-light mt-4'>
						Made with our love <i className="fa-solid fa-heart"></i> Signature by Evita & Rahman
					</div>
				</div>
			</footer>
		  );
	}
};