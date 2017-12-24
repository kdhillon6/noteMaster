import React, { Component } from 'react'
import Delete from 'react-icons/lib/ti/delete'
import Save from 'react-icons/lib/fa/floppy-o'
import Edit from 'react-icons/lib/fa/edit'
import '../main/note.css'

export default class Note extends Component{
  //------------Contstuctor---------------------------------------------------
  constructor(props){
    super(props);
    this.state = {
        editing: false,
    }

    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
  }
  //----------------------End Contstuctor-------------------------------------

  componentDidUpdate() {
      if (this.state.editing) {
          this.refs.newText.focus()
          this.refs.newText.select()
      }
  }

  shouldComponentUpdate(nextProps, nextState) {
      return this.props.children !== nextProps.children || this.state !== nextState
  }

  randomBetween(x, y, s) {
      return (x + Math.ceil(Math.random() * (y-x))) + s
  }
  edit() {
      this.setState( {editing: true} );
  }
  save() {
      this.props.onChange(this.refs.newText.value, this.props.id);
      this.setState({editing: false})
  }


  remove() {
      this.props.onRemove(this.props.id)
  }


  renderForm() {
       return (
           <div className="note" style={this.style}>
             <textarea ref="newText" defaultValue={this.props.children}></textarea>
             <button className="btn btn-sm btn-outline-success " onClick={this.save}><Save/></button>
           </div>
       )
   }
   renderDisplay() {
       return (
           <div className="note" style={this.style}>
               <p>{this.props.children}</p>
               <span>
                 <button className="btn btn-sm btn-outline-success " onClick={this.edit}><Edit/></button>
                 <button className="btn btn-sm btn-outline-success"  onClick={this.remove}><Delete/></button>
               </span>
           </div>
        )
   }

  render() {
    return (
      <div>
        {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
      </div>
    );
  }

}
