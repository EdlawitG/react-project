import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import uuid from "react-uuid";
function App() {
  const [expenses, setExpense] = useState([]);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert,setAlert] = useState({show:false});
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)
  const handleAlert = ({type,text}) =>{
    setAlert({show:true,type,text});
    setTimeout(()=>{
      setAlert({show:true})
    },3000)
  }
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const clearItems = ()=>{
    setExpense([]);
    handleAlert({type:'danger', text:'All items has been deleted'})
  }
  const handleDelete =(id)=>{
    const temp = expenses.filter(item => item.id !== id);
    setExpense(temp)
    handleAlert({type:'danger', text:'One Item has been Deleted'})
  }
  const handleEdit=(id)=>{
    let expense = expenses.find(item=> item.id === id)
    let {charge, amount} = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setId(id)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge !== '' && amount > 0){
      if(edit){
        let tempExpenses = expenses.map(item=>{
          return item.id === id ? {...item,charge,amount}: item;
        });
        setExpense(tempExpenses)
        setEdit(false)
        handleAlert({type:"success", text:"Item Edited"})
      }else{
        const singleExpense = { id: uuid(), charge, amount };
        setExpense([...expenses, singleExpense]);
        handleAlert({type:"success", text:"Item Added"})
      }
    setCharge('')
    setAmount('')
    }
    else{
      handleAlert({type:"danger", text:"Charge can not be Empty value and Amount value has to be bigger than 0"})
    }
  };
  return (
    <>
    {alert.show && <Alert type={alert.type} text={alert.text}/>}
      
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList expenses={expenses} handleEdit={handleEdit} handleDelete={handleDelete} clearItems={clearItems} />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
