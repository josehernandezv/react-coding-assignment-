import React from 'react';
import PropTypes from 'prop-types';
import classes from './Detail.module.scss';


const detail = props => {
    let content = <p>Cargando...</p>;
    if (props.data) {
        content = (
            <>
                <div className={ classes.formControl }>
                    <label htmlFor="propId">Prop ID:</label>
                    <input type="text" id="propId" value={ props.data.propID } readOnly/>
                </div>
                <div className={ classes.formControl }>
                    <label htmlFor="subdivisionCd">Subdivision:</label>
                    <input type="text" id="subdivisionCd" value={ props.data.subdivisionCd } readOnly/>
                </div>
                <div className={ classes.formControl }>
                    <label htmlFor="geoID">Geo ID:</label>
                    <input type="text" id="geoID" value={ props.data.geoID } readOnly/>
                </div>
                <div className={ classes.formControl }>
                    <label htmlFor="reconciledMarket">Reconciled Market:</label>
                    <input type="text" id="reconciledMarket" value={ props.data.reconciledMarket } readOnly/>
                </div>
            </>
        );
    }
    return (
        <div className={ classes.detail }>
            { content }
        </div>
    )
}

detail.propTypes = {
    data: PropTypes.object
}

export default detail;
