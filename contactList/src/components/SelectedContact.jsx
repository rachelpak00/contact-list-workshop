<<<<<<< HEAD
=======
import React from "react";
>>>>>>> origin/main
import { useState, useEffect } from "react";

const SelectedContact = ({selectedContactId, setSelectedContactId}) => {
    const [contact, setContacts] = useState({});

    useEffect(() => {
        async function fetchContact() {
            try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
            const result = await response.json();
            setContacts(result);
        } catch (error) {
            console.log(error);
        }
    }
    if (selectedContactId) {
       fetchContact(); 
    }
    
    }, [selectedContactId]);

    return (
        <div>
          {contact ? (
            <div>
              <h2>Contact Details</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td>{contact.name}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{contact.email}</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>{contact.phone}</td>
                  </tr>
                </tbody>
              </table>
              <button onClick={() => setSelectedContactId(null)}>Return</button>
            </div>
          ) : null}
        </div>
    );
}; 

export default SelectedContact;



