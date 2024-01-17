import './Exercise.css'

function Exercise() {

    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };
//style={{ color: 'red', backgroundColor: 'lightblue' }}
      return (
        <div>
            <h1 style={style_header} >Hello from Exercise Component</h1>
        <p className='para'>This is a paragraph.</p>
        <a href="#">This is a link</a>
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <img src='https://plus.unsplash.com/premium_photo-1670856377657-163942a0352a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8' alt="Sample Image" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        </div>
      );
    }
    
    export default Exercise;