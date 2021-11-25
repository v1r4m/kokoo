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
class NewT extends Component {
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

    onChange = (e) => {
        const img = e.target.files[0];
        const formData = new FormData();
        formData.append('file', img);
    }
  
    render() {
        const { boards } = this.state;
        return (
            <div>
                <input type='file' 
                    accept='image/jpg,impge/png,image/jpeg,image/gif' 
                    name='img' 
                    onChange={this.onChange}>
                </input>
                <SubmitForm onSaveData={this.handleSaveData}/>
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
                            return (<SubmitItem key={row.brdno} row={row} />);
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

class SubmitItem extends React.Component {
    
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
class SubmitForm extends Component {
    state = {}
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="brdtitle" onChange={this.handleChange}/>
                <input placeholder="name" name="brdwriter" onChange={this.handleChange}/>
                <button type="submit">more</button>
            </form>
        );
    }
}

export default NewT;