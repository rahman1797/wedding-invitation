import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import Swal from "sweetalert2"

import HeaderImage from '../assets/images/headerimage.jpg'

function Header() {

	//useParams = untuk mendapatkan parameter dari react router
	//useSelector = untuk mendapatkan state dari redux
	let slug_url = useParams();
	const data = useSelector((state) => state.data.find(obj => (slug_url.name) ? obj.slug_url === slug_url.name : null));

	useEffect(() => {
		if(data.is_vip === "1"){
			Swal.fire({
				icon: 'warning',
				title: 'Kepada Yth, Bapak/Ibu/Saudara/i',
				html: `<h3>${data.nama}</h3> <br/><strong>Khusus tamu VIP harap menunjukkan undangan fisik/digital kepada penerima tamu. Terima kasih</strong>`
			  });
		}
		
	  }, []);
		
	return (
		<header id="home" className="section-cover" role="banner" style={{ backgroundImage: `url(${HeaderImage})`  }}>
			<div className="overlay"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-10 mx-auto col-md-offset-2 text-center">
						<div className="display-t">
							<div className="display-tc" data-aos="fade-up">
								<h1 className='playball'>Evita & Rahman</h1>
								<h2>We're getting marriage</h2>
								<div className='col-12 mt-3 greeting blur-background mx-auto'>
									<i>Kepada Yth <br />
									Bapak/Ibu/Saudara/i <br />
									</i>
									<strong className='greeting'>{ data.nama }</strong> <br />
									di {data.is_vip === '0' ? 'Tempat' : 'VIP' }
								</div>
								{data.is_vip === '0' ? null : <small className='text-light'>*Khusus tamu VIP harap menunjukkan undangan fisik/digital kepada penerima tamu. Terima kasih</small> }

							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		);
	
};

export default Header