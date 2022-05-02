import {React, useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import ErrorPage from './ErrorPage';
import Home from './Home'
import Place from './Place'

export const PageRender = () => {

    let { pageId } = useParams();
    let { route } = useParams();

    console.log(route);

    switch (route) {
        case 'place':
            console.log('1');
            return(
            <Place />)
        case 'info':
            console.log('2');
            return(
            <Home />)
        case undefined:
            console.log('3');
            return(
            <Home />)
        default:
            console.log('4');
            return(
            <ErrorPage />)
    }

    // if (pageId==null) {
    //     return (
    //         <Home />
    //     )
    // } else {
    //     return (
    //         <Place />
    //     )
    // }
}
