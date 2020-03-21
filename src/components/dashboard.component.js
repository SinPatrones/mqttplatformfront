import React, {Component} from 'react';
import io from 'socket.io-client';

class DashboardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dato: '',
            listaDeDatos: [],
        };

        this.handleclickbutton = this.handleclickbutton.bind(this);
        this.handlechangeinputtext = this.handlechangeinputtext.bind(this);
    }

    handlechangeinputtext(evt){
        switch (evt.target.name) {
            case "dato":
                this.setState({
                    dato: evt.target.value,
                });
                break;
        }
    }

    handleclickbutton(evt){
        switch (evt.target.name) {
            case "enviar":
                this.socket.emit('dato', {from: 'web', data:this.state.dato});
                break;
        }
    }

    componentDidMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('datogeneral', data => {
            this.setState({
                listaDeDatos: [data, ...this.state.listaDeDatos],
            });
        });
    }

    render() {
        return (
            <div className="main row mt-3">
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            Main Page With Socket
                            <div className="form-row">
                                <label htmlFor="dato" className="col-3 col-form-label">DATO:</label>
                                <input type="text" name="dato" id="dato" className="form-control col-5" onChange={this.handlechangeinputtext}/>
                            </div>
                            <div className="form-row">
                                <button
                                    type="button"
                                    name="enviar"
                                    className="btn btn-success"
                                    onClick={this.handleclickbutton}
                                >
                                    ENVIAR
                                </button>
                            </div>
                        </div>
                        <div className="col-5">
                            <ul>
                                {
                                    this.state.listaDeDatos.map((obj, idx) => {
                                        return (
                                            <li key={idx}>
                                                <strong>{obj.from}:</strong>{obj.data}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardComponent;