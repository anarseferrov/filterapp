import React, { Component } from 'react'
import './list.css'
import PropTypes from 'prop-types'

class List extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired
    }
    state = {
        filterText: " "
    }
    onChangeFilterText = (e) => {
        this.setState({
            filterText: e.target.value
        });
    }
    render() {
        const filteredContacts = this.props.contacts.filter(
            contact=>{
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        )
        return (
            <div className={"listArea"}>
                <input name="filter" id="filter" placeholder={"Filter by name or phone"} value={this.state.filterText} onChange={this.onChangeFilterText} />
                <ul className={"list"}>
                    {filteredContacts.map(contact =>
                        <li key={contact.id}>
                            <span className={"name"}>{contact.name}</span>
                            <span className={"phone"}>{contact.phone}</span>
                            <span className={"clearfix"}></span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default List;