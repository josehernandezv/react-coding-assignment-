import React from 'react'
import PropTypes from 'prop-types'
import classes from './Table.module.scss'

const Table = props => {
    const rows = props.data.map(item => (
        <tr key={ item.propID }>
            <td className={ classes.link } onClick={() => props.onRowClicked(item.propID)}>{ item.propID }</td>
            <td>{ item.ownerName }</td>
            <td>{ item.dbaName }</td>
            <td>{ item.legalDescription }</td>
            <td>{ item.situsStreet }</td>
        </tr>
    ));
    return (
        <table className={ classes.table }>
            <thead>
                <tr>
                    <th>Prop ID</th>
                    <th>Owner Name</th>
                    <th>DBA</th>
                    <th>Legal Description</th>
                    <th>Situs Street</th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    )
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    onRowClicked: PropTypes.func.isRequired
}

export default Table
