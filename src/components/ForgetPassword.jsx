import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import history from '../history';

class ForgetPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			error: {
				message: ''
			},
			success: {
				message: ''
			}
		}
	}

	hasError() {
		return (this.state.error.message !== '') ? true : false
	}

	hasSuccess() {
		return (this.state.success.message !== '') ? true : false
	}

	resetPassword() {
		const { email } = this.state;
		firebaseApp.auth().sendPasswordResetEmail(email)
			.then(() => {
				const messageSuccess = {
					message: 'E-mail sended, you will redirect in 3 seconds'
				}
				
				this.setState({
					success: messageSuccess,
					error: { message: '' }
				});

				window.setTimeout(() => {
					history.replace('/signin');
				}, 3000);
			})
			.catch(error => {
				this.setState({
					error
				})
			})
	}

	render() {
		return (
			<div style={{margin: '5%'}}>
				{
					this.hasError() 
						? <div  className="alert alert-danger">{this.state.error.message}</div>
						: null
				}

				{
					this.hasSuccess()
						?  <div className="alert alert-success">{this.state.success.message}</div>
						: null
				}
				
				<div className="form-inline">
					<div className="form-group">
						<input 
							type="email"
							placeholder="Type your e-mail to reset"
							className="form-control"
							style={{marginRight: '5px'}}
							onChange={ event => this.setState({email: event.target.value})}
							/>
						<button 
							className="btn btn-primary"
							onClick={() => this.resetPassword()}>
							Reset password	
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default ForgetPassword;