import React, { Component } from 'react'
import Note from './Note'
import '../main/App.css'
import '../main/board.css'

export default class Board extends Component{

  //------------Contstuctor---------------------------------------------------
  constructor(){
    super();

    this.state = {
      notes: [
        { id: 0, note: "Hello to me"},
        { id: 1, note: "Hello to you"},
        { id: 2, note: "Hello hahah"},
        { id: 3, note: "Hello sd"},
      ]
    }
  }
  //----------------------End Contstuctor-------------------------------------


  update(newText, id){
    var notes = this.state.notes.map(
      note => (note.id !==id) ? note : { ...note, note:newText}
    )
    this.setState({notes});
  }
  
  remove(id){
    var notes = this.state.notes.filter(note => note.id !== id )
    this.setState({notes});
  }
  eachNote(note){
    return (
      this.state.notes.map( note =>
        <Note key={note.id} id={note.id} onChange={this.update.bind(this)} onRemove={this.remove.bind(this)}>
          {note.note}
        </Note>
      )
    )
  }

  render() {
    return (
      <div className='board'>
        {this.eachNote(this.state.notes)}
      </div>
    );
  }

}

Board.propTypes = {
  count : function(props, propName){
    if (typeof props[propName] !== "number"){
      return new Error("the count must be a number");
    }
  }
}

Board.defaultProps = {
  count : 0,
}
