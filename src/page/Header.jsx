import React from 'react';
import { Component } from 'react';

import HeaderImage from '../assets/images/headerimage3.jpg'

export default class Header extends Component {

	render(){

		return (
			<header id="home" className="fh5co-cover" role="banner" data-stellar-background-ratio="0.5" style={{ backgroundImage: `url(${HeaderImage})`  }}>
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-md-10 mx-auto col-md-offset-2 text-center">
							<div className="display-t">
								<div className="display-tc animate-box" >
									<h1 className='playball'>Evita & Rahman</h1>
									<h2>We're getting marriage</h2>
									<div className="simply-countdown simply-countdown-one"></div>
									<div className='col-12 mt-3 greeting blur-background mx-auto'>
										<i>Kepada Yth <br />
										Bapak/Ibu/Saudara/i <br />
										</i>
										<strong className='greeting'>{ this.props.name.replace(/-/g,' ')  }</strong> <br />
										di Tempat
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		  );
	}
};