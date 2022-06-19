import React, { useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './styles';
import {format} from 'date-fns';
import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';


function Task({match}) {
  const [redirect, setRedirect] = useState(false);
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();
  const [id, setId] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState('11:11:11:11:11');

  async function lateVerify(){
    await api.get(`/task/filter/late/:11:11:11:11:11`)
    .then(response => {
     setLateCount(response.data.length)
    })
  }

  async function  LoadTaskDatails(){
    await api.get(`/task/${match.params.id}`)
    .then(response=> {
      setType(response.data.type)
      setDone(response.data.done)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when), 'HH:mm'))
    })

  }

async function Save(){
  //Validação dos dados
  if(!title)
    return alert("Você precisa informar o titulo da tarefa")
  else if(!description)
    return alert("Você precisa informar o descrição da tarefa")
  else if(!type)
    return alert("Você precisa selecionar o tipo da tarefa")
  else if(!date)
    return alert("Você precisa definira data da tarefa")
  else if(!hour)
    return alert("Você precisa definir a hora da tarefa")


  if(match.params.id){
    await api.put(`/task/${match.params.id}`,{
      macaddress,
      done,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`
    }).then(() =>
    setRedirect(true)
    )
  }else{
    await api.post('/task',{
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`
    }).then(() =>
    setRedirect(true)
    )}
}

  async function remove(){
    const res = window.confirm('Deseja excluir ?');
    
    if(res === true){
      await api.delete(`/task/${match.params.id}`)
      .then(() => setRedirect(true));
    }
  }

  useEffect(() => {
    lateVerify();
    LoadTaskDatails();
  }, [])

  return (
    <S.Container>
      { redirect && <Redirect to='/' /> }
      <Header lateCount={lateCount} clickNotification={Notification}/>

     <S.Form>
         <S.TypeIcons>
            {
              TypeIcons.map((icon, index) => (
                index > 0 && 
                <button type="button" onClick={() => setType(index)}>
                  <img src={icon} alt="Tipo da Tarefa"
                  className={type && type !== index && 'inative'}/>
                </button>
              ))
            }
         </S.TypeIcons>

         <S.Input>
           <span>Título</span>
           <input type="text" placeholder="Título da Tarefa." 
           onChange= {e => setTitle(e.target.value)} value= {title}/>
         </S.Input>

         <S.TextArea>
           <span>Discrição</span>
           <textarea rows={5} placeholder="Detalhes da tarefa..." 
           onChange= {e => setDescription(e.target.value)} value= {description} />
         </S.TextArea>

         <S.Input>
           <span>Data</span>
           <input type="date" placeholder="Título da Tarefa."
           onChange= {e => setDate(e.target.value)} value= {date} />
         </S.Input>

         <S.Input>
           <span>Hora</span>
           <input type="time" placeholder="Título da Tarefa."
           onChange= {e => setHour(e.target.value)} value= {hour} />
         </S.Input>

         <S.Options>
           <div>
             <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
             <span>CONCLUÍDO</span>
           </div>
           { match.params.id && <button type="button" onClick={remove} >EXCLUIR</button> }
         </S.Options>

         <S.Save>
           <button type="button" onClick={Save}>SALVAR</button>
         </S.Save>


     </S.Form>

     
     <Footer/>
    </S.Container>
  )
}


export default Task;