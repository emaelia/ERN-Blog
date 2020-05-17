import React from 'react';



export class  DOMPractice extends React.Component {

    sendInfo = () => {
        const names = event.target.parentElement;
        const message = document.getElementById('msg');
        message.innerHTML = `${message} ${names[0]} ${names[2]}`;
    };
    
    onChangelHandler = () => {
        console.log(event.target.value)
    };
    

    render() {
        return(
            <div>
                <p id="msg">Welcome, </p>
                <form>
                    First Name: <input type="text" id='e1' placeholder="Emm"  onChange={onChangelHandler()} /><br/>
				    Last Name: <input type="text" id='e2' placeholder="Norm"  onChange={onChangelHandler()} /><br/>
				    <input type="button" name="submit" value='Submit' onChange={onChangelHandler()}  />
                </form>
            </div>
        )
    }
};