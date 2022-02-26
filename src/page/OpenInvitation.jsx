import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { Link, useParams, useNavigate } from "react-router-dom";

import './style/OpenInvitation.css';
import icon from '../assets/images/love-1.png'

function OpenInvitation() {

    const { name } = useParams();

    let slug_url = useParams();
	const data = useSelector((state) => state.data.find(obj => (slug_url.name) ? obj.slug_url === slug_url.name : null));
  
    let navigate = useNavigate();

    useEffect(() => {
        if(typeof data === 'undefined'){
            return navigate(`/url-invalid`);
        } 
    },[]);

    const Dispatch = useDispatch();

    const OpenInvitation = () => {
        Dispatch({
            type: 'OPEN_INVITATION'  
        });
    };

    return (
        <header id='invitation' className='d-flex'>
            <div className="container m-auto">
                <div className="row">
                    <div className="col-md-8 mx-auto col-md-offset-2 text-center">
                        <div data-aos="flip-left" data-aos-duration="1500">
                            <div className='row'>
                                <div className='col-12'>
                                    <img className='img-logo' src={icon} alt='love-1' />
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
                                    <Link to={"/" + name + "/opened"} className="btn btn-sm mx-auto btn-slide-pink" onClick={ OpenInvitation }><i className="fa-solid fa-envelope-open"></i> Open Invitation</Link>
                                </div>

                            </div>                      

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default OpenInvitation;