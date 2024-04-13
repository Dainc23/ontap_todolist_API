import React, { useEffect, useState } from 'react';
import Header from './Header';
import Todo from './Todo';
import axios from 'axios';

const List = () => {
    const [arr, setArr] = useState([])
    const url = 'https://6618192a9a41b1b3dfbc40cf.mockapi.io/list'
    const getdata = () => {

        axios.get(url)
            .then(function (res) {
                console.log(res)
                setArr(res.data)
            })}
    useEffect(()=>{
        getdata();
        setArr(JSON.parse(localStorage.getItem("arr")))

    },[])

    const RemovebyID=(id)=>{
        setArr(arr.filter(item=>item.id !=id))
        localStorage.setItem("arr",JSON.stringify(arr.filter(item=>item.id !=id)))
        axios.delete(url +'/'+id)
        .then(function(res){
            console.log(res)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    const add=(text)=>{
        let newdoto=[]
        if(arr.length>0){
            setArr([...arr,{id:Number(arr[arr.length-1].id+1),name:text}])
            localStorage.setItem("arr",JSON.stringify([...arr,{name:text,id:Number(arr[arr.length-1].id+1)}]))
        }
        else{
            setArr([...arr,{id:1,name:text}])
            localStorage.setItem("arr",JSON.stringify([...arr,{name:text,id:1}]))
        }
        axios.post(url,newdoto)
        .then(function(res){
        console.log(res)
        })
        .catch(function(error){
        console.log(error)
        })

    }
    




    return (
        <div className='contain'>
            <Header add={add}/>
            <div className='list'>
                {arr.map((item,index)=>(
                    <Todo todo={item} key={index} RemovebyID={RemovebyID}/>
                ))}
                    

               
            </div>

        </div>
    );
}

export default List;
