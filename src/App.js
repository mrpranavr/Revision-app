import { useState } from "react";
import AddUser from "./Components/Users/AddUser.js";
import UsersList from "./Components/Users/UsersList.js";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    id: Math.random().toString(),
                    name: uName,
                    age: uAge,
                },
            ];
        });
    };

    return (
        <div className="App">
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
