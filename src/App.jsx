import logo from './logo.svg';
import './App.css';

export function HelloWorld() {
  const data = `Hello World`

  const obj =  {
    name : 'Hello World Object'
  }

  const name = ['We', 'are', 'United'] 

  let namejoin = ""
  
  name.map((val)=>{
      namejoin += ` ${val}`
  })
  console.log(namejoin)

  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]

  let [HW1 , HW2, HW3] = list
  console.log(HW1.name)


  const complex = [{company: 'XYZ', jobs: ['Javascript,', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]

  let [first , second] = complex

 
  complex.map((val)=>{
    // console.log(`Company Name is ${val.company} & The Jobs Available in Company are ${val.jobs[0]} & ${val.jobs[1]}`)
    // console.log(`${val}`)
  
  })

  return (
  

   <div className="App">
      <header className="App-header">
      <b>  <span className='p1'> React </span> <span className='p2'>  Assignment 2</span> - <em>Yaqoob Ahmed </em></b>
        <img src={logo} className="App-logo" alt="logo" />
          <h5>Render into Component</h5>
        <p className='lists'>
          <ul className='ul'>
          <li>{data}</li>
          <li>{obj.name}</li>
          <li>{namejoin}</li>
          <li>{HW1.name}</li>
          
          </ul>
          <ul className='ul secondul'>
          <li>{HW2.name}</li>
          <li>{HW3.name}</li>
          <li>{first.jobs[0]} & {first.jobs[1]} Position Avalable in {first.company} Company</li>
          <li>{second.jobs[0]} & {second.jobs[1]} Position Avalable in {second.company} Company</li>
          </ul>
        </p>
        <hr  className='line'/>
      </header>
    
    </div>


  
  );
}



export default  HelloWorld


function Check() {
  console.log('Working')


  return(
    <div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
  )
}


export {Check}  