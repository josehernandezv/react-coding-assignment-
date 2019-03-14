import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProperties, fetchPropertyById } from '../store/actions';

export class PropertyListing extends Component {

    componentDidMount() {
        this.props.fetchProperties();
    }

    openDetail = propID => {
        this.props.fetchPropertyById(propID)
    }

    render() {
        return (
            <div>
                <h1>Property Listing</h1>
                <ul>
                    { this.props.properties.map(item => (
                        <li key={ item.propID } onClick={ () => this.openDetail(item.propID) }>{ item.propID }</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    properties: state.properties.properties,
    currentProperty: state.properties.currentProperty
})

const mapDispatchToProps = {
    fetchProperties,
    fetchPropertyById
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListing)
