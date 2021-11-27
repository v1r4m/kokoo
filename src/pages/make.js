import React, { Component } from 'react';
import { doc, updateDoc, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import db from './../firebaseInit';

class MakeT extends Component{

    state = {
        maxNo: 1,
        boards: [
            {
                brdno: "sample",
                brdquestion: 'Please input the answer of question',
                brdanswer: "in here",
                brddate: new Date()
            }
        ],
        answer:[
            {
                aanswer:""
            }
        ]
    }

    tnum=0

    async init(){
        const docSnap = await getDoc(doc(db, "templates", "TvnrFM3qRC11vdxB")); //lol
        console.log(docSnap.data().xy[0].question);
        this.tnum=docSnap.data().num;
        for(var i =0 ;i<this.tnum;i++){
            this.setState({
                boards: this.state.boards.concat({brdno:i, braddate:new Date(), brdquestion: docSnap.data().xy[i].question, brdtitle: docSnap.data().title})
            })
        }
        // Array.from(docSnap.data().xy).foreach((element)=>{
        //     this.setState({
        //         boards: this.state.boards.concat({brdno:docSnap.data().title, braddate:new Date(), brdquestion: element.question, brdtitle: docSnap.data().title})
        //     })
        // });
    }
    constructor(){
        super();
        this.init();
//        const docSnap = getDoc(doc(db, "templates", "TvnrFM3qRC11vdxB")); //lol

        // docSnap.forEach((data) => {
        //     console.log(data.title);
        //     this.setState({
        //         boards: this.state.boards.concat({brdno:data.title, braddate:new Date(), brdquestion: data., brdtitle: doc.data().title})
        //     })
        // });
    }

    handleChange= (e) => {
   //     [e.target.name]: e.target.value;
        console.log(e);
        this.setState({
            answers:this.state.answers.concat({...e})
        })
    }

    handleSubmit=(e)=>{
        console.log(e);

    }

    render(){
        const { boards } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                                return (<MakeItem key={row.brdno} row={row} />);
                            })
                        }
                        </tbody>
                    </table>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

class MakeItem extends React.Component{

    render() {
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdquestion}</td>
                <td>
                    <form>
                        <input placeholder="input here" name="aanswer" onChange={MakeT.handleChange}/>
                    </form>
                </td>
                <td>{this.props.row.brdno}</td>

            </tr>
        );
    }
}

export default MakeT;