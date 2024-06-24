import './App.css'
import Blog from './components/blog.jsx';
import Forms from './components/form.jsx';



function App() {
  return (
    <div className="app" style={{color:'black'}}>
      <>
      <h1 align="center" style={{color:"#000080", fontFamily:"inherit", fontSize:"50px"}}>REVIEW PAGE!</h1>
      <img width={600} feight={700} style={{ marginLeft:"650px"}}
        src = "https://www.powerreviews.com/wp-content/uploads/2021/12/review-vol-rec.png" alt='hi'></img>
    
       <Blog/>
       <Forms/>
       </>
       
    </div>
  );
}

export default App;
