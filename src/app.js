import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


const jsx = (
  <Provider store={store}>
    <AppRouter />
  	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));






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




































