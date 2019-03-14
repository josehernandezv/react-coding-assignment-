import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProperties, fetchPropertyById, setProperty } from '../store/actions';
import Table from '../components/Table';
import Modal from '../components/Modal'; 
import Detail from '../components/Detail'; 

export class PropertyListing extends Component {

    state = {
        isModalOpened: false
    }

    componentDidMount() {
        this.props.fetchProperties();
    }

    closeDetail = () => {
        this.setState({ isModalOpened: false });
        this.props.setProperty(null);
    };
    
    openDetail = propID => {
        this.props.fetchPropertyById(propID)
        this.setState({ isModalOpened: true })
    }

    render() {
        return (
            <div>
                <h1>Property Listing</h1>
                <Table 
                    data={ this.props.properties} 
                    onRowClicked={ this.openDetail }
                />
                { this.state.isModalOpened && (
                    <Modal onClose={ this.closeDetail }>
                        <Detail data={ this.props.currentProperty }/>
                    </Modal>
                )}
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
    fetchPropertyById,
    setProperty
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListing)
