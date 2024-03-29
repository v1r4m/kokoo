import React, { Component } from 'react';

// class NewT extends Component {
//     onChange = (e) => {
//         const img = e.target.files[0];
//         const formData = new FormData();
//         formData.append('file', img);
//     }
//     render() {
//         return (
//             <div>
//             <input type='file' 
//                 accept='image/jpg,impge/png,image/jpeg,image/gif' 
//                 name='img' 
//                 onChange={this.onChange}>
//             </input>
//             </div>
//         );
//     }
// }
import { doc, updateDoc, addDoc, setDoc, arrayUnion } from "firebase/firestore";
import db from './../firebaseInit';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
var rand = require('random-key');




class NewT extends Component {
    state = {
        maxNo: 1,
        boards: [
            {
                brdno: "sample",
                brdquestion: 'Please input the sample question',
                brdx: 'x coordinate here',
                brdy: 'y coordinate here',
                brddate: new Date()
            }
        ]
    }

    img = new Image()

    handleSaveData = (data) => {
        this.setState({
            boards: this.state.boards.concat({ brdno: this.state.maxNo++, brddate: new Date(), ...data })
        });
    }

    async canvas(image){
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext('2d');
        ctx.drawImage(image,0,0);
        document.body.appendChild(canvas);
    }

    onChange = (e) => {
        this.img = e.target.files[0];
//        this.canvas(e.target.files[0]);
        const formData = new FormData()
        formData.append('file', this.img);

    }
  
    render() {
        const { boards } = this.state;
        return (
            <div>
                <Grid container alignItems="center"
                                justifyContent="center"
                                spacing={2}>
                    <Grid item xs={10}>
                        <Input type='file' 
                            accept='image/jpg,impge/png,image/jpeg,image/gif' 
                            name='img' 
                            onChange={this.onChange}>
                        </Input>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Table border="1">
                            <tbody>
                            <tr align="center">
                                <td width="300">Question</td>
                                <td width="200">X</td>
                                <td width="200">Y</td>
                                <td width="100">Number</td>
                            </tr>
                            {
                                boards.map(function(row){ 
                                    return (<SubmitItem key={row.brdno} row={row} />);
                                })
                            }
                            </tbody>
                        </Table>
                        <SubmitForm onSaveData={this.handleSaveData}/>
                    </Grid>qws0.
                </Grid>
            </div>
        );
    }
}

class SubmitItem extends React.Component {
    
    render() {
        return(
            <tr>
                <td>{this.props.row.brdquestion}</td>
                <td>{this.props.row.brdx}</td>
                <td>{this.props.row.brdy}</td>
                <td>{this.props.row.brdno}</td>
            </tr>
        );
    }
}
class SubmitForm extends Component {
    state = {}
    randkey = ""
    dbkey = ""
    num=0

    constructor(){
        super();
        this.randkey=rand.generate();
        this.dbkey = setDoc(doc(db, "templates", this.randkey),{
            title:"sample title",
            xy:{
                question:"samplequestion",
                x:0,
                y:0
            }
        });
        console.log(this.dbkey);
        updateDoc(doc(db, "templates", "TvnrFM3qRC11vdxB"), {
            // "xy.question": this.state.brdquestion,
            // "xy.x":this.state.brdx,
            // "xy.y":this.state.brdy

            xy:[],
            answer:[],
            num:this.num
        });
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.num++;
        try {
            updateDoc(doc(db, "templates", "TvnrFM3qRC11vdxB"), {
                // "xy.question": this.state.brdquestion,
                // "xy.x":this.state.brdx,
                // "xy.y":this.state.brdy

                xy:arrayUnion({
                    question:this.state.brdquestion,
                    x:this.state.brdx,
                    y:this.state.brdy
                }),
                num:this.num
            });
            console.log("Document written with ID: ", this.randkey);
        } catch (error) {
            console.error("Error adding document: ", e);
        }
        this.setState({});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input placeholder="question" name="brdquestion" onChange={this.handleChange}/>
                <Input placeholder="x" name="brdx" onChange={this.handleChange}/>
                <Input placeholder="y" name="brdy" onChange={this.handleChange}/>
                <Button type="submit">more</Button>
            </form>
        );
    }
}

export default NewT;