import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, replace } from 'formik';
import { FormGroup, Label, Input, Button,Col,Row, Alert, Spinner, Container, Fade } from 'reactstrap';
import dbservice from '../services/dbservice';
import { Route, useNavigate, useLocation} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast  } from 'react-toastify';




function validaGmail(){
  const email = document.getElementById('email');
  if (email.value === '')  {
    var componentAlert = document.getElementById("testeAlert");
    componentAlert.hidden = false;
    componentAlert.className = "alert alert-danger fade show";
    var componentMessage = document.getElementById("testeMessage");
    componentMessage.textContent = "Não esqueça de preencher seu email!";

}  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)) {
  var componentAlert = document.getElementById("testeAlert");
  componentAlert.hidden = false;
  componentAlert.className = "alert alert-danger fade show";
  var componentMessage = document.getElementById("testeMessage");
  componentMessage.textContent = "Digite um email válido por favor";
}
  else if (email.value !==''){
  var componentAlert = document.getElementById("testeAlert");
  componentAlert.hidden = true;
} 
}

function validaNome(){
  const nome = document.getElementById('nome');
  var len = nome.value.length;
  const email = document.getElementById('email');

  if (email.value !== '' && nome.value === '' && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)){
    var componentAlert = document.getElementById("testeAlert");
    componentAlert.hidden = false;
    componentAlert.className = "alert alert-danger fade show";
    var componentMessage = document.getElementById("testeMessage");
    componentMessage.textContent = "Digite seu nome por favor";

  } else   if (email.value !== '' && nome.value !== '' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)){
    var componentAlert = document.getElementById("testeAlert");
    componentAlert.hidden = false;
    componentAlert.className = "alert alert-danger fade show";
    var componentMessage = document.getElementById("testeMessage");
    componentMessage.textContent = "Favor digite um email valido";

  }
  else   if (email.value !== '' && nome.value === '' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)){
    var componentAlert = document.getElementById("testeAlert");
    componentAlert.hidden = false;
    componentAlert.className = "alert alert-danger fade show";
    var componentMessage = document.getElementById("testeMessage");
    componentMessage.textContent = "Favor digite um email valido";

  }
  else if (nome.value !=="" && len <= 2 || len >= 50){
    var componentAlert = document.getElementById("testeAlert");
    componentAlert.hidden = false;
    componentAlert.className = "alert alert-danger fade show";
    var componentMessage = document.getElementById("testeMessage");
    componentMessage.textContent = "Digite o nome válido por favor";
  }
  else if (nome.value !==''){
    var componentAlert = document.getElementById("testeAlert");
    componentAlert.hidden = true;
  } 
  

}

function validarIdade(){
  
  const idade = document.getElementById('idade');
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');

  if (email.value !== ''&& /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)  &&  nome.value !== '' && idade.value === ''){
    var componentAlert = document.getElementById("testeAlert");
    componentAlert.hidden = false;
    componentAlert.className = "alert alert-danger fade show";
    var componentMessage = document.getElementById("testeMessage");
    componentMessage.textContent = "Digite sua idade";
    
  }  else if (email.value !== ''&& !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)  &&  nome.value !== '' && idade.value !== ''){
    var componentAlert = document.getElementById("testeAlert");
    componentAlert.hidden = false;
    componentAlert.className = "alert alert-danger fade show";
    var componentMessage = document.getElementById("testeMessage");
    componentMessage.textContent = "Favor digite um email valido";
    
  }   
  else if (email.value !== '' && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value) && nome.value !== '' && idade.value >= 120){
   var componentAlert = document.getElementById("testeAlert");
   componentAlert.hidden = false;
   componentAlert.className = "alert alert-danger fade show";
   var componentMessage = document.getElementById("testeMessage");
   componentMessage.textContent = "Digite uma idade válida";

 }
  
  else if (idade.value !==''){
    var componentAlert = document.getElementById("testeAlert");
    componentAlert.hidden = true;
  } 
  
}

function confirmacaoDados(){
  const idade = document.getElementById('idade');
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  
  if (idade.value !== '' && nome.value !== '' && email.value !== ''){
    
    return true
  }else{
    return false
  }
}


const formInit = {
  email: "",
  nome: "",
  Idade: "",
  termsAndConditions:false,
  infoFlag:false,
  addFlag:false

};



function PageLogin({setAuth}) {
  const navigate = useNavigate();
  

  const [gmail,setGmail] = useState('');
  const [nome,setNome] = useState('');
  const [idade,setIdade] = useState('');
  const [state, setState] = useState(true);

  const handleSubimt = async (e) =>{
    
    e.preventDefault();
    

    const newUser = {
      gmail,
      nome,
      idade
    }
    console.log(newUser);
    
    try{
        await dbservice.addUsers(newUser);
        console.log("Adicionado");
        
        toast.success('Cadastrando!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {navigate('/Quiz')}
          });
        //setGmail('');
        //setNome('');
        //setIdade('');
      
    } catch (err){
      console.log(err)
    }
    
} 
  const isButtonDisabled = !gmail || !nome || !idade;
  
  return (
    <div>
      <Container>
      <Formik
      initialValues={formInit}    
      onSubmit={(values) =>{
        console.log(values);
      }}>
        {({erros,touched, isSubmitting, onClick }) => (
          <Row>
            <Col md={3}></Col>
            <Col md={6} className="p-3 my-3 text-white ">
              <Form className='rounded formulario' onSubmit={handleSubimt}>
                <FormGroup>
                  <div>
                      <Label for="emailuser" className="col-form-label" placeholder=''>
                          <h2>Entrar:</h2>
                      </Label>
                  </div> 
                  <div>
                      <Field name="email" id="email" className="form-control" placeholder="Email" validate={validaGmail} value={gmail} style={{ margin: '15px 0' }} onChange={(e) => setGmail(e.target.value)} >
                          </Field>
                      <ErrorMessage name="email"/>
                  </div>

                  <div>
                      <Field name="nome" id="nome" className="form-control" placeholder="Nome" validate={validaNome} value={nome}   style={{ margin: '15px 0'}} onChange={(e) => setNome(e.target.value)} >
                          </Field>
                      <ErrorMessage name="nome"/>
                  </div>

                  <div>
                      <Field name="idade" id="idade" className="form-control" type="number" placeholder="idade"  validate={validarIdade} value={idade} style={{ margin: '15px 0'}} onChange={(e) => setIdade(e.target.value)} >
                          </Field>
                      <ErrorMessage name="idade"/>
                  </div>
                  <FormGroup check>
                    <Input type="checkbox" id="infoFlag" name="addFlag"/>
                    
                    <Label check>
                      Você concorda em receber emails
                    </Label>
                  </FormGroup>

                  <Button
                        id='validar'
                        color="success"
                        enabled="false"
                        className="validar"
                  
                        onClick={(onClick)}
                        disabled={isButtonDisabled}
                          >
                            inscreva-se
                </Button>
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  />
                
                </FormGroup>

              </Form>
              <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                    <br/>
                    <Alert hidden class='alert alert-success fade show' align="center" id='testeAlert'>
                        <p id='testeMessage'></p>
                    </Alert>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Col>
          </Row>

        )}

      </Formik>
      </Container>
  </div> 
  )
  
}

export default PageLogin