import React from 'react';
import Cards from './Cards';
import '../styles.css';
import contacts from '../contacts';

function App(){
    return(
        <div>
            <h1 className='heading'>Meus Contatos</h1>
            <Cards name={contacts[0].name} img={contacts[0].imgUrl} phone={contacts[0].phone} email={contacts[0].email}/>
            <Cards name={contacts[1].name} img={contacts[1].imgUrl} phone={contacts[1].phone} email={contacts[1].email}/>
            <Cards name={contacts[2].name} img={contacts[2].imgUrl} phone={contacts[2].phone} email={contacts[2].email}/>
        </div>
    )
}

export default App;