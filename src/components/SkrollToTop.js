import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const SkrollToTop = () => {
    const { pathname } = useLocation();
    useEffect (() => {
        window.scrollTo(0,0)
    }, [pathname])
    return (
        <div></div>
    );
};

export default SkrollToTop;
