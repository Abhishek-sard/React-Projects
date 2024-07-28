import Student from "./Student"
function App() {
  return(
    <>
    <Student name="Subscribe my channel:" age={30} isStudent={false} />
    <Student name="Patrick" age={42} isStudent={true}/>
    <Student name = "ramesh" age={54} isStudent={false}/>
    <Student name = "abhishek" age={64} isStudent={true}/>
    
    </>
  );
}

export default App

