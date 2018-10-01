import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from "../actions";
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">{book.title}</li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //Return will show up as props in BookList
    return {
        books: state.books
    }
}

//Anything returned will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({selectBook}, dispatch)
}

//Promote BookList from component to container with new dispatch method, selectBook.
//Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);