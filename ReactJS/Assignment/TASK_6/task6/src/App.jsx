import "./index.css"
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import CounterApp from "./components/CounterApp";
import GrandParent from "./components/GrandParent";
import UserForm from "./components/UserForm"
const App = () => {
  return (
    <div>
      <UserCard
        name="John"
        age={25}
        city="Chennai"
        isAdmin={true} />
     
       <Button label="Click Me" onClick={() => alert("Clicked")} />
       <Button label="Cancel" variant="secondary" onClick={() => {}} />

       <CounterApp/>
       <GrandParent/>
       <UserForm
        initialData={{ name: "John", email: "john@gmail.com" }}
        onSubmit={(data) => console.log(data)}
       />


    </div>
  )
}

export default App;
