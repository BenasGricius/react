import React,{Component} from 'react';
import classes from './Modal.module.css';
import Auxilary from '../../../hoc/Auxilary/Auxilary';
import Backdrop from '../Backdrop/Backdrop';

interface ModalProps{
    modalClosed: ((event: React.MouseEvent) => void);   
    children?:React.ReactNode,
    show?:boolean|undefined;
    
   
}

interface ModalState{
    

}
class Modal extends Component<ModalProps,ModalState> {

    shouldComponentUpdate(nextProps:ModalProps,nextState:ModalState){        
        return nextProps.show !== this.props.show ||nextProps.children !== this.props.children;
        
    }

    componentWillUpdate(){
        console.log('[Modal] WillUpdate');
    }



    render(){
        return(
            <Auxilary>
                <Backdrop show={this.props.show} clicked = {this.props.modalClosed}/>
                <div className={classes.Modal}
                style={{
                    transform:this.props.show ? 'translateY(0)':'translateY(-100vh)',
                    opacity:this.props.show ?'1':'0'
                }}
                
                >
                    {this.props.children}
                </div>
            </Auxilary>
        )
    }

    
};  


export default Modal;