import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './Components/Login/Login';
import AdminLogin from './Pages/AdminLogin';
import ApplicantList from './Pages/ApplicantList';
import CompanyRegister from './Pages/CompanyRegister';
import Register from './Pages/Register';
import Slots from './Pages/Slots';
import UserHome from './Pages/UserHome';
import UserLogin from './Pages/UserLogin';
import {PrivateRoute,ProtectedRoute} from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='admin/slotbook' element={
          <ProtectedRoute>
            <Slots/>
          </ProtectedRoute>}>

          </Route>
          <Route path='admin/list' element={
          <ProtectedRoute>
            <ApplicantList/>
          </ProtectedRoute>
          }></Route>
          <Route path='signup/' element={<Register/>}></Route>
          <Route path='user/homepage/' element={
          <PrivateRoute>
            <UserHome/>
          </PrivateRoute>}></Route>
          <Route path='user/companyregisteration/' element={
            <PrivateRoute>
              <CompanyRegister/>
            </PrivateRoute>
          }></Route>
          <Route path='/' element={<UserLogin/>} exact></Route>
          <Route path='/admin/login' element={<AdminLogin/>} exact></Route>
        </Routes>
      </Router>
     {/* <Button variant="text">Text</Button> */}
     {/* <Slots/> */}
     {/* <Register/> */}
     {/* <UserHome/> */}
     {/* <CompanyRegister/> */}
     
    </div>
  );
}

export default App;
