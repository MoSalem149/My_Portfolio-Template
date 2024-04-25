//========== Error Page Section Component ==========

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './error.scss';

const ErrorArea = () =>
{
    let navigate = useNavigate();

    const goHome = () =>
    {
        navigate('/');
    };

    return (
        <div className="error-area">
            <div className="error-content text-center">
                <div className="error-num">
                    404
                    <div className="error-num__clip">404</div>
                </div>
                <h2 className='mb- mt-4'>Page Not Found</h2>
                <button className="cmn-btn mt-4" onClick={goHome}>Go back to Home</button>
            </div>
        </div>
    );
}

export default ErrorArea;
