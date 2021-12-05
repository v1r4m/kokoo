import React, { Component } from 'react';
import { doc, updateDoc, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import db from './../firebaseInit';
import imgA from './sample.png'
import json2d from 'json2d';

// width = 0;
// height = 0;
// img.onload = function() {
//   width = this.width;
//   height = this.height;
// }

class MakeT extends Component{

    state = {}
    img = new Image()
    obj =new Object()
    obj2=new Object()
    reala = new Array()
    a = []
    b = []
    tnum=0
    arr=["drawImage", "https://pbs.twimg.com/media/DMsZa1oV4AAcU-G.jpg"]

    async getlist(){
        const docSnap = await getDoc(doc(db, "templates", "TvnrFM3qRC11vdxB")); //lol
        console.log(docSnap.data().xy[0].question);
        var tnum=docSnap.data().num;
        for(var i =0 ;i<tnum;i++){
            if(this.state.boards != 'undefined' && this.state.boards != null) {
                this.setState({
                    boards: this.state.boards.concat({brdno:i, braddate:new Date(), brdquestion: docSnap.data().xy[i].question, brdtitle: docSnap.data().title})
                })
             }
        }
        
        // Array.from(docSnap.data().xy).foreach((element)=>{
        //     this.setState({
        //         boards: this.state.boards.concat({brdno:docSnap.data().title, braddate:new Date(), brdquestion: element.question, brdtitle: docSnap.data().title})
        //     })
        // });
    }

    constructor(props){
        super(props);
        // this.getlist = this.getlist.bind(this);
        
        this.state = {
            maxNo: 1,
            boards: [
                {
                    brdno: "sample",
                    brdquestion: 'Please input the answer of question',
                    brdtitle: "title",
                    brdanswer: "in here",
                    brddate: new Date()
                }
            ]
        };
// img.onload = function() {
//   width = this.width;
//   height = this.height;
// }
        this.img=new Image();
        this.img.src = imgA;
       this.obj = new Object();
        this.obj = {
            "background": "#efd",
            "draws":[]
        }
        this.reala = [["drawImage", "https://pbs.twimg.com/media/DMsZa1oV4AAcU-G.jpg", 0, 0, this.img.width, this.img.height, 0, 0, this.img.width, this.img.height]];
        var a = [this.img.width, this.img.height];
        this.b = ["fillText"];
        this.obj.size = a;
        console.log(this.img);
        // this.arr=["drawImage", "https://pbs.twimg.com/media/DMsZa1oV4AAcU-G.jpg", 0, this.img.height, this.img.width, 0, 0, this.img.height, this.img.width, 0];
        // this.obj["draws"].push(this.arr);
//        this.init();
//        const docSnap = getDoc(doc(db, "templates", "TvnrFM3qRC11vdxB")); //lol

        // docSnap.forEach((data) => {
        //     console.log(data.title);
        //     this.setState({
        //         boards: this.state.boards.concat({brdno:data.title, braddate:new Date(), brdquestion: data., brdtitle: doc.data().title})
        //     })
        // });
        this.obj2= {
            "background": "#efd",
            "size": [ 800, 600 ],
            "draws": [
              [ "drawImage", "http://i.imgur.com/N8a9CkZ.jpg", 530, 700, 800, 200, 0, 400, 800, 200 ],
              { "font": "italic bold 20px monospace", "fillStyle": "#09f", "textBaseline": "top", "textAlign": "right" },
              [ "fillText", "some texts...\nLorem ipsum dolor sit amet,\n consectetur adipiscing elit,\n sed do eiusmod tempor incididunt ut labore\net dolore magna aliqua.", 780, 10, 20 ],
              { "font": "italic 40px sans-serif", "fillStyle": "#099", "textBaseline": "middle", "textAlign": "center" },
              [ "fillText", "does support\nmulti-line texts!\n\nusing the '\\n' character.\n\nand also supports images :)", 400, 200, 48]

            ]
          };
          this.getlist();
    }

    handleChange= (e) => {
   //     [e.target.name]: e.target.value;
        console.log(e);
        this.setState({
            answers:this.state.answer.concat({...e})
        })
    }

    Canvas (w, h, r) {
        var canvas = document.createElement("canvas");
        canvas.width = r * w;
        canvas.height = r * h;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        return canvas;
      }

    async addjson(){
        const docSnap = await getDoc(doc(db, "templates", "TvnrFM3qRC11vdxB")); //lol
         var tnum=docSnap.data().num;
         console.log(tnum);
        this.b = ["fillText"];
        for(var i =0 ;i<tnum;i++){
            this.b.push(docSnap.data().answer[i].sector);
            this.b.push(docSnap.data().xy[i].x);
            this.b.push(docSnap.data().xy[i].y);
            this.b.push(0);
            this.reala.push({ "font": "italic bold 20px monospace", "fillStyle": "#09f", "textBaseline": "top", "textAlign": "left" });
            this.reala.push(this.b);
            this.b=["fillText"];
        }
        this.obj.draws = this.reala;

        return this.obj;
        
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.addjson().then(result=>json2d.render(this.obj));
        console.log(JSON.stringify(this.obj));
        console.log(this.obj);
        var json2d = require("json2d");
        var canvas = this.Canvas(this.img.width, this.img.height, window.devicePixelRatio || 1);
        var ctx = canvas.getContext("2d");
        var json2d = json2d(ctx);
        this.addjson().then(result=>json2d.render(this.obj));
        json2d.render(this.obj);
       document.body.appendChild(canvas);
    }
    blbl=(e)=>{
//        this.addjson();
                e.preventDefault();
                var json2d = require("json2d");
                console.log(this.obj2);
//                this.json = JSON.stringify(this.obj2);
//                var canvas = this.canvas(this.img.width, this.img.height, window.devicePixelRatio || 1);
                var canvas = this.Canvas(600,300,window.devicePixelRatio || 1);
                var ctx = canvas.getContext("2d");
                var json2d = json2d(ctx);
                json2d.render(this.obj2);
                document.body.appendChild(canvas);
    }

    render(){
        const { boards } = this.state;
        return (
            <div>
                {/* <button type = "get" onClick={this.getlist}>get list</button> */}
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
                    <button onClick={this.blbl}>wtf</button>
                </form>
            </div>
        );
    }
}

class MakeItem extends React.Component{

    state = {}
    num=0
    arr=["fillText"]

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.porps);
//        this.props.onSaveData(this.state);

        try {
            const docRef = updateDoc(db(db, "templates", "TvnrFM3qRC11vdxB"), {
                answer:arrayUnion({
                    sector:this.state.answer
                }),
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", e);
        }
        this.setState({});
    }

    render() {
        return(
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdquestion}</td>
                <td>
                    <input placeholder="input here" name="answer" onChange={this.handleChange}/>
                    <button type="submit" onClick={this.handleSubmit}></button>
                </td>
                <td>{this.props.row.brdno}</td>

            </tr>
        );
    }
}

export default MakeT;