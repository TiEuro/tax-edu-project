import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FormGroup, Label, Input, Button,Col,Row, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';


const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

function validar_renda() {
  let error;
  const profissao = document.getElementById("profissao");
  const renda = document.getElementById("renda");

    if (profissao.value === '')  {
        var rendaAlert = document.getElementById("rendaAlert");
        rendaAlert.className = "alert alert-danger fade show";
        rendaAlert.hidden = false;
        var rendaMessage = document.getElementById("rendaMessage");
        rendaMessage.textContent = "Não esqueça de selecionar sua profissão!";
    } else if (renda.value === '')  {
        var rendaAlert = document.getElementById("rendaAlert");
        rendaAlert.hidden = false;
        rendaAlert.className = "alert alert-danger fade show";
        var rendaMessage = document.getElementById("rendaMessage");
        rendaMessage.textContent = "Não esqueça de preencher sua renda!";
    } else if (profissao.value !== 'Selecione' && (renda.value > 0 && renda.value < 16567.20 ))    {
        var rendaAlert = document.getElementById("rendaAlert");
        rendaAlert.hidden = false;
        rendaAlert.className = "alert alert-danger fade show";
        var rendaMessage = document.getElementById("rendaMessage");
        rendaMessage.textContent = "Você sonha ser um(a) " + profissao.value + " e ganhar menos que 1 salário mínimo por mês?";
    }
    // Validação Eletricista
    if (renda.value >=16567.20 && profissao.value === 'Eletricista')  {
        var rendaAlert = document.getElementById("rendaAlert");
        rendaAlert.hidden = false;
        rendaAlert.className = "alert alert-info fade show";
        var rendaMessage = document.getElementById("rendaMessage");
        var rendaMensal = renda.value/12;
        rendaMessage.textContent = "Você sonha ser um(a) Eletricista e ganhar (em média) "+ rendaMensal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +" por mês!";
    }
    // Validação Jogador de Futebol
    if (renda.value >=16567.20 && profissao.value === 'Jogador de Futebol')  {
        var rendaAlert = document.getElementById("rendaAlert");
        rendaAlert.hidden = false;
        rendaAlert.className = "alert alert-info fade show";
        var rendaMessage = document.getElementById("rendaMessage");
        var rendaMensal = renda.value/12;
        
        rendaMessage.textContent = "Você sonha ser um(a) Jogador de Futebol e ganhar (em média) "+ rendaMensal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +" por mês!";
    }
    // Validação Engenheiro
    if (renda.value >=16567.20 && profissao.value === 'Engenheiro')  {
        var rendaAlert = document.getElementById("rendaAlert");
        rendaAlert.hidden = false;
        rendaAlert.className = "alert alert-info fade show";
        var rendaMessage = document.getElementById("rendaMessage");
        var rendaMensal = renda.value/12;
        rendaMessage.textContent = "Você sonha ser um(a) Engenheiro e ganhar (em média) "+ rendaMensal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) +" por mês!";
    }
}

function validar_despesa (){
}

const QuizV2 = () => (
    
  <div>
    <Formik
      initialValues={{
        profissao: '',
        renda: '',
        ensino: '',
        medicina: '',
        outros: '',
        imoveis: '',
        veiculos: '',
        empresas: '',
        investimentos: '',
        dividas: '',
        IR: '',
        criancas_adolescentes: '',
        idosos: '',
      }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        
      }}
    >
      {({ errors, touched}) => (
    <Form>        
        <FormGroup>
            <Row>
                <Col md={2}></Col>
                <Col md={4}>
                    <div>
                        <Label for="profissao" className="col-form-label">
                        <h2>Profissão:</h2>
                        </Label>
                    </div>
                    <div>
                        <Field name="profissao" id="profissao" type="text" className="form-control" data-live-search="true">

                        </Field>
                    </div>
                </Col>
                <Col md={4}>
                    <div>
                        <Label for="renda" className="col-form-label">
                        <h2>Renda:</h2>
                        </Label>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                        </div>
                            <Field name='renda' id='renda' type="number" validate={validar_renda} className="form-control"></Field>
                        <div class="input-group-append">
                            <span class="input-group-text">,00</span>
                        </div>
                    </div>
                </Col>
                <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                    <br/>
                    <Alert hidden class='alert alert-success fade show' align="center" id='rendaAlert'>
                        <p id='rendaMessage'></p>
                    </Alert>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            
        </FormGroup>
        <hr/>
        <FormGroup>
            <Row>
                <h2 align = 'center'>
                    Despesas:
                </h2>
                {/* ENSINO + MEDICINA */}
                <Col md={2}></Col>
                <Col md={4}>
                    <Label for="ensino" className="col-form-label">
                        Ensino:
                    </Label>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">R$</span>
                    </div>
                    <Field name='ensino' placeholder="" type="number" validate={validar_renda} className="form-control"></Field>
                    <div class="input-group-append">
                        <span class="input-group-text">,00</span>
                    </div>
                    </div>
                </Col>
                <Col md={4}>
                <div>
                    <Label for="medicina" className="col-form-label">
                        Medicina:
                    </Label>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">R$</span>
                    </div>
                    <Field name='medicina' type="number" validate={validar_renda} className="form-control"></Field>
                    <div class="input-group-append">
                        <span class="input-group-text">,00</span>
                    </div>
                    </div>
                </div>
                </Col>
                <Col md={2}></Col>
                {/* MENSAGENS - ENSINO + MEDICINA */}
                <Col md={2}></Col>
                <Col md={4}>
                    <Alert hidden class='alert alert-success fade show' align="center" id='ensinoAlert'>
                        <p id='ensinoMessage'></p>
                    </Alert>
                </Col>
                <Col md={4}>
                    <Alert hidden class='alert alert-success fade show' align="center" id='medicinaAlert'>
                        <p id='medicinaMessage'></p>
                    </Alert>
                </Col>
                <Col md={2}></Col>
                 {/* OUTROS */}
                <Col md={4}></Col>
                <Col md={4}>
                    <div>
                        <Label for="outros" className="col-form-label">
                        Outros:
                        </Label>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                        </div>
                        <Field name='outros' placeholder="" type="number" validate={validar_renda} className="form-control"></Field>
                        <div class="input-group-append">
                        <span class="input-group-text">,00</span>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}></Col>
                {/* MENSAGENS - DESPESAS */}
                <Col md={2}></Col>
                <Col md={8}>
                    <Alert hidden class='alert alert-success fade show' align="center" id='despesasAlert'>
                        <p id='despesasMessage'></p>
                    </Alert>
                </Col>
                <Col md={2}></Col>
            </Row>
        </FormGroup>
        <hr/>
        <FormGroup>
            <Row>
                <h2 align = 'center'>
                    Bens:
                </h2>
                {/* IMÓVEIS + VEÍCULOS */}
                <Col md={2}></Col>
                <Col md={4}>
                    <div>
                        <Label for="imoveis" className="col-form-label">
                            Imóveis:
                        </Label>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                        </div>
                        <Field name='imoveis' type="number" validate={validar_renda} className="form-control"></Field>
                        <div class="input-group-append">
                        <span class="input-group-text">,00</span>
                        </div>
                        </div>
                        {errors.imoveis && touched.imoveis && <div>{errors.imoveis}</div>}
                    </div>
                </Col>
                <Col md={4}>
                    <div>
                        <Label for="veiculos" className="col-form-label">
                        Veículos:
                        </Label>
                            <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                            </div>
                            <Field name='veiculos' type="number" validate={validar_renda} className="form-control"></Field>
                            <div class="input-group-append">
                            <span class="input-group-text">,00</span>
                            </div>
                            </div>
                    </div>
                </Col>
                <Col md={2}></Col>
                {/* MENSAGEM - IMÓVEIS + VEÍCULOS */}
                <Col md={2}></Col>
                <Col md={4}>
                    <Alert hidden class='alert alert-success fade show' align="center" id='imoveisAlert'>
                        <p id='imoveisMessage'></p>
                    </Alert>
                </Col>
                <Col md={4}>
                <Alert hidden class='alert alert-success fade show' align="center" id='veiculosAlert'>
                        <p id='veiculosMessage'></p>
                    </Alert>
                </Col>
                <Col md={2}></Col>
            </Row>
        </FormGroup>
        <FormGroup>
            <Row>
                <Col md={2}></Col>
                <Col md={4}>
                    <div>
                        <Label for="empresas" className="col-form-label">
                             Empresas:
                        </Label>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                        </div>
                        <Field name='empresas' type="number" validate={validar_renda} className="form-control"></Field>
                        <div class="input-group-append">
                        <span class="input-group-text">,00</span>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Label for="investimentos" className="col-form-label">
                        Investimentos:
                    </Label>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text">R$</span>
                    </div>    
                    <Field name='investimentos' type="number" validate={validar_renda} className="form-control"></Field>
                    <div class="input-group-append">
                        <span class="input-group-text">,00</span>
                    </div>
                    </div>
                </Col>
                <Col md={2}></Col>
                {/* MENSAGEM - EMPRESAS + INVESTIMENTOS */}
                <Col md={2}></Col>
                <Col md={4}>
                    <Alert hidden class='alert alert-success fade show' align="center" id='empresasAlert'>
                        <p id='empresasMessage'></p>
                    </Alert>
                </Col>
                <Col md={4}>
                <Alert hidden class='alert alert-success fade show' align="center" id='investimentosAlert'>
                        <p id='investimentosMessage'></p>
                    </Alert>
                </Col>
                <Col md={2}></Col>
            </Row>
        </FormGroup>
        <hr/>
        <FormGroup>
            <Row>
                {/* DÍVIDAS + IR DEVIDO */}
                <Col md={2}></Col>
                <Col md={4}>
                    <div>
                        <Label for="dividas" className="col-form-label">
                             <h2>Dívidas:</h2>
                        </Label>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                        </div>    
                        <Field name='dividas' type="number" validate={validar_renda} className="form-control"></Field>
                        <div class="input-group-append">
                            <span class="input-group-text">,00</span>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                        <Label for="irdevido" className="col-form-label">
                            <h2>IR Devido:</h2>
                        </Label>  
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        <span class="input-group-text">R$</span>
                        </div>  
                        <Field name='irdevido' type="number" validate={validar_renda} className="form-control"></Field>
                        <div class="input-group-append">
                        <span class="input-group-text">,00</span>
                        </div>
                        </div>
                </Col>
                <Col md={2}></Col>
                {/* MENSAGEM - DÍVIDAS + IR DEVIDO */}
                <Col md={2}></Col>
                <Col md={4}>
                    <Alert hidden class='alert alert-success fade show' align="center" id='dividasAlert'>
                        <p id='dividasMessage'></p>
                    </Alert>
                </Col>
                <Col md={4}>
                <Alert hidden class='alert alert-success fade show' align="center" id='irdevidoAlert'>
                        <p id='irdevidoMessage'></p>
                    </Alert>
                </Col>
                <Col md={2}></Col>
            </Row>
        </FormGroup>
        <hr/>
        <FormGroup>
            <Row>
                {/* CRIANCAS + IDOSOS */}
                <h2 align = 'center'>
                    Destinação Social:
                </h2>
                <Col md={2}></Col>
                <Col md={4}>
                    <div>
                        <Label for="criancas_adolescentes" className="col-form-label">
                            Crianças e Adolescentes:
                        </Label>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                        </div>  
                        <Field name='criancas_adolescentes' type="text" validate={validar_renda} className="form-control"></Field>
                        <div class="input-group-append">
                            <span class="input-group-text">,00</span>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                        <Label for="idosos" className="col-form-label">
                            Idosos:
                        </Label>    
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                        </div>  
                        <Field name='idosos' type="text" validate={validar_renda} className="form-control"></Field>
                        <div class="input-group-append">
                            <span class="input-group-text">,00</span>
                        </div>
                        </div>
                </Col>
                <Col md={2}></Col>
                {/* MENSAGEM - CRIANCAS + IDOSOS */}
                <Col md={2}></Col>
                <Col md={4}>
                    <Alert hidden class='alert alert-success fade show' align="center" id='criancasAlert'>
                        <p id='criancasMessage'></p>
                    </Alert>
                </Col>
                <Col md={4}>
                <Alert hidden class='alert alert-success fade show' align="center" id='idososAlert'>
                        <p id='idososMessage'></p>
                    </Alert>
                </Col>
                <Col md={2}></Col>
            </Row>
        </FormGroup>
        <FormGroup>
            <Row>
                <hr/>
                {/* IR A PAGAR */}
                <h2 align = 'center'>
                    IR a Pagar
                </h2>
                <Col md={2}></Col>
                <Col md={8}>
                    <div>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">R$</span>
                        </div>  
                        <Field name='irapagar' type="text" validate={validar_renda} className="form-control"></Field>
                        <div class="input-group-append">
                            <span class="input-group-text">,00</span>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md={2}></Col>
                {/* MENSAGEM - IR A PAGAR */}
                <Col md={2}></Col>
                <Col md={8}>
                    <Alert hidden class='alert alert-success fade show' align="center" id='criancasAlert'>
                        <p id='criancasMessage'></p>
                    </Alert>
                </Col>
                <Col md={2}></Col>
            </Row>
        </FormGroup>
    </Form>
      )}
    </Formik>
  </div>
);

export default QuizV2;