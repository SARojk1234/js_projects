import { useState } from "react";
import data from './data'
import './style.css'

const accordian = ()=>{

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiSelected, setMultiSelected] = useState([])

    const handleSingleSelection = (getCurrentId)=>{
        setSelected(getCurrentId === selected ? null : getCurrentId)

    }
    const handleMultiSelection =(getCurrentId)=>{
        let cpyMultiple = [...multiSelected];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiSelected(cpyMultiple);
    }

    return(
     <div className="wrapper">
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)} className="button">Enable MultiSelection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                data.map(dataItem=><div className="item">
                    <div onClick={enableMultiSelection ? ()=> handleMultiSelection(dataItem.id) : ()=>handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.title}</h3>
                        <span>+</span>
                        </div>{
                            selected === dataItem.id || multiSelected.indexOf(dataItem.id)!== -1 ? (<div className="content">{dataItem.content}</div>): null
                        }
                    </div>)
                
                
                : <div>No data found</div>
            }
        </div>
    </div>
    )

}

export default accordian;

