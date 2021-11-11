import React, { Component } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from './../firebaseInit';
/*
    add a board (post)
*/
async function init(boards){
    const querySnapshot = await getDocs(collection(db, "templates"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().title}`);
        boards.concat({brdno:1, braddate:new DataTransfer(), brdwriter: doc.data().name, brdtitle: doc.data().title})
    });
    return boards;
}


class Write extends Component {

    // constructor(){
    //     const querySnapshot = getDocs(collection(db, "templates"));
    //     console.log(querySnapshot);
    // }
    
    state = {
        maxNo: 10,
        boards: [
            {
                brdno: 1,
                brdwriter: 'Lee SunSin',
                brdtitle: 'If you intend to live then you die',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'So SiNo',
                brdtitle: 'Founder for two countries',
                brddate: new Date()
            }
        ]
    }

    handleSaveData = (data) => {
        this.setState({
            boards: this.state.boards.concat({ brdno: this.state.maxNo++, brddate: new Date(), ...data })
        });
    }

    async init(){
        const querySnapshot = await getDocs(collection(db, "templates"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().title}`);
            this.setState({
                boards: this.state.boards.concat({brdno:doc.id, braddate:new Date(), brdwriter: doc.data().name, brdtitle: doc.data().title})
            })
        });
    }

    constructor(){
        super();
        this.init();
    }
  
    render() {
        const { boards } = this.state;
        return (
            <div>
                <BoardForm onSaveData={this.handleSaveData}/>
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="50">No</td>
                        <td width="300">Title</td>
                        <td width="100">Name</td>
                        <td width="100">Date</td>
                    </tr>
                    {
                        boards.map(function(row){ 
                            return (<BoardItem key={row.brdno} row={row} />);
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

class BoardItem extends React.Component {
    
    render() {
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdtitle}</td>
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brdno}</td>
            </tr>
        );
    }
}

class BoardForm extends Component {
    state = {}
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        console.log(this.state.brdtitle);
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({});
        try {
            const docRef = addDoc(collection(db, "templates"), {
                title:this.state.brdtitle,
                name:this.state.brdwriter,
                createdAt:Date.now(),
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", e);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="brdtitle" onChange={this.handleChange}/>
                <input placeholder="name" name="brdwriter" onChange={this.handleChange}/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default Write;