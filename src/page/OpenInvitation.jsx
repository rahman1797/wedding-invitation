import React from 'react';
import './style/OpenInvitation.css';

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import { Helmet } from 'react-helmet';

function OpenInvitation() {

    const { name } = useParams();

    return (
        <header id='invitation' className='d-flex'>
            <div className="container m-auto">
                <div className="row">
                    <div className="col-md-8 mx-auto col-md-offset-2 text-center">
                        <div className="animate-box " data-animate-effect="fadeIn">
                            <div className='row'>
                                <div className='col-12'>
                                    <img className='img-logo' src='../assets/images/love-1.png' alt='love-1' />
                                </div>

                                <div className='col-8 blur-background'>
                                    <h3 className='madurai-invitation'>You're invited to our wedding</h3>
                                </div>
                                
                                <div className='col-12 mt-4'>
                                    <h1 className='playball-invitation'>Evita & Rahman</h1>
                                </div>
                                
                                <div className='col-12'>
                                    <h1 className='madurai-invitation mb-5'>13 March 2022</h1>
                                </div>          
                                
                                <div className='col-12'>
                                    <Link to={"/" + name + "/opened"} className="btn btn-default btn-sm mx-auto">Open Invitation</Link>
                                </div>

                            </div>                      

                        </div>
                    </div>
                </div>
            </div>
            {/* <Helmet>
                <script src="assets/js/main.js"></script>
            </Helmet> */}
        </header>
        // <header id="fh5co-header" className="fh5co-cover" role="banner" data-stellar-background-ratio="1">
        // 	<div className="overlay"></div>
        // 	<div className="container">
        // 		<div className="row">
        // 			<div className="col-md-8 col-md-offset-2 text-center">
        // 				<div className="display-t">
        // 					<div className="display-tc animate-box" data-animate-effect="fadeIn">
        // 						<h1>You're invited to our wedding</h1>
        // 						<h2>Kami akan menikah</h2>
        // 						<div className="simply-countdown simply-countdown-one"></div>
                                
        // 						<p><a href="#" className="btn btn-default btn-sm">Simpan tanggal</a></p>
        // 					</div>
        // 				</div>
        // 			</div>
        // 		</div>
        // 	</div>
        // </header>
    );
}

export default OpenInvitation;