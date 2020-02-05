import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter,{ history } from './routers/AppRouter';
import configureStore from './store/configureStore';
//import { addExpense } from './actions/expenses';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage.js'


const store = configureStore();


const jsx = (
  <Provider store={store}>
    <AppRouter />
  	</Provider>
);

//prevent rerendering

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});




//Children element
// const Layout=(props)=>{
// 	return(
// 		<div>
// 			<p>header</p>
// 			{props.children}
// 			<p>footer</p>
// 		</div>
// 		);
// };
// ReactDOM.render((
// 				<Layout>
// 					<div>
// 						<h1>hii</h1>
// 					</div>
// 				</Layout>), document.getElementById('app'));



// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }






// class Action extends React.Component {
//   // handlePick() {
//   //   alert('handlePick');
//   // }
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }



// class Options extends React.Component {
//   // constructor(props){
//   //   super(props);
//   //   //this.handleRemoveAll=this.handleRemoveAll.bind(this);
//   // }
//   // handleRemoveAll (){
//   //   console.log(this.props.options);
//   //  // alert(' handleRemoveAll');
//   // }
//   render() {
//     return (
//       <div>
//       <button onClick={ ()=>this.props. handleDeleteOptions()}>Remove All</button>
      
      
//       { this.props.options.map((option) => <Option key={option} optionText={option} />)}
//         <Option />
//       </div>
//     );
//   }
// }





// class Option extends React.Component{
//   render(){
//     return( <div>
//                 {this.props.optionText}
//             </div>);
//   }

// }



// const User=(props)=>{
//   return(
//     <div>
//       <p>name: {props.name}</p>
//       <p>age: {props.age}</p>
//     </div>
//     )
// }



//ReactDOM.render(<User name="aditya" age={21} />, document.getElementById('app'));




































