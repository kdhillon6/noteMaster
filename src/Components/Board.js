import React, { Component } from 'react'
import Note from './Note'
import '../main/App.css'
import '../main/board.css'
import Delete from 'react-icons/lib/ti/delete'

import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);


export default class Board extends Component{
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100
  };

  //------------Contstuctor---------------------------------------------------
  constructor(){
    super();

    this.state = {
      notes: [
        { id: 0, note: "Hello to me"},
        { id: 1, note: "Hello to you"},
        { id: 2, note: "Hello hahah"},
        { id: 3, note: "Hello sd"},
      ],
      items: [
        { id: 0, note: "Hello to me"},
        { id: 1, note: "Hello to you"},
        { id: 2, note: "Hello hahah"},
        { id: 3, note: "Hello sd"},
        { id: 4, note: "Hello Karamveer"},
        { id: 5, note: "Hello Enes"},
        { id: 6, note: "Hello Qassam"},
        { id: 7, note: "Hsdf me"},
        { id: 8, note: "Hellsdsdfo Enes"},
        { id: 9, note: "Hellosdfsdfsd Qassam"},
        { id: 10, note: "Hellasdfsadfo me"},
        { id: 11, note: "Helloasdfasdf Enes"},
        { id: 12, note: "Hellgggo Qassam"},
        { id: 13, note: "Hellogggaaa me"},
        { id: 14, note: "Enes"},
        { id: 15, note: "Qassam"},
        { id: 16, note: "me"},
        { id: 17, note: "Hey  Enes"},
        { id: 18, note: "Hey Qassam"},
        { id: 19, note: "Hey me"},
      ].map(function(i, key, list) {
        return {
          i: i.note,
          x: i.id * 1,
          y: 0,
          w: 1,
          h: 1,
          id: i.id,
          add: i === (list.length - 1).toString()
        };
      }),
      newCounter: 0
    }
    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }
  //----------------------End Contstuctor-------------------------------------


  update(newText, id){
    console.log(newText);
    var items = this.state.items.map(
      item => (item.id !==id) ? item : { ...item, i:newText}
    )
    this.setState({items});
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




  createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    console.log(el);
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el}>
        <Note key={el.id} id={el.id} onChange={this.update.bind(this)} onRemove={this.onRemoveItem.bind(this, i)}>
          {el.i}
        </Note>
      </div>
    );
  }

  onAddItem() {
    /*eslint no-console: 0*/
    console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 1,
        h: 1
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    // this.props.onLayoutChange(this.state.layout);
    // this.setState({ layout: layout });
  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }



  render() {
    return (
      <div className='board'>

        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>

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
