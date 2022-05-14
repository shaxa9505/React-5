import './App.css';
import Book from './Book';
import Loader from './Loader';



const App = (props) => {

  return props.isLoading ? (
    <Loader/>
  ) : (
    <div>
      <Book name="Js for beginners" year="2020" price="100$"> 
        bu kitob sotildi
      </Book>
      <Book name="Vue for beginners" year="2021" price="200$"/>
      <Book name="React for beginners" year="2022" price="300$"/>
    </div>
  )
}


export default App;
