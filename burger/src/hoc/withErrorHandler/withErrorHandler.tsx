import React,{Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxilary from '../Auxilary/Auxilary';
import { AxiosInstance } from 'axios';



interface WithErrorHandlerProps{    
    error:string

}


const withErrorHandler=(WrappedComponent:Function, axios:AxiosInstance)=>{
    return class extends Component<{}, WithErrorHandlerProps> {
            state={
                error:""
            }
        reqInterceptor!: number;
        resInterceptor!: number;

            componentWillMount(){
                this.reqInterceptor=axios.interceptors.request.use((req)=>{
                    this.setState({error:""});
                    return req;
                });
                this.resInterceptor=axios.interceptors.response.use((res) =>res,(error)=>{
                    this.setState({error:error.message});
                });
            }

            componentWillUnmount(){
                console.log('Will Unmount', this.reqInterceptor, this.resInterceptor)
                axios.interceptors.request.eject(this.reqInterceptor)
                axios.interceptors.response.eject(this.resInterceptor)
            }



            errorConfirmedHandler = ()=>{
                this.setState({error:""})
            }


            render(){
             
                return(
                    <Auxilary>
                        <Modal 
                            show = {this.state.error !==""?true:false}
                            modalClosed={this.errorConfirmedHandler}                        
                            >
                            {this.state.error  === "" ? null : this.state.error}
                        </Modal>
                        <WrappedComponent {...this.props}/>
                    </Auxilary>                
                )   
   
            }
    }

}


export default withErrorHandler