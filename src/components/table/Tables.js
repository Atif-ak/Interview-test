import React,{useState} from 'react';
import './Table.css'
import { FormOutlined } from '@ant-design/icons'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

const Tables = ({table,head,body})=>{

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [model,setModel] = useState([])

  const showModal = (data) => {
    setIsModalVisible(true);
    setModel(data)
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return(
        <>
    {
        table && 
        <table className="table">
      <thead>
        {
        head.map((data,index)=> <th key={index} style={{height:'30px',backgroundColor:'black',color:'white'}}>{data}</th>) 
        }
      </thead>
      <tbody>
        {
        body.map((data,index)=>{
          return(
            <>
            <tr key={index} style={{textAlign: 'center',backgroundColor:'#CBCBCB'}}>
              <td>{data.no}</td>
              <td>{data.name}</td>
              <td style={{width:"40px",height:"40px",backgroundSize:"cover",backgroundImage:`url(${data.image})`}}></td>
              <td>{data.Product}</td>
              <td>{data.Quantity}</td>
              <Button type="primary" style={{height:'50px',width:'50px'}} onClick={()=>showModal(data)}> 
              <FormOutlined className="expand"></FormOutlined> </Button>        
            </tr>
            <hr></hr>
            </>
          )
        }) 
        }
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Product Name : {model.name}</p>
                    <p>Desciption : {model.Product}</p>
                    <p>Quantity : {model.Quantity}</p>
      </Modal>  
      </tbody>
        </table>
    }
        </>
    )
}
export default Tables