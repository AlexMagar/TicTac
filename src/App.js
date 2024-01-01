import './App.css';

function App() {

  // let  data = ['sdfljgsd,sdfgs,dfg,sdf,gsd,fgd']
  
  const ArrangeText = (data) => {
    data &&
    data.map((index, i) => {
      return(
        <span key={index}>{
          (index ? ',' : " ") + data
        }
        </span>
      )
    })
  }

  return (
    <div className="App">
      <ArrangeText text={'sdfljgsd,sdfgs,dfg,sdf,gsd,fgd'}/>
    </div>
  );
}

export default App;
