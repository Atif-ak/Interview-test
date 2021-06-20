import React,{useState} from 'react';
import Tables from '../table/Tables'
import { UpOutlined,DownOutlined } from '@ant-design/icons'
import { DownloadOutlined } from '@ant-design/icons'
import './Dropdown.css'
import {CSVLink} from 'react-csv'

  const head = ['Sr no.','Agri Input Category','Product Image','Product Description','Order Quantity']
 
  const body = [{no:'1',name: 'Seeds/Seedings',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt51TQEsUqXu96L9FbLV7BCzIxh2rZ7hhYA&usqp=CAU',Product:'Chili Sakata 651 (1500 seeds)',Quantity:'26'},
{no:'2',name:'Nutrients/Fertilizer',image:'https://images-na.ssl-images-amazon.com/images/I/91a9-1hw3aL.jpg',Product:'Acme Brand Fert A/B Set - 50Kg',Quantity:'114'},
{no:'3',name:'Pesticide/Fungicide',image:'https://5.imimg.com/data5/DC/EP/CM/SELLER-3747077/bharat-turbine-fungicides-500x500.PNG',Product:'Viliants ME(Methyl Engenol) 30ml',Quantity:'40'},
{no:'4',name:'Growing Medium',image:'https://images-na.ssl-images-amazon.com/images/I/91a9-1hw3aL.jpg',Product:'Acne Brand Cocopeat - 30kg',Quantity:'20'},
{no:'5',name:'Growing Medium',image:'https://5.imimg.com/data5/DC/EP/CM/SELLER-3747077/bharat-turbine-fungicides-500x500.PNG',Product:'Acne Brand Cocohusk - 50kg',Quantity:'50'},
{no:'6',name:'Pesticide/Fungicide',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt51TQEsUqXu96L9FbLV7BCzIxh2rZ7hhYA&usqp=CAU',Product:'Acme Brand Cocopeat-30kg',Quantity:'4'}]
 
const headers = [{label:'Sr no',key:'no'},
{label:'Product Name',key:'name'},
{label:'Product Image',key:'image'},
{label:'Product',key:'Product'},
{label:'Quantity',key:'Quantity'}]

const csvReport = {
    filename:'Report.csv',
    headers: headers,
    data: body
}

const Dropdown =()=>{
    const [table,setTable] = useState(false)
    const [updown , setUpDown] = useState(false)
    return (
        <>
             <div className="dropdown-row">
                <div onClick={()=>{
                    setTable(!table) 
                    setUpDown(!updown)}} className="dropdown">
                    <label for="id2" style={{fontWeight:600}}>
                <input name="AGBUY13042020_1042" type="radio" id="id2"/>AGBUY13042020_1042
                </label>
                { updown ?   <UpOutlined /> :   <DownOutlined />}
                </div> 
                <div className="name"><p>Alex Lee</p><p>Mon, 13 Apr,10:43 AM</p></div>  
                <CSVLink {...csvReport}><div className="download">
                    <div className="img"></div>
                    <div>RFQList_13042020_1042</div>
                    <DownloadOutlined />
                </div> </CSVLink> 
            </div>
            <Tables table={table} head={head} body={body}/> 
            <div className="dropdown-row">
                <div className="dropdown">
                    <label for="id1" style={{fontWeight:600}}>
                <input name="AGBUY13042020_1042" type="radio" id="id1"/>AGBUY09042020_1112
               </label>
               <DownOutlined />
                </div> 
                <div className="name"><p>Alex Lee</p><p>Thu, 19 Apr,11:12 AM</p></div>  
                <div className="download2">
                    <div className="img"></div>
                    <div>RFQList_09042020_1112</div>
                    <DownloadOutlined />
                </div> 
            </div>
        </>
    )
}

export default Dropdown