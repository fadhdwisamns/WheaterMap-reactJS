import React , {Component} from 'react';
import axios from 'axios';


class Jadwal_Batch extends Component {
    constructor(props){
        super(props);
        this.state = {
            namaBatch : "Batch 6",
            tanggalJadwal : "28 September 2020",
            pelajaran : "",
            sesi :"",
            jam:"",
            pilihNama :"",
      
       listModul : [
            
       ],
        }
    }
    componentDidMount(){
        this.getdata();
    }
    getdata = ()=>{
        let config = {
            headers: {
                "x-api-key" : "D4D9D192D08750E7E26B2B02365AECBF"
              }
        }
        axios
        .get('http://localhost:80/cicool/api/jadwal_batch/all',config)
        .then(response => {
            this.setState({ listModul: response.data.data.jadwal_batch });
          console.log('response', response.data.data.jadwal_batch);
        })
        .catch(error => {
          console.log('error', error);
        });
    }
    addJadwal = (url, payload) =>{
        let config = {
            headers: {
                "x-api-key" : "D4D9D192D08750E7E26B2B02365AECBF"
              }
            }
            axios
            .post(url, payload ,config)
            .then(response => {
            this.setState({pelajaran: "", sesi: "",jam:"" });
            this.getdata();
            })
            .catch(error => {
            console.log(error);
                });
            };       

            onSubmitHandler = e => {
                e.preventDefault();
                this.setState({ buttonDisabled: true });
              
                //jika yang diminta body
                let bodyFormData = new FormData();
                bodyFormData.append('pelajaran',this.state.pelajaran);
                bodyFormData.append('sesi',this.state.sesi);
                bodyFormData.append('jam',this.state.jam);
             
                console.log("payload",bodyFormData);
                let url = 'http://localhost:80/cicool/api/jadwal_batch/add'
                this.addJadwal(url, bodyFormData);
            };
            
                handleChangePelajaran = (event) =>{
                    this.setState({pelajaran : event.target.value})
                }

                handleChangeSesi= (event) =>{
                this.setState({sesi : event.target.value})
                }

                handleChangeJam= (event) =>{
                this.setState({jam : event.target.value})
                }

            render(){
                return(

                    <div className="col-sm-6"  style = {{width: "20rem" ,margin:"auto"}}>
                    <form  onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label>Nama Pelajaran :</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nama Pelajaran "  onChange = {this.handleChangePelajaran}/>
                    
                    
                        <label>Sesi :</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nama Pelajaran "  onChange = {this.handleChangeSesi}/>
                    
                    
                        <label>Jam : </label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Jam Pelajaran "  onChange = {this.handleChangeJam}/>
                    
                    
                    
                        <button type="submit" className="btn btn-primary mb-2" >Tambah</button>
                    </div>
                    </form>
                    <div className="card" style = {{width: "18rem" ,margin:"auto"}}>
                <div className="card-body">
                <h5 className="card-title">{this.props._pelajaran}</h5>
                <p className="card-text">Sesi dan Jam  : {this.props._sesi} / {this.props._jam}</p>
                </div>
                </div>
                    </div>
                    
                );
            }
  
    
}
export default Jadwal_Batch;