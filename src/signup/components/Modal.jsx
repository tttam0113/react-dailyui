import React from 'react';
import Input from './Input';

export default class Modal extends React.Component {

    render() {
        return (<div className='Modal'>
            <form onSubmit={this.props.onSubmit} className='ModalForm'>
                <Input id="name" typ="text" placeholder='Thanh Tam Tran'/>
                <Input id="username" typ="email" placeholder='tttam0113@gmail.com'/>
                <Input id="password" typ="password" placeholder='password'/>
                <button>Log In <i className="fa fa-fw fa-chevron-right"></i></button>
            </form>
        </div>);
    }
}